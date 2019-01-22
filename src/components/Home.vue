<template>
  <div class="home">
    <div id="banner" :style="{'background-image': 'url(' + require('../assets/images/living_room/wall_sofa_furniture.jpg') + ')'}"></div>

    <div class="content-container">
      <div class="inner-container">
         <h1>{{ intro_title }}</h1>
        <div class="row"> 
          <img v-for="image in intro_images" :src="image" alt="intro-furniture" class="intro-img">
        </div> 
        <p>{{ intro_copy }}</p> 
      </div>
    </div>

    <div class="content-container lightGray">
      <div class="inner-container column">
          <div v-for="item in sections" class="card">
            <a href="#">
              <figure class="card-image">
                <img :src="item.image" :alt="item.alt">
              </figure>
              <div class="card-content">
                <h2 class="title is-5">{{ item.title }}</h2>
                <p>{{ item.content }}</p>            
              </div>
            </a>
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
      intro_title: 'Welcome to Abbey21st Furniture\'s Website',
      intro_copy: 'Dolor nunc vule putateulr ips dol consem donec semp ertet laciniate ultricie upien disse comete dolo lectus fgillaitollicil tua ludin dolor met quam accumsan ipsun. Dolore con dime netus lullam utlacusadipi scing ipsum molestie euismod lore estibulum vel libero ipsum sit amet sollicitudin ante. Aenean imperdiet aliquet hendrerit. Nunc interdum ullamcorper lectuset pellentesque enim interdum at. Suspendisse malesuada dignissim est, a facilisis ligula rutrum sed.Dolor nunc vule putateulr ips dol consem donec semp ertet laciniate ultricie upien disse comete dolo lectus fgillaitollicil tua ludin dolor met quam accumsan ipsun.Dolore con dime netus lullam utlacusadi pi scing ipsum.',
      intro_images: [ 
        'https://picsum.photos/1200/800', 
        'https://picsum.photos/1200/800',   
        'https://picsum.photos/1200/800'
      ],
      sections: [
        { 
          image: require('../assets/images/living_room/living_room_6pc_set_01.png'),
          alt: 'Living Room',
          title: 'Living Room',
          content: 'Dolor nunc vule putateulr ips dol consem donec semp ertet laciniate ultricie upien disse comete dolo lectus fgillaitollicil tua ludin dolor met quam accumsan ipsun. Dolore con dime netus lullam utlacusadipi scing ipsum molestie euismod lore estibulum vel'
        },
         { 
          image: require('../assets/images/bedroom/bedroom_set_01.png'),
          alt: 'Bedroom',
          title: 'Bedroom',
          content: 'Dolor nunc vule putateulr ips dol consem donec semp ertet laciniate ultricie upien disse comete dolo lectus fgillaitollicil tua ludin dolor met quam accumsan ipsun. Dolore con dime netus lullam utlacusadipi scing ipsum molestie euismod lore estibulum vel'
        },
        { 
          image: require('../assets/images/office/casual_cappuccino_desk_office_01.png'),
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
    background-position: center
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
      padding: 60px 0
      .row
        display: flex
        flex-direction: row
        align-items: center
        margin: 30px 0
        img.intro-img
          width: 33.3%
      &.column
        display: flex
      .card
        margin: 0 10px
        a 
          color: initial
  
</style>