<template>
  <div id="app">
    <nav>
      <div class="logo">🐾 PetBite</div>
      <div class="nav-links">
        <RouterLink to="/">Acasă</RouterLink>
        <RouterLink to="/products">Produse</RouterLink>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: Arial, sans-serif; background: #f5f5f5; }
nav {
  background: #e67e22;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo { color: white; font-size: 1.5rem; font-weight: bold; }
.nav-links a {
  color: white;
  text-decoration: none;
  margin-left: 1.5rem;
  font-size: 1rem;
}
.nav-links a:hover { text-decoration: underline; }
</style>