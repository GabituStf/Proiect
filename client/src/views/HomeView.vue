<template>
  <div class="home">
    <div class="banner">
      <div class="banner-text">
        <span class="badge">EXCLUSIV ONLINE</span>
        <h1>-20% la hrana premium<br>pentru cainele tau!</h1>
        <p>Oferta valabila pana pe 31 Mai 2026</p>
        <RouterLink to="/products" class="btn-banner">Vezi Oferta</RouterLink>
      </div>
      <img src="https://www.megapet.ro/continut/upload/rasa-caini-Rottweiler-megapet.jpg" alt="caine" class="banner-dog" />
    </div>

    <div class="avantaje">
      <div class="avantaj">
        <strong>LIVRARE GRATUITA</strong>
        <p>pentru comenzile peste 199 lei</p>
      </div>
      <div class="avantaj">
        <strong>SUPORT ONLINE</strong>
        <p>intre orele 9:00 si 18:00</p>
      </div>
      <div class="avantaj">
        <strong>CATALOG</strong>
        <p>cu toate ofertele lunii</p>
      </div>
    </div>

    <div class="categorii">
      <h2>Categorii Produse</h2>
      <div class="cat-grid">
        <RouterLink to="/products?filter=Uscata" class="cat-card">
          <img src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400" alt="boabe" />
          <span>Hrana Uscata</span>
        </RouterLink>
        <RouterLink to="/products?filter=Umeda" class="cat-card">
          <img src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=400" alt="conserva" />
          <span>Hrana Umeda</span>
        </RouterLink>
        <RouterLink to="/products?filter=Snack" class="cat-card">
          <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400" alt="snack" />
          <span>Snack-uri</span>
        </RouterLink>
      </div>
    </div>

    <div class="featured">
      <h2>PRODUSELE SAPTAMANII</h2>
      <div class="products-grid">
        <div v-for="p in featuredProducts" :key="p.id" class="product-card">
          <h3>{{ p.name }}</h3>
          <p class="brand">{{ p.brand }}</p>
          <p class="weight">{{ p.weight }}</p>
          <p class="price">{{ p.price }} lei</p>
          <RouterLink to="/products" class="btn-card">Cumpara</RouterLink>
        </div>
      </div>
    </div>

    <div class="banner2">
      <div>
        <h2>Comanda acum si primesti livrare gratuita!</h2>
        <p>Pentru comenzi peste 199 lei livrarea este gratuita in toata tara</p>
      </div>
      <RouterLink to="/products" class="btn-banner2">Vezi Produsele</RouterLink>
    </div>

    <footer>
      <div class="footer-col">
        <h3>Caini Fericiti</h3>
        <p>Hrana premium pentru cainele tau fericit. Livrare rapida in toata Romania.</p>
      </div>
      <div class="footer-col">
        <h3>Link-uri rapide</h3>
        <RouterLink to="/">Acasa</RouterLink>
        <RouterLink to="/products">Produse</RouterLink>
      </div>
      <div class="footer-col">
        <h3>Contact</h3>
        <p>Email: contact@cainifericiti.ro</p>
        <p>Telefon: 0700 000 000</p>
        <p>Program: Luni-Vineri 9:00-18:00</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const featuredProducts = ref([])

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
  featuredProducts.value = unique.slice(0, 4)
})
</script>

<style scoped>
.banner {
  background: linear-gradient(135deg, #f9a825, #f57f17);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 4rem;
  min-height: 300px;
}
.badge { background: white; color: #f57f17; padding: 0.3rem 1rem; border-radius: 20px; font-weight: bold; font-size: 0.85rem; }
.banner-text h1 { font-size: 2.5rem; color: white; margin: 1rem 0; text-shadow: 1px 1px 3px rgba(0,0,0,0.2); }
.banner-text p { color: white; margin-bottom: 1.5rem; }
.btn-banner { background: #2e7d32; color: white; padding: 0.8rem 2rem; border-radius: 25px; text-decoration: none; font-weight: bold; }
.banner-dog { width: 350px; height: 280px; object-fit: cover; border-radius: 15px; box-shadow: 0 8px 25px rgba(0,0,0,0.3); }

.avantaje { display: flex; background: white; border-bottom: 2px solid #eee; }
.avantaj { flex: 1; text-align: center; padding: 1.2rem; border-right: 1px solid #eee; }
.avantaj strong { display: block; color: #2e7d32; font-size: 0.9rem; margin-bottom: 0.3rem; }
.avantaj p { color: #666; font-size: 0.8rem; }

.categorii { padding: 3rem 4rem; background: #f9f9f9; text-align: center; }
.categorii h2 { font-size: 1.8rem; color: #333; margin-bottom: 2rem; }
.cat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 900px; margin: 0 auto; }
.cat-card { position: relative; border-radius: 12px; overflow: hidden; text-decoration: none; box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: transform 0.2s; }
.cat-card:hover { transform: translateY(-5px); }
.cat-card img { width: 100%; height: 180px; object-fit: cover; display: block; }
.cat-card span { display: block; background: #2e7d32; color: white; padding: 0.8rem; font-weight: bold; font-size: 1rem; }

.featured { padding: 3rem 4rem; background: white; }
.featured h2 { text-align: center; font-size: 1.5rem; margin-bottom: 1.5rem; color: #333; }
.products-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
.product-card { border: 1px solid #eee; border-radius: 10px; padding: 1.5rem; text-align: center; transition: box-shadow 0.2s; }
.product-card:hover { box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
.product-card h3 { font-size: 0.95rem; color: #333; margin-bottom: 0.3rem; }
.brand { color: #2e7d32; font-size: 0.85rem; margin-bottom: 0.2rem; }
.weight { color: #999; font-size: 0.8rem; margin-bottom: 0.5rem; }
.price { font-size: 1.3rem; font-weight: bold; color: #f57f17; margin-bottom: 1rem; }
.btn-card { background: #2e7d32; color: white; padding: 0.5rem 1.2rem; border-radius: 20px; text-decoration: none; font-size: 0.85rem; }

.banner2 { background: #2e7d32; color: white; display: flex; justify-content: space-between; align-items: center; padding: 2.5rem 4rem; }
.banner2 h2 { font-size: 1.5rem; margin-bottom: 0.5rem; }
.banner2 p { opacity: 0.85; }
.btn-banner2 { background: #f9a825; color: white; padding: 0.8rem 2rem; border-radius: 25px; text-decoration: none; font-weight: bold; white-space: nowrap; }

footer { background: #1a1a1a; color: #ccc; display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; padding: 3rem 4rem; }
footer h3 { color: white; margin-bottom: 1rem; font-size: 1.1rem; }
footer p { font-size: 0.85rem; margin-bottom: 0.5rem; line-height: 1.6; }
.footer-col a { display: block; color: #ccc; text-decoration: none; margin-bottom: 0.5rem; font-size: 0.85rem; }
.footer-col a:hover { color: #f9a825; }
</style>