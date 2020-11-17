<template lang="pug">
  .s-single-item-modify
    h5.s-single-item-modify__headline Модели:
    ul.s-single-item-modify__models
      li(
        v-for="p in PRODUCTS_BY_GROUP(this.productGroup.id)",
        @click="updateSelectedProduct(p)"
      ).s-single-item-modify__model
        .s-single-item-modify__model-selector(
          :class="product.id === p.id ? 's-single-item-modify__model-selector--selected' : ''"
        )
        p {{p.name.slice(15 )}}
    h5.s-single-item-modify__headline Преимущества:
    ul.s-single-item-modify__descriptions
      li(
        v-for="d in productGroup.description"
      ).s-single-item-modify__description
        .s-single-item-modify__description-selector
        p {{d}}
    h5.s-single-item-modify__headline Файлы:
    ul.s-single-item-modify__files
      li(
        v-for="f in FILE_TYPES"
      ).s-single-item-modify__file
        a(
          :download="f.name + ' ' + productGroup.name",
          :href="'../../../files/' + f.prefics + productGroup.fileSuffics + '.pdf'")
          FileDownloadSVG.s-single-item-modify__icon
        a(
          :href="'../../../files/' + f.prefics + productGroup.fileSuffics + '.pdf'",
          target="_blank")
          EyeSVG.s-single-item-modify__icon
        p.s-single-item-modify__text {{f.name}} ({{productGroup.name}})



</template>

<script>

  import FileDownloadSVG from '@/assets/img/svg/file-download.svg?inline'
  import EyeSVG from '@/assets/img/svg/eye.svg?inline'
  import {mapGetters} from 'vuex'

  export default {
    name: 's-single-item-modify',
    props: {
      product: {
        type: Object,
        default(){
          return {}
        }
      },
      productGroup: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    components: {
      FileDownloadSVG,
      EyeSVG
    },
    data(){
      return {
      }
    },
    mounted(){
    },
    computed: {
      ...mapGetters([
        'PRODUCTS_BY_GROUP',
        'FILE_TYPES'
      ])
    },
    methods: {
      updateSelectedProduct(p){
        this.$emit('updateSelectedProduct', p);
      }
    }
  }
</script>

<style lang="scss">
  .s-single-item-modify {
    padding: 20px 30px;
    border: 1px solid rgba(50,50,50,.15);
    border-top: 0;
    background-color: $colWhite;

    &__headline {
      margin-bottom: 15px;
      color: $colBlue;
    }

    &__model {
      display: flex;
      width: fit-content;
      margin-bottom: 5px;
      margin-left: 10px;
      justify-content: flex-start;
      align-items: center;
      color: $colBlue;
      cursor: pointer;

      &:hover .s-single-item-modify__model-selector {
        background-color: $colRed;
      }
    }

    &__model-selector {
      height: 12px;
      width: 12px;
      border: 1px solid $colRed;
      margin-right: 10px;
      flex-shrink: 0;
      border-radius: 50%;

      &--selected {
        background-color: $colRed;
      }

    }

    &__description {
      display: flex;
      margin-bottom: 5px;
      margin-left: 10px;
      justify-content: flex-start;
      align-items: flex-start;
      color: $colBlue;
    }

    &__description-selector {
      height: 8px;
      width: 8px;
      margin-top: 7px;
      margin-right: 10px;
      flex-shrink: 0;
      border-radius: 50%;
      background-color: $colRed;
    }

    &__file {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      margin-left: 10px;
    }

    &__text {
      color: $colBlue;
    }

    &__icon {
      width: 20px;
      margin-right: 10px;
      fill: $colGrayDark;

      &:hover {
        fill: $colRed;
      }

    }

  }
</style>