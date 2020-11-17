<template lang="pug">
  .s-compare-item
    .s-compare-item__header
      .s-compare-item__meta-icons
        sScales(
          :type="'catalog'",
          :isActive="true",
          @click.native="deleteFromCompare(index)",
        ).s-compare-item__meta-icon
        sCartIcon(
          :type="'catalog'",
          :isActive="isInCart",
          @click.native="addToCart",
        )
      img(
        :src="product.image",
        alt="Image"
      ).s-compare-item__img
      router-link(:to="{path: `/single-item/${product.id}`}")
        h3.s-compare-item__headline {{product.name.slice(15)}}
      //- p.s-compare-item__par {{product.price}} USD
    .s-compare-item__props
      p(
        v-for="s in SPECS(categoryId)"
      ).s-compare-item__prop {{singleSpecOfProductValue(s.id)}}

</template>

<script>

  import sCartIcon from '@/components/common/s-cart-icon.vue'
  import sScales from '@/components/common/s-scales.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 's-compare-item',
    props: {
      product: {
        type: Object,
        default(){
          return {};
        }
      },
      index: {
        type: Number,
        default(){
          return 0;
        }
      },
      categoryId: {
        type: Number,
        default(){
          return 0;
        }
      }
    },
    components: {
      sCartIcon,
      sScales
    },
    computed: {
      ...mapGetters([
        'CART',
        'COMPARE',
        'SPECS'
      ]),
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
        'REMOVE_PRODUCT_FROM_COMPARE_BY_INDEX',
        'REMOVE_PRODUCT_FROM_CART_BY_ID',
        'ADD_PRODUCT_TO_CART',
      ]),
      addToCart(){
        if (this.isInCart){
          this.REMOVE_PRODUCT_FROM_CART_BY_ID(this.product);
        } else {
          this.ADD_PRODUCT_TO_CART(this.product);
        }
      },
      deleteFromCompare(i){
        this.REMOVE_PRODUCT_FROM_COMPARE_BY_INDEX(i);
      },
      singleSpecOfProductValue(specId){
        let value;
        this.product.specs.map(s => {
          if (s.specs_id === specId) {
            value = s.value
          }
        })
        return value;
      }
    }
  }
</script>

<style lang="scss">

  .s-compare-item {
      border: 1px solid rgba(50,50,50,.15);
      text-align: center;
      background-color: $colWhite;
      flex-shrink: 0;

    &__header {
      display: flex;
      height: 245px;
      padding: 15px;
      position: relative;
      flex-flow: column;
      justify-content: flex-start;
      align-items: center;
    }

    &__meta-icons {
      text-align: right;
      position: absolute;
      top: 8px;
      right: 12px;
    }

    &__meta-icon {
      margin-bottom: 12px;
    }

    &__img {
      max-width: 100%;
    }

    &__headline {
      color: $colBlue;
      transition: $animLinks;

      &:hover {
        color: $colRed;
      }
    }

    &__props {
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
    }

    &__prop {
      min-height: 34px;
      padding: 5px 10px;
      color: $colBlue;

      &:nth-of-type(odd) {
        background-color: $colGray;
      }

    }
  }

</style>