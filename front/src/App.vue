<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <router-link to="/" class="navbar-brand"></router-link> 
      <router-link to="/" class="navbar-brand"> <img src="/home.ico" alt="" width="30" height="24" class="d-inline-block align-text-top">Home </router-link> 
      <router-link to="/recetas" class="navbar-brand">Recetas</router-link> 
      <router-link to="/crear" class="navbar-brand">Crear</router-link> 
      <router-link to="/about" class="navbar-brand">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #ffffff;
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>