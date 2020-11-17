<template lang="pug">
  div.s-scales
    .s-scales-catalog(v-if="type === 'catalog'")
      CompareSVG(
        :class="this.isActive ? 's-scales-catalog--active__svg' : ''"
      ).s-scales-catalog__svg
      PlusCircleSVG(
        v-if="!this.isActive"
      ).s-scales-catalog__sign.s-scales-catalog__sign--plus
      MinusCircleSVG(
        v-if="this.isActive"
      ).s-scales-catalog__sign.s-scales-catalog__sign--minus
    .s-scales-menu(v-else)
      CompareSVG(
      ).s-scales-menu__svg
      p(
        v-if="comparedNum > 0"
      ).s-scales-menu__num {{comparedNum}}

</template>

<script>

  import CompareSVG from '@/assets/img/svg/balance-scale-left.svg?inline'
  import PlusCircleSVG from '@/assets/img/svg/plus-circle.svg?inline'
  import MinusCircleSVG from '@/assets/img/svg/minus-circle.svg?inline'
  import {mapGetters} from 'vuex'

  export default {
    name: 's-scales',
    components: {
      CompareSVG,
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
        'COMPARE'
      ]),
      comparedNum(){
        return this.COMPARE.length;
      }
    }
  }

</script>

<style lang="scss">

  .s-scales-catalog {
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

  .s-scales-menu {
    position: relative;

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