<template>
  <div class="home">
    <div id="banner" v-bind:style="{backgroundImage: 'url(' + mainImg + ')'}"></div>

    <div class="content-container" v-for="item in intro">
      <div class="inner-container">
        <h1>{{ item.msg }}</h1>
        <div class="row">
          <img v-for="el in item.images" v-bind:src="el" alt="intro-furniture">
        </div>
        <p>{{ item.content }}</p>    
      </div>
    </div>

    <div class="content-container gray-bg">
      <div class="inner-container column">
          <div v-for="item in sections">
            <h2>{{ item.title }}</h2>
            <p>{{ item.content }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      mainImg: 'https://picsum.photos/1200/800',
      // mainImg: '../assets/images/livingroom_main.jpg',
      intro: [
        { msg: 'Welcome to Your Vue.js App'},
        { content: 'Dolor nunc vule putateulr ips dol consem donec semp ertet laciniate ultricie upien disse comete dolo lectus fgillaitollicil tua ludin dolor met quam accumsan ipsun. Dolore con dime netus lullam utlacusadipi scing ipsum molestie euismod lore estibulum vel libero ipsum sit amet sollicitudin ante. Aenean imperdiet aliquet hendrerit. Nunc interdum ullamcorper lectuset pellentesque enim interdum at. Suspendisse malesuada dignissim est, a facilisis ligula rutrum sed.Dolor nunc vule putateulr ips dol consem donec semp ertet laciniate ultricie upien disse comete dolo lectus fgillaitollicil tua ludin dolor met quam accumsan ipsun.Dolore con dime netus lullam utlacusadi pi scing ipsum.'},
        {        
          images: [
          'https://picsum.photos/1200/800',
          'https://picsum.photos/1200/800',
          'https://picsum.photos/1200/800'
          ]
        }
      ],
      sections: [
        { 
          image: 'https://picsum.photos/1200/800',
          title: 'Living Room',
          content: 'Dolor nunc vule putateulr ips dol consem donec semp ertet laciniate ultricie upien disse comete dolo lectus fgillaitollicil tua ludin dolor met quam accumsan ipsun. Dolore con dime netus lullam utlacusadipi scing ipsum molestie euismod lore estibulum vel'
        },
        { 
          image: 'https://picsum.photos/1200/800',
          title: 'Bedroom',
          content: 'Dolor nunc vule putateulr ips dol consem donec semp ertet laciniate ultricie upien disse comete dolo lectus fgillaitollicil tua ludin dolor met quam accumsan ipsun. Dolore con dime netus lullam utlacusadipi scing ipsum molestie euismod lore estibulum vel'
        },
        { 
          image: 'https://picsum.photos/1200/800',
          title: 'Living Room',
          content: 'Dolor nunc vule putateulr ips dol consem donec semp ertet laciniate ultricie upien disse comete dolo lectus fgillaitollicil tua ludin dolor met quam accumsan ipsun. Dolore con dime netus lullam utlacusadipi scing ipsum molestie euismod lore estibulum vel'
        },        
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import '../mainStyles'
@import '../responsive'
.home 
  position: relative
  #banner
    height: 500px
    background: no-repeat center center fixed
    background-size: cover
    left: 0
    right: 0
    z-index: -1
    margin: initial
    width: 100%
  .content-container
    .inner-container
      max-width: 1200px
      margin: 0 auto
      .row
        display: flex
        flex-direction: row
        align-items: center
        img 
          width: 33.3%
          padding: 0 10px
      &.column
        display: flex
  
</style>