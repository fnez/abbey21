

<template>
  <div id="app">
    <nav class="navbar" role="navigation">
      <div class="navbar-brand">
        <a href="https://bulma.io" class="navbar-item">
          <img src="./assets/furniture-store.png" alt="A furniture store in Charlote, NC">
          <h1 class="logo-title">Abbey 21st Furniture</h1>
        </a>

        <button class="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
      </div>

        <div class="navbar-menu">
          <div class="navbar-end">
            <router-link class="navbar-item" to="/">Home</router-link>
            <router-link class="navbar-item"  to="/products">Furniture</router-link>
            <router-link class="navbar-item"  to="/contact">Contact</router-link>
            <router-link class="navbar-item"  to="/faq">FAQ/Preguntas</router-link>
            <router-link class="navbar-item" to="apply">
              <button class="button is-primary is-outlined">Credit Apply</button>
            </router-link>

          </div>
        </div>
    </nav>
    
    <!-- CONTENT FROM ROUTER -->
    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import '_responsive'

#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h1.logo-title 
    font-weight: bold
    margin-left: 10px
</style>
