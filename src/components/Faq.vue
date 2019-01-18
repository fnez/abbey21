<template>
  <div class="faq">
    <h1>{{ this.title }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'FAQ',
      subTitle: 'Frequently Asked Questions',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import '../mainStyles'
  @import '../responsive'
</style>
