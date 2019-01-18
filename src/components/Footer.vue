<template>
    <div class="footer">
        <p>&#169; Copyright Abbey21st Furniture</p>
    </div>
</template>

<script>
    export default {
        name: 'FooterComponent',
        components: {},
        data() {
            return {
                title: 'Footer'
            }
        }
    }
</script>

<style scoped lang="sass">
    @import '../_mainStyles'
    @import '../responsive'
    .footer
        h1, h2, p 
            color: initial
</style>