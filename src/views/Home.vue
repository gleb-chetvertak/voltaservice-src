<template lang="pug">
  .s-home(@wheel.prevent="wheel")
    sHeader
    sMainWrapper(:loc="'home'")
      transition(name="fade" mode="out-in")
        sIntroSlide(v-if="HOME_SLIDE_ID === 1")
        sManufacturerSlide(v-else-if="HOME_SLIDE_ID === 2")
        sPumpVsGasSlide(v-else-if="HOME_SLIDE_ID === 3")
        sInvestSlide(v-else-if="HOME_SLIDE_ID === 4")
        sEhyWeSlide(v-else-if="HOME_SLIDE_ID === 5")
        sWorkflowSlide(v-else-if="HOME_SLIDE_ID === 6")
        sContactSlide(v-else="HOME_SLIDE_ID === 7")

</template>

<script>

  import sHeader from '@/components/common/s-header.vue'
  import sMainWrapper from '@/components/common/s-main-wrapper'
  import sIntroSlide from '@/components/home-slides/s-intro-slide.vue'
  import sManufacturerSlide from '@/components/home-slides/s-manufacturer-slide.vue'
  import sPumpVsGasSlide from '@/components/home-slides/s-pump-vs-gas-slide.vue'
  import sInvestSlide from '@/components/home-slides/s-invest-slide.vue'
  import sEhyWeSlide from '@/components/home-slides/s-why-we-slide.vue'
  import sWorkflowSlide from '@/components/home-slides/s-workflow-slide.vue'
  import sContactSlide from '@/components/home-slides/s-contact-slide.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Home',
    components: {
      sHeader,
      sMainWrapper,
      sIntroSlide,
      sManufacturerSlide,
      sPumpVsGasSlide,
      sInvestSlide,
      sEhyWeSlide,
      sWorkflowSlide,
      sContactSlide
    },
    data(){
      return {
        scrollPosition: 0,
        isScrollActive: true,
      }
    },
    computed: {
      ...mapGetters([
        'HOME_SLIDE_ID'
      ]),
    },
    destroyed () {
    },
    methods: {
      ...mapActions([
        'INCREMENT_HOME_SLIDE_ID',
        'DECREMENT_HOME_SLIDE_ID'
      ]),
      wheel(e){
        if (this.isScrollActive){
          this.isScrollActive = false
          return new Promise(() => {
            if (e.deltaY < 0) {
              this.DECREMENT_HOME_SLIDE_ID();
              } else {
              this.INCREMENT_HOME_SLIDE_ID();
            }
          }).then(
            setTimeout(() => {
              this.isScrollActive = true    
            }, 1500)
          )
        }
      },
    }
  }
</script>

<style lang="scss">
  .s-home {
    background-color: $colGrayDark;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity $animHomeSlides;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>