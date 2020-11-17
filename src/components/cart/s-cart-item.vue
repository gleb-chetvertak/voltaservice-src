<template lang="pug">
  .s-cart-item
    img(
      :src="product.image",
      alt="Image"
      ).s-cart-item__img
    router-link(:to="{path: `/single-item/${product.id}`}")
      h3.s-cart-item__headline {{product.name}}
    p.s-cart-item__par {{product.price}} USD
    .s-cart-item__qty.qty
      Minus(
        @click="qtyDecrease(index)"
      ).qty__svg
      span.qty__num {{product.qty}}
      Plus(
        @click="qtyIncrease(index)"
      ).qty__svg
    .s-cart-item__btns
    .s-cart-item__meta-icons
      sScales(
        :type="'catalog'",
        :isActive="isInCompare",
        @click.native="addToCompare",
      ).s-cart-item__meta-icon
      sCartIcon(
        :type="'catalog'",
        :isActive="true",
        @click.native="deleteFromCart(index)",
      )
</template>

<script>

  import sCartIcon from '@/components/common/s-cart-icon.vue'
  import sScales from '@/components/common/s-scales.vue'
  import Plus from '@/assets/img/svg/plus.svg?inline'
  import Minus from '@/assets/img/svg/minus.svg?inline'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 's-cart-item',
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
      }
    },
    components: {
        sCartIcon,
        sScales,
        Plus,
        Minus
    },
    computed: {
      ...mapGetters([
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
    },
    methods: {
      ...mapActions([
        'REMOVE_PRODUCT_FROM_CART',
        'INCREMENT_CARTED_PRODUCT',
        'DECREMENT_CARTED_PRODUCT',
        'ADD_PRODUCT_TO_COMPARE',
        'REMOVE_PRODUCT_FROM_COMPARE_BY_ID',
      ]),
      deleteFromCart(i){
        this.REMOVE_PRODUCT_FROM_CART(i);
      },
      qtyIncrease(i){
        this.INCREMENT_CARTED_PRODUCT(i);
      },
      qtyDecrease(i){
        this.DECREMENT_CARTED_PRODUCT(i);
      },
      addToCompare(){
        if (this.isInCompare){
          this.REMOVE_PRODUCT_FROM_COMPARE_BY_ID(this.product);
        } else {
          this.ADD_PRODUCT_TO_COMPARE(this.product);
        }
      },
    }
  }
</script>

<style lang="scss">
  .s-cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    padding-right: 30px;
    border: 1px solid rgba(50,50,50,.15);
    position: relative;
    background-color: $colWhite;

    &__btns {
      text-align: right;
    }

    &__btn{
      padding: 5px 10px;
      border: 1px solid $colGray;
      border-radius: $borRad;
      background-color: $colWhite;
      cursor: pointer;

      &:hover {
        color: $colWhite;
        background-color: $colRed;
      }
    }

    &__img {
      max-width: 200px;
    }

    &__headline {
      color: $colBlue;
      transition: $animLinks;

      &:hover {
        color: $colRed;
      }
    }

    &__par {
      color: $colBlue;
    }

    &__meta-icons {
      text-align: right;
      position: absolute;
      top: 10px;
      right: 15px;
    }

    &__meta-icon {
      margin-bottom: 12px;
    }
  }
  .qty {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__svg {
      height: 12px;
      width: 12px;
      cursor: pointer;
      fill: $colBlue;
    }

    &__num {
      margin: 0 10px;
      color: $colBlue;
    }
  }
</style>