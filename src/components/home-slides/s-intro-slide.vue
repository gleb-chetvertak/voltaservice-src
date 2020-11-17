<template lang="pug">
  section.section.section--initial.s-intro-slide
    b-container(fluid).s-intro-slide__container
      h1.s-intro-slide__headline Энергоэффективные системы отопления
      h4.s-intro-slide__headline
        | Комплексные решения для систем отопления
        br
        | от ведущего немецкого производителя
      sButton(
        :modifier="'large'",
        :text="'Получить консультацию'"
        )

</template>

<script>

  import sButton from '@/components/common/s-button.vue'

  export default {
    name: 's-intro-slide',
    components: {
      sButton
    }
  }

</script>

<style lang="scss">

  .s-intro-slide {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-image: url(../../assets/img/png/img1.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: $headerGradient;
      transform: matrix(1, 0, 0, -1, 0, 0);
      opacity: 0.8;
      left: 0;
      top: 0;
      z-index: 2;
    }

    &__container {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      z-index: 3;
    }

    &__headline {
      margin-bottom: 55px;
      line-height: 100%;
      color: $colWhite;
    }

    &__subheadline {
      margin-bottom: 50px;
      line-height: 134%;
      color: $colWhite;
    }

  }

</style>