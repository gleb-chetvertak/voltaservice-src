<template lang="pug">
  .s-compare-page
    sHeader
    sMainWrapper(:loc="'compare'")
      sCompare

</template>

<script>

  import sHeader from '@/components/common/s-header.vue'
  import sMainWrapper from '@/components/common/s-main-wrapper'
  import sCompare from '@/components/compare/s-compare.vue'

  export default {
    name: 'ComparePage',
    components: {
      sHeader,
      sMainWrapper,
      sCompare
    }
  }
</script>
<style lang="scss">
  .s-compare-page {
    background-color: $colGray;
  }
</style>