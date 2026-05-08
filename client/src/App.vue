<template>
  <div id="app">
    <div class="topbar">
      LIVRARE GRATUITA pentru comenzile peste 199 lei
    </div>
    <nav>
      <div class="logo">Caini Fericiti</div>
      <div class="nav-links">
        <RouterLink to="/">Acasa</RouterLink>
        <RouterLink to="/products">Produse</RouterLink>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Arial', sans-serif; background: #f5f5f5; }
.topbar {
  background: #2e7d32;
  color: white;
  text-align: center;
  padding: 0.4rem;
  font-size: 0.85rem;
}
nav {
  background: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #f9a825;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.logo { color: #2e7d32; font-size: 1.8rem; font-weight: bold; }
.nav-links a {
  color: #333;
  text-decoration: none;
  margin-left: 1.5rem;
  font-size: 1rem;
  font-weight: 500;
}
.nav-links a:hover { color: #2e7d32; }
</style>