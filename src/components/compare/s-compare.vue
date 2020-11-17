<template lang="pug">
  .s-compare
    b-container(fluid).s-compare__container
      sBreadcrumbs(:directory="directory")
      template(v-if="COMPARE.length")
        b-row
          b-col(cols="3")
            sCompareSpecs(
              :categoryId="categoryId"
            )
          b-col(cols="9")
            VueSlickCarousel(v-bind="carouselSettings")
              sCompareItem(
                v-for="(p, i) in COMPARE",
                :key="p.id",
                :product="p",
                :index="i",
                :categoryId="categoryId"
                )
              template(#prevArrow="arrowOption")
                .custom-arrow A
              template(#nextArrow="arrowOption")
                .custom-arrow B
      template(v-else)
        p.s-compare__no-items-par
          | Список сравнения пуст - 
          router-link(:to="{path: '/store'}").s-compare__no-items-link перейдите в каталог
          | , чтобы ознакомиться с оборудованием Altek

</template>

<script>

  import sBreadcrumbs from '@/components/common/s-breadcrumbs'
  import sCompareSpecs from '@/components/compare/s-compare-specs.vue'
  import sCompareItem from '@/components/compare/s-compare-item.vue'
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'

  import {mapGetters} from 'vuex'

  export default {
    name: 's-compare',
    components: {
      sBreadcrumbs,
      sCompareSpecs,
      sCompareItem,
      VueSlickCarousel
    },
    data(){
      return{
        carouselSettings: {
          arrows: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
        },
        categoryId: 1
      }
    },
    computed: {
      ...mapGetters([
        'COMPARE'
      ]),
      directory(){
        let tree = [
          {
            name: 'Сравнение товаров',
            link: '/compare'
          },
          {
            name: 'Тепловые насосы',
            link: '/compare'
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

  .s-compare {
    min-height: 650px;
    padding-bottom: 20px;

    &__container {
      max-width: $desktop;
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

  .slick-arrow {
    position: absolute;
    right: -40px;
    background-color: $colRed;
  }

  .slick-prev {
    top: 0;
  }

  .slick-next {
    bottom: 0;
  }
  
</style>