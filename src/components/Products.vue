<template>
    <div class="products">
        {{ this.msg }}
    </div>
</template>

<script>
    export default {
        name: 'Furniture',
        data() {
            return {
                msg: 'Products go here'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    @import '../responsive'
</style>
       