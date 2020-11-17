<template lang="pug">
  .s-single-item-selected
    .s-single-item-selected__meta
      p.s-single-item-selected__meta-text Код товара: {{product.id}}
      .s-single-item-selected__meta-icons
        sScales(
          :type="'catalog'",
          :isActive="isInCompare",
          @click.native="addToCompare",
        ).s-single-item-selected__meta-icon
        sCartIcon(
          :type="'catalog'",
          :isActive="isInCart",
          @click.native="addToCart",
        )
    img(
      :src="product.image",
      alt="Image"
      ).s-single-item-selected__img
    h3.s-single-item-selected__headline {{product.name}}
    .s-single-item-selected__props
      template(v-for="s in product.specs")
        p.s-single-item-selected__prop.s-single-item-selected__prop--name {{SINGLE_SPEC(product["category_id"], s.specs_id).name}}
          span(v-if="SINGLE_SPEC(product['category_id'], s.specs_id).unit") , {{SINGLE_SPEC(product["category_id"], s.specs_id).unit}}
        p.s-single-item-selected__prop {{s.value}}

</template>

<script>

  import sCartIcon from '@/components/common/s-cart-icon.vue'
  import sScales from '@/components/common/s-scales.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 's-single-item-selected',
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
        'COMPARE',
        'SINGLE_SPEC'
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
        'REMOVE_PRODUCT_FROM_COMPARE_BY_ID',
        'REMOVE_PRODUCT_FROM_CART_BY_ID',
        'ADD_PRODUCT_TO_CART',
        'ADD_PRODUCT_TO_COMPARE'
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
  .s-single-item-selected {
    padding: 20px 30px;
    border: 1px solid rgba(50,50,50,.15);
    text-align: center;
    position: relative;
    background-color: $colWhite;

    &__meta {
      width: 100%;
      display: flex;
      padding: 20px 30px 0;
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
      margin-bottom: 15px;
    }

    &__img {
      max-width: 600px;
    }

    &__headline {
      margin-bottom: 30px;
      color: $colBlue;
    }

    &__props {
      display: grid;
      margin-bottom: 30px;
      grid-template-columns: 5fr 3fr;
    }

    &__prop {
      padding: 5px 10px;
      border: 1px solid rgba(50,50,50,.15);
      color: $colBlue;
    
      &--name {
        text-align: left;
      }
      
    }

  }
</style>