<template lang="pug">
  .s-store-page
    sHeader
    sMainWrapper(:loc="'store'")
      sCatalog

</template>

<script>

  import sHeader from '@/components/common/s-header.vue'
  import sMainWrapper from '@/components/common/s-main-wrapper'
  import sCatalog from '@/components/catalog/s-catalog.vue'

  export default {
    name: 'StorePage',
    components: {
      sHeader,
      sMainWrapper,
      sCatalog
    }
  }
</script>

<style lang="scss">
  .s-store-page {
    background-color: $colGray;
  }
</style>