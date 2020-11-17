<template lang="pug">
  .s-catalog
    b-container(fluid).s-catalog__container
      sBreadcrumbs
      .s-catalog__items
        sCatalogItem(
          v-for="p in PRODUCTS",
          :key="p.id",
          :product="p"
        )
</template>

<script>

  import sBreadcrumbs from '@/components/common/s-breadcrumbs'
  import sCatalogItem from '@/components/catalog/s-catalog-item.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 's-catalog',
    components: {
      sBreadcrumbs,
      sCatalogItem
    },
    data(){
      return {
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS'
      ]),
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'GET_CATEGORIES_FROM_API',
        'GET_GROUPS_FROM_API',
        'GET_SPECS_FROM_API'
      ])
    },
    mounted(){
      if (!this.PRODUCTS.length) {
        this.GET_PRODUCTS_FROM_API();
        this.GET_CATEGORIES_FROM_API();
        this.GET_GROUPS_FROM_API();
      }
    }
  }
</script>

<style lang="scss">
  .s-catalog {
    min-height: 650px;
    padding-bottom: 20px;

    &__container {
      max-width: $desktop;
    }

    &__items {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
    }

  }
</style>