<template>
    <div class="products">
        {{ msg }}
        <img v-for="(image, i) in images" :src="image" @click="index = i">
        <vue-gallery-slideshow></vue-gallery-slideshow>
    </div>
</template>

<script>
    import VueGallerySlideshow from 'vue-gallery-slideshow';

    export default {
        name: 'Furniture',
        components: {
            VueGallerySlideshow
        },
        data() {
            return {
                msg: 'Products go here',
                images: [
                    'https://placekitten.com/801/800',
                    'https://placekitten.com/802/800',
                    'https://placekitten.com/803/800',
                    'https://placekitten.com/804/800',
                ],
                index: 0
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    @import '../responsive'
</style>
       