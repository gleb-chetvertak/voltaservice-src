<template lang="pug">
  .s-breadcrumbs
    template(
      v-for="d in dirTree"
    )
      router-link(
        :to="{path: `${d.link}`}"
      ).s-breadcrumbs__link {{d.name}}
      ChevronRightSVG.s-breadcrumbs__icon

</template>

<script>

  import CircleSVG from '@/assets/img/svg/circle.svg?inline'
  import ChevronRightSVG from '@/assets/img/svg/chevron-right.svg?inline'

  export default {
    name: 's-breadcrumbs',
    components: {
      CircleSVG,
      ChevronRightSVG
    },
    props: {
      directory: {
        type: Array,
        default(){
          return [];
        }
      }
    },
    data(){
      return {
      }
    },
    computed: {
      dirTree(){
        let tree = [
          {
            name: 'Оборудование Altek',
            link: '/store'
          },
          ...this.directory];
        return tree;
      }
    },
    methods: {

    }

  }
</script>

<style lang="scss">

  .s-breadcrumbs {
    display: flex;
    margin: 15px 0 15px;
    justify-content: flex-start;
    align-items: center;

    &__link {
      margin-right: 8px;
      position: relative;
      font-size: 16px;
      font-weight: 500;
      color: $colBlue;
      cursor: pointer;

      &:hover {
        color: $colRed;
      }
    }

    &__icon {
      width: 7px;
      margin-right: 8px;
      fill: $colRed;

      &:last-of-type {
        display: none;
      }
    }
  }

</style>