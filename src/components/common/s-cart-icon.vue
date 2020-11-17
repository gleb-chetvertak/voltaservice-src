<template lang="pug">
  div.s-cart-icon
    .s-cart-icon-catalog(v-if="type === 'catalog'")
      CartSVG(
        :class="this.isActive ? 's-cart-icon-catalog--active__svg' : ''"
      ).s-cart-icon-catalog__svg
      PlusCircleSVG(
        v-if="!this.isActive"
      ).s-cart-icon-catalog__sign.s-cart-icon-catalog__sign--plus
      MinusCircleSVG(
        v-if="this.isActive"
      ).s-cart-icon-catalog__sign.s-cart-icon-catalog__sign--minus
    .s-cart-icon-menu(v-else)
      CartSVG(
      ).s-cart-icon-menu__svg
      p(
        v-if="cartedNum > 0"
      ).s-cart-icon-menu__num {{cartedNum}}

</template>

<script>

  import CartSVG from '@/assets/img/svg/shopping-cart.svg?inline'
  import PlusCircleSVG from '@/assets/img/svg/plus-circle.svg?inline'
  import MinusCircleSVG from '@/assets/img/svg/minus-circle.svg?inline'
  import {mapGetters} from 'vuex'

  export default {
    name: 's-cart-icon',
    components: {
      CartSVG,
      PlusCircleSVG,
      MinusCircleSVG
    },
    props: {
      isActive: {
        type: Boolean,
        default(){
          return false;
        }
      },
      type: {
        type: String,
        default(){
          return '';
        }
      }
    },
    data(){
      return {
      }
    },
    computed: {
      ...mapGetters([
        'CART'
      ]),
      cartedNum(){
        let cartedNum = 0;
        this.CART.map(i => {
          cartedNum += Number(i.qty);
        });
        return cartedNum;
      }
    }
  }

</script>

<style lang="scss">

  .s-cart-icon-catalog {
    position: relative;
    cursor:pointer;

    &__svg {
      height: 18px;
      width: 24px;
      fill: $colBlue;
      transition: $animFill;
    }

    &__sign {
      height: 14px;
      width: 14px;
      border-radius: 50%;
      position: absolute;
      right: -2px;
      bottom: -7px;
      background-color: $colWhite;
      transition: $animFill;

      &--plus {
        fill: $colRed;
      }

      &--minus {
        fill: $colBlue;
      }

    }

    &--active {

      &__svg {
        fill: $colRed;
        transition: $animFill;
      }

    }

  }

  .s-cart-icon-menu {
    position: relative;
    cursor: pointer;

    &:hover &__svg {
      fill: $colRed;
    }

    &__svg {
      height: 18px;
      width: 24px;
      fill: $colBlue;
      transition: $animFill;
    }

    &__num {
      position: absolute;
      right: -6px;
      bottom: -12px;
      color: $colRed;
      font-weight: bold;
    }

  }

</style>