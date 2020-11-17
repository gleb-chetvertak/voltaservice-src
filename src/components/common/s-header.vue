<template lang="pug">
  .s-header
    b-container(fluid).s-header__container
      .header-logo
        img(src="@/assets/img/png/logo.png", alt="logo").header-logo__img
        router-link(to="/").header-logo__link Главная

      .menu
        router-link(to="/store").menu__link Оборудование
        router-link(to="/compare").menu__icon-wrapper
          sScales(
            :type="'menu'"
          )
        router-link(to="/cart").menu__icon-wrapper
          sCartIcon
        SearchSVG.menu__icon
        BarsSVG.menu__icon

</template>

<script>

  import sScales from '@/components/common/s-scales.vue'
  import sCartIcon from '@/components/common/s-cart-icon.vue'
  import BarsSVG from '@/assets/img/svg/bars.svg?inline'
  import CompareSVG from '@/assets/img/svg/balance-scale-left.svg?inline'
  import SearchSVG from '@/assets/img/svg/search.svg?inline'
  import CartSVG from '@/assets/img/svg/shopping-cart.svg?inline'

  export default {
    name: 's-header',
    components: {
      sScales,
      sCartIcon,
      CompareSVG,
      CartSVG,
      SearchSVG,
      BarsSVG
    }
  }
</script>

<style lang="scss">

  .s-header {
    width: 100%;
    padding: 10px 0;
    border-bottom: 2px solid $colGray;
    flex: 0 0 auto;
    background-color: $colWhite;
    position: fixed;
    z-index: 20;

    &__container {
      display: flex;
      max-width: $desktop;
      position: relative;
      justify-content: space-between;
      align-items: center;
      z-index: 22;
    }

  }

  .header-logo {

    &__img {
      max-width: 145px;
      padding-bottom: 10px;
    }

    &__link {
      padding-left: 40px;
      position: relative;
      color: $colBlue;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 100%;
      transition: $animLinks;

      &:hover {
        color: $colRed;
      }

      &::before {
        content: '';
        display: inline-block;
        height: 100%;
        width: 2px;
        position: absolute;
        left: 25px;
        top: 0;
        background-color: $colGrayDark;
      }

    }

  }

  .menu {

    &__link {
      color: $colBlue;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 100%;
      transition: $animLinks;

      &:hover {
        color: $colRed;
      }
    }

    &__icon {
      display: inline-block;
      height: 18px;
      width: 24px;
      margin-left: 30px;
      fill: $colBlue;
      cursor:pointer;
      transition: $animFill;

      &:hover {
        fill: $colRed;
      }
    }

    &__icon-wrapper {
      display: inline-block;
      margin-left: 30px;
    }

  }

</style>