<template>
  <div class="home">
    <div id="banner" :style="{'background-image': 'url(' + require('../assets/images/living_room/wall_sofa_furniture.jpg') + ')'}"></div>

    <div class="content-container" v-for="item in intro">
      <div class="inner-container">
        <h1>{{ item.msg }}</h1>
        <div class="row">
          <img v-for="el in item.images" v-bind:src="el" alt="intro-furniture">
        </div>
        <p>{{ item.copy }}</p>
      </div>
    </div>

    <div class="content-container gray-bg">
      <div class="inner-container column">
          <div v-for="item in sections">
            <img :src="item.image" :alt="item.alt">
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
      intro: [
        { msg: 'Welcome to Abbey21st Furniture\'s Website'},
        { copy: 'Dolor nunc vule putateulr ips dol consem donec semp ertet laciniate ultricie upien disse comete dolo lectus fgillaitollicil tua ludin dolor met quam accumsan ipsun. Dolore con dime netus lullam utlacusadipi scing ipsum molestie euismod lore estibulum vel libero ipsum sit amet sollicitudin ante. Aenean imperdiet aliquet hendrerit. Nunc interdum ullamcorper lectuset pellentesque enim interdum at. Suspendisse malesuada dignissim est, a facilisis ligula rutrum sed.Dolor nunc vule putateulr ips dol consem donec semp ertet laciniate ultricie upien disse comete dolo lectus fgillaitollicil tua ludin dolor met quam accumsan ipsun.Dolore con dime netus lullam utlacusadi pi scing ipsum.'},
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
          image: '../assets/images/bedroom/artesia_bedroom_set_02.png',
          alt: 'Living Room',
          title: 'Living Room',
          content: 'Dolor nunc vule putateulr ips dol consem donec semp ertet laciniate ultricie upien disse comete dolo lectus fgillaitollicil tua ludin dolor met quam accumsan ipsun. Dolore con dime netus lullam utlacusadipi scing ipsum molestie euismod lore estibulum vel'
        },
        { 
          image: 'https://picsum.photos/1200/800',
          alt: 'Bedroom',
          title: 'Bedroom',
          content: 'Dolor nunc vule putateulr ips dol consem donec semp ertet laciniate ultricie upien disse comete dolo lectus fgillaitollicil tua ludin dolor met quam accumsan ipsun. Dolore con dime netus lullam utlacusadipi scing ipsum molestie euismod lore estibulum vel'
        },
        { 
          image: 'https://picsum.photos/1200/800',
          alt: 'Office',
          title: 'Office',
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
    background-repeat: no-repeat 
    background-attachment: fixed
    background-position: 10px -250px
    background-size: cover
    left: 0
    right: 0
    z-index: -1
    margin: initial
    width: 100%
  .content-container
    .inner-container
      max-width: 800px
      margin: 30px auto
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