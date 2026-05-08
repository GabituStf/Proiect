<template>
  <div class="home">
    <div class="hero">
      <h1>🐾 Bun venit la PetBite!</h1>
      <p>Hrana premium pentru câinele tău fericit</p>
      <RouterLink to="/products" class="btn">Vezi Produsele</RouterLink>
    </div>
    <div class="dog-images">
      <h2>Câinii noștri fericiți 🐶</h2>
      <div class="images-grid">
        <img v-for="(img, i) in dogImages" :key="i" :src="img" alt="caine" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const dogImages = ref([])

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/api/dog-images')
  dogImages.value = res.data.message
})
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #e67e22, #f39c12);
  color: white;
  text-align: center;
  padding: 4rem 2rem;
}
.hero h1 { font-size: 2.5rem; margin-bottom: 1rem; }
.hero p { font-size: 1.2rem; margin-bottom: 2rem; }
.btn {
  background: white;
  color: #e67e22;
  padding: 0.8rem 2rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
}
.dog-images { padding: 2rem; text-align: center; }
.dog-images h2 { margin-bottom: 1.5rem; font-size: 1.8rem; }
.images-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 900px;
  margin: 0 auto;
}
.images-grid img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}
</style>