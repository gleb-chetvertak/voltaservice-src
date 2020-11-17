<template lang="pug">
  .s-cart-total
    h2.s-cart-total__headline Итого:
    .s-cart-total__par-wrapper
      p {{cartedNum}} продуктов на сумму:
      p ${{cartedSum}}
    .s-cart-total__par-wrapper
      p Стоимость доставки:
      p Бесплатно
    .s-cart-total__par-wrapper
      p К оплате:
      p ${{cartedSum}}
    sButton(
      :modifier="'large'"
      :text="'Заказ подтверждаю'"
    ).s-cart-total__btn

</template>

<script>

  import sButton from '@/components/common/s-button.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 's-cart-total',
    props: {
    },
    components: {
      sButton
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
      },
      cartedSum(){
        let cartedSum = 0;
        this.CART.map(i => {
          cartedSum += Number(i.price) * i.qty;
        });
        return cartedSum;
      }
    },
    mounted(){
    },
    methods: {
      ...mapActions([
      ])
    }
  }
</script>

<style lang="scss">
  .s-cart-total {
    display: flex;
    min-width: 300px;
    flex-flow: column;
    justify-content: flex-start;
    padding: 15px;
    border: 1px solid rgba(50,50,50,.15);
    background-color: $colWhite;

    &__headline {
      margin-bottom: 15px;
      text-align: left;
      color: $colBlue;
    }

    &__par-wrapper {
      display: flex;
      margin: 10px 0;
      justify-content: space-between;
      color: $colBlue;
    }

    &__btn {
      margin-top: 20px;
    }

  }
</style>