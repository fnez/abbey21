<template>
  <div id="app">
    <nav class="navbar bd-special-shadow" role="navigation">
      <div class="container">
        <div class="navbar-brand">
          <a href="/" class="navbar-item">
            <span class="logo">A21</span>
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
            <router-link class="navbar-item"  to="/furniture">Furniture</router-link>
            <router-link class="navbar-item"  to="/contact">Contact</router-link>
            <router-link class="navbar-item"  to="/faq">FAQ/Preguntas</router-link>
            <a class="navbar-item" target="_blank" href="https://www.progressivelp.com/onlineapplication/OnlineApplication.aspx?kid=1&sid=Abbey7045211288">
              <button class="button is-primary is-outlined">
                <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                Credit Apply
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
    
    <!-- CONTENT FROM ROUTER -->
    <router-view />
    <footer-component />

  </div>
</template>

<script>
import FooterComponent from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    'footer-component': FooterComponent
  }
}
</script>

<style lang="sass">
@import '../node_modules/bulma/bulma.sass'
@import '_mainStyles'
@import '_responsive'

#app
  position: relative; //to adjust footer
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  flex: 1
  nav.navbar 
    background-color: #fff
    position: fixed
    top: 0
    z-index: 1
    width: 100%
    border-bottom: 1px solid lightGray
    div.container
      padding: 20px
      max-width: 1200px
      margin: 0 auto
      div.navbar-brand
        a.navbar-item
          &:hover 
            background-color: initial
            color: initial
          span.logo
            background-color: $primary
            border-radius: 50px
            padding: 10px
            color: #fff
            font-weight: bold
          h1.logo-title 
            font-weight: bold
            margin-left: 10px
            font-size: 25px
      div.navbar-menu
        div.navbar-end
          .navbar-item
            &:hover
              background-color: initial
              color: $primary
            .button i 
              margin: 0 6px
</style>
