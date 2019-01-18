<template>
    <div class="furniture">
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <div class="image" v-for="(image, imageIndex) in images" :key="imageIndex" @click="index = imageIndex" :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"></div>
    </div>
</template>

<script>
    import VueGallery from 'vue-gallery';
    
    export default {
        name: 'Furniture',
        components: {
            'gallery': VueGallery
        },
        data() {
            return {
                msg: 'Products go here',
                images: [
                    'https://dummyimage.com/800/ffffff/000000',
                    'https://dummyimage.com/1600/ffffff/000000',
                    'https://dummyimage.com/1280/000000/ffffff',
                    'https://dummyimage.com/400/000000/ffffff'
                ],
                index: null
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    @import '../_mainStyles'
    @import '../responsive'

    .image
        float: left
        background-size: cover
        background-repeat: no-repeat
        background-position: center center
        border: 1px solid #ebebeb
        margin: 5px
</style>
       