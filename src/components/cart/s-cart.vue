<template lang="pug">
  .s-cart
    b-container(fluid).s-cart__container
      sBreadcrumbs(:directory="directory")
      template(v-if="CART.length")
        .s-cart__content
          .s-cart-item-wrapper
            sCartItem(
              v-for="(p, i) in CART",
              :key="p.id",
              :product="p",
              :index="i"
              )
          .s-cart-total-wrapper
            sCartTotal
      template(v-else)
        p.s-cart__no-items-par
          | Корзина пуста - 
          router-link(:to="{path: '/store'}").s-cart__no-items-link перейдите в каталог
          | , чтобы ознакомиться с оборудованием Altek
</template>

<script>

  import sBreadcrumbs from '@/components/common/s-breadcrumbs'
  import sCartItem from '@/components/cart/s-cart-item.vue'
  import sCartTotal from '@/components/cart/s-cart-total.vue'

  import {mapGetters} from 'vuex'

  export default {
    name: 's-cart',
    components: {
      sBreadcrumbs,
      sCartItem,
      sCartTotal
    },
    data(){
      return{
      }
    },
    computed: {
      ...mapGetters([
        'CART'
      ]),
      directory(){
        let tree = [
          {
            name: 'Корзина',
            link: '/cart'
          }
        ];
        return tree;
      }
    },
    methods: {
    },
    mounted(){
    }
  }
</script>

<style lang="scss">
  .s-cart {
    min-height: 650px;
    padding-bottom: 20px;

    &__container {
      max-width: $desktop;
    }

    &__content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    &__no-items-par {
      margin-top: 40px;
      color: $colBlue;
    }

    &__no-items-link {
      color: $colBlue;
      font-weight: 700;
      transition: $animLinks;

      &:hover {
        color: $colRed;
      }
    }
  }

  .s-cart-item-wrapper {
    display: flex;
    margin-right: 15px;
    flex: 1 auto;
    flex-flow: column;
    justify-content: flex-start;
  }

  .s-cart-total-wrapper {
    flex: 1 auto;
    max-width: 30%;
  }
</style>