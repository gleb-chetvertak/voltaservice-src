<template lang="pug">
  .s-single-item-page
    sHeader
    sMainWrapper(:loc="'single-item'")
      sSingleItem

</template>

<script>

  import sHeader from '@/components/common/s-header.vue'
  import sMainWrapper from '@/components/common/s-main-wrapper'
  import sSingleItem from '@/components/singleItem/s-single-item.vue'

  export default {
    name: 'SingleItemPage',
    components: {
      sHeader,
      sMainWrapper,
      sSingleItem
    },
    props: {
    }
  }
</script>

<style lang="scss">
  .s-single-item-page {
    background-color: $colGray;
  }
</style>