<template>
    <div class="contact">
        {{ this.msg }}
    </div>
</template>

<script>
    export default {
        name: 'Contact',
        data() {
            return {
                msg: 'Contact page'
            }
        }
    }
</script>

<style scoped lang="sass">
    @import '../responsive'
</style>