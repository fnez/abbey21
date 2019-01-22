<template>
    <div class="footer">
        <p>&#169; <span>{{date}}</span> Copyright Abbey21st Furniture</p>
        
    </div>
</template>

<script>
    let d = new Date();

    export default {
        name: 'FooterComponent',
        components: {},
        data() {
            return {
                title: 'Footer',
                date: d.getFullYear()
            }
        }
    }
</script>

<style scoped lang="sass">
    @import '../_mainStyles'
    @import '../responsive'
    .footer
        position: absolute
        bottom: 0
        width: 100%
        padding: 30px
        h1, h2, p 
            color: initial
</style>