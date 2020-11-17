<template lang="pug">
  .s-catalog-item
    .s-catalog-item__meta
      p.s-catalog-item__meta-text Код товара: {{product.id}}
      .s-catalog-item__meta-icons
        sScales(
          :type="'catalog'",
          :isActive="isInCompare",
          @click.native="addToCompare",
        ).s-catalog-item__meta-icon
        sCartIcon(
          :type="'catalog'",
          :isActive="isInCart",
          @click.native="addToCart",
        )
    img(
      :src="product.image",
      alt="Image"
      ).s-catalog-item__img
    router-link(:to="{path: `/single-item/${product.id}`}")
      h3.s-catalog-item__headline {{product.name}}
    .s-catalog-item__props
      p.s-catalog-item__par
        span Цена:
        span {{product.price}} USD
</template>

<script>

  import sCartIcon from '@/components/common/s-cart-icon.vue'
  import sScales from '@/components/common/s-scales.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 's-catalog-item',
    props: {
      product: {
        type: Object,
        default(){
          return {};
        }
      }
    },
    components: {
      sCartIcon,
      sScales
    },
    data(){
      return {
      }
    },
    computed: {
      ...mapGetters([
        'CART',
        'COMPARE'
      ]),
      isInCompare(){
        let check = false;
        this.COMPARE.map(i => {
          if (this.product.id === i.id) {
            check = true;
          }
        })
        return check;
      },
      isInCart(){
        let check = false;
        this.CART.map(i => {
          if (this.product.id === i.id) {
            check = true;
          }
        })
        return check;
      }
    },
    methods: {
      ...mapActions([
        'ADD_PRODUCT_TO_CART',
        'ADD_PRODUCT_TO_COMPARE',
        'REMOVE_PRODUCT_FROM_COMPARE_BY_ID',
        'REMOVE_PRODUCT_FROM_CART_BY_ID'
      ]),
      addToCompare(){
        if (this.isInCompare){
          this.REMOVE_PRODUCT_FROM_COMPARE_BY_ID(this.product);
        } else {
          this.ADD_PRODUCT_TO_COMPARE(this.product);
        }
      },
      addToCart(){
        if (this.isInCart){
          this.REMOVE_PRODUCT_FROM_CART_BY_ID(this.product);
        } else {
          this.ADD_PRODUCT_TO_CART(this.product);
        }
      }
    }
  }
</script>

<style lang="scss">
  .s-catalog-item {
    padding: 30px 30px;
    border: 1px solid rgba(50,50,50,.15);
    flex-basis: 25%;
    position: relative;
    text-align: center;
    background-color: $colWhite;

    &:hover {
      box-shadow: $boxShadow;
    }

    &__meta {
      width: 100%;
      display: flex;
      padding: 10px 15px 0;
      position: absolute;
      top: 0;
      left: 0;
      justify-content: space-between;
      align-items: flex-start;
    }

    &__meta-text {
      font-size: 12px;
      color: $colBlue;
    }

    &__meta-icon {
      margin-bottom: 12px;
    }

    &__img {
      max-width: 200px;
      margin-bottom: 20px;
    }

    &__headline {
      margin-bottom: 30px;
      color: $colBlue;
      transition: $animLinks;

      &:hover {
        color: $colRed;
      }

    }

    &__par {
      display: flex;
      margin-bottom: 10px;
      justify-content: space-between;
      color: $colBlue;
    }

  }
</style>