<template lang="pug">
  .s-single-item
    b-container(fluid).s-single-item__container
      sBreadcrumbs(:directory="directory")
      b-row
        b-col
          .s-single-item__selectors
            h5.s-single-item__selector(
              :class="isConfigActive ? 's-single-item__selector--selected' : ''",
              @click="updateIsConfigActive(true)"
            ) Запрос на подбор оборудования
            h5.s-single-item__selector(
              :class="!isConfigActive ? 's-single-item__selector--selected' : ''",
              @click="updateIsConfigActive(false)"
            ) Модельный ряд
          sSingleItemConfig(
            v-if="isConfigActive",
            :product="product",
            :productGroup="productGroup",
            @updateSelectedProduct="updateSelectedProduct"
          )
          sSingleItemModify(
            v-else,
            :product="product",
            :productGroup="productGroup",
            @updateSelectedProduct="updateSelectedProduct"
          )
        b-col
          sSingleItemSelected(
            :product="product"
          )

</template>

<script>

  import sBreadcrumbs from '@/components/common/s-breadcrumbs'
  import sSingleItemModify from '@/components/singleItem/s-single-item-modify.vue'
  import sSingleItemConfig from '@/components/singleItem/s-single-item-config.vue'
  import sSingleItemSelected from '@/components/singleItem/s-single-item-selected.vue'
  import {mapGetters} from 'vuex'

  export default {
    name: 's-single-item',
    props: {
    },
    components: {
      sBreadcrumbs,
      sSingleItemConfig,
      sSingleItemModify,
      sSingleItemSelected
    },
    data(){
      return {
        productId: Number(this.$route.params.id),
        product: {},
        productGroup: {},
        isConfigActive: false
      }
    },
    mounted(){
      this.product = this.SINGLE_PRODUCT(this.productId);
      this.productGroup = this.GROUP_OF_PRODUCT(this.product['group_id']);
    },
    computed: {
      ...mapGetters([
        'SPECS',
        'GROUP_OF_PRODUCT',
        'CATEGORY_OF_PRODUCT',
        'SINGLE_PRODUCT'
      ]),
      directory(){
        let tree = [
          {
            name: this.CATEGORY_OF_PRODUCT(this.product['category_id']).name,
            link: '/store'
          },
          {
            name: this.productGroup.name,
            link: `/single-item/${this.product.id}`
          },
          {
            name: this.product.name,
            link: `/single-item/${this.product.id}`
          }
        ];
        return tree;
      }
    },
    methods: {
      updateSelectedProduct(newProduct){
        this.product = newProduct;
      },
      updateIsConfigActive(p){
        this.isConfigActive = p;
      }
    }
  }
</script>

<style lang="scss">
  .s-single-item {
    min-height: 650px;
    padding-bottom: 20px;

    &__container {
      max-width: $desktop;
    }

    &__img {
      max-width: 600px;
    }

    &__selectors {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    &__selector {
      display: flex;
      padding: 20px 30px;
      border: 1px solid rgba(50,50,50,.15);
      justify-content: center;
      align-items: center;
      text-align: center;
      color: $colBlue;
      background-color: $colGray;
      cursor: pointer;

      &:hover {
        background-color: $colWhite;
      }

      &--left {
        border-right: 0;
      }

      &--selected {
        border-bottom: 0;
        background-color: $colWhite;
        cursor: auto;
      }

    }

  }
</style>