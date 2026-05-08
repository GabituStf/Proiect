<template>
  <div class="products">
    <h1>🛍️ Produsele Noastre</h1>
    <div class="filters">
      <button @click="filter = 'Toate'" :class="{ active: filter === 'Toate' }">Toate</button>
      <button @click="filter = 'Uscata'" :class="{ active: filter === 'Uscata' }">Uscată</button>
      <button @click="filter = 'Umeda'" :class="{ active: filter === 'Umeda' }">Umedă</button>
      <button @click="filter = 'Snack'" :class="{ active: filter === 'Snack' }">Snack</button>
    </div>
    <div class="grid">
      <div v-for="p in filteredProducts" :key="p.id" class="card">
        <div class="card-icon">🐾</div>
        <h3>{{ p.name }}</h3>
        <p class="brand">{{ p.brand }}</p>
        <p class="desc">{{ p.description }}</p>
        <div class="footer">
          <span class="weight">{{ p.weight }}</span>
          <span class="price">{{ p.price }} lei</span>
        </div>
        <span class="category">{{ p.category }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])
const filter = ref('Toate')

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/api/products')
  const unique = []
  const seen = new Set()
  for (const p of res.data) {
    if (!seen.has(p.name)) {
      seen.add(p.name)
      unique.push(p)
    }
  }
  products.value = unique
})

const filteredProducts = computed(() => {
  if (filter.value === 'Toate') return products.value
  return products.value.filter(p => p.category === filter.value)
})
</script>

<style scoped>
.products { padding: 2rem; max-width: 1200px; margin: 0 auto; }
h1 { text-align: center; margin-bottom: 1.5rem; color: #e67e22; }
.filters { display: flex; justify-content: center; gap: 1rem; margin-bottom: 2rem; }
.filters button {
  padding: 0.5rem 1.5rem;
  border: 2px solid #e67e22;
  background: white;
  color: #e67e22;
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
}
.filters button.active { background: #e67e22; color: white; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}
.card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  position: relative;
}
.card-icon { font-size: 2.5rem; text-align: center; margin-bottom: 0.5rem; }
h3 { text-align: center; color: #333; margin-bottom: 0.3rem; }
.brand { text-align: center; color: #e67e22; font-weight: bold; margin-bottom: 0.5rem; }
.desc { color: #666; font-size: 0.85rem; margin-bottom: 1rem; }
.footer { display: flex; justify-content: space-between; align-items: center; }
.weight { color: #999; font-size: 0.85rem; }
.price { font-size: 1.2rem; font-weight: bold; color: #e67e22; }
.category {
  position: absolute;
  top: 10px; right: 10px;
  background: #fef3e2;
  color: #e67e22;
  padding: 0.2rem 0.6rem;
  border-radius: 10px;
  font-size: 0.75rem;
}
</style>