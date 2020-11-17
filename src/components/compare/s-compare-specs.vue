<template lang="pug">
  .s-compare-specs
    .s-compare-specs__header
      h3.s-compare-specs__headline Характеристики:
    .s-compare-specs__props
      template
        p.s-compare-specs__prop(v-for="s in SPECS(categoryId)") {{s.name}}
</template>

<script>

  import {mapGetters} from 'vuex'

  export default {
    name: 's-compare-specs',
    props: {
      categoryId: {
        type: Number,
        default(){
          return 0;
        }
      }
    },
    components: {
    },
    computed: {
      ...mapGetters([
        'SPECS'
      ]),
    },
    methods: {
    }
  }
</script>

<style lang="scss">

  .s-compare-specs {
    flex-shrink: 0;
    border: 1px solid rgba(50,50,50,.15);
    background-color: $colWhite;

    &__header {
      height: 245px;
      padding: 15px;
      text-align: center;
    }

    &__headline {
      color: $colBlue;
    }

    &__props {
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
    }

    &__prop {
      padding: 5px 10px;
      color: $colBlue;

      &:nth-of-type(odd) {
        background-color: $colGray;
      }

    }

  }

</style>