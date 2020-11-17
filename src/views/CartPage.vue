<template lang="pug">
  .s-cart-page
    sHeader
    sMainWrapper(:loc="'cart'")
      sCart

</template>

<script>

  import sHeader from '@/components/common/s-header.vue'
  import sMainWrapper from '@/components/common/s-main-wrapper'
  import sCart from '@/components/cart/s-cart.vue'

  export default {
    name: 'CartPage',
    components: {
      sHeader,
      sMainWrapper,
      sCart
    }
  }
</script>
<style lang="scss">
  .s-cart-page {
    background-color: $colGray;
  }
</style>