<template lang="pug">
  .s-workflow-slide
    b-container(fluid).s-workflow-slide__container
      h2.secondary-section-headline.secondary-section-headline--white Как мы работаем?

      b-row.s-workflow-slide__row
        b-col.s-workflow-slide__col
          FormSVG.s-workflow-slide__icon
          p.s-workflow-slide__text Вы оставляете заявку
        b-col.s-workflow-slide__col
          img(src="@/assets/img/png/faq.png", alt="Контакт").s-workflow-slide__icon
          p.s-workflow-slide__text Специалист связывается с Вами
        b-col.s-workflow-slide__col
          img(src="@/assets/img/png/measure.png", alt="Замеры").s-workflow-slide__icon
          p.s-workflow-slide__text Выезд на объект
        b-col.s-workflow-slide__col
          AccountingSVG.s-workflow-slide__icon
          p.s-workflow-slide__text Выбор оборудования
        b-col.s-workflow-slide__col
          RepairingSVG.s-workflow-slide__icon
          p.s-workflow-slide__text Монтаж оборудования
</template>

<script>

  import FormSVG from '@/assets/img/svg/form.svg?inline'
  import AccountingSVG from '@/assets/img/svg/accounting.svg?inline'
  import RepairingSVG from '@/assets/img/svg/repairing.svg?inline'

  export default {
    name: 's-workflow-slide',
    components: {
      FormSVG, 
      AccountingSVG,
      RepairingSVG
    }
  }

</script>

<style lang="scss">

  .s-workflow-slide {
    height: 100%;
    position: relative;
    background-image: url(../../assets/img/png/img7.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      left: 0;
      top: 0;
      z-index: 2;
    }

    &__container {
      max-width: $desktop;
      padding-top: 100px;
      padding-bottom: 15px;
      position: relative;
      z-index: 3;
    }

    &__row {
      @include make-row();
      margin-top: 120px;
    }

    &__col {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    &__icon {
      width: 100px;
      height: 100px;
      fill: $colWhite;
    }

    &__text {
      margin-top: 40px;
      color: $colWhite;
      font-weight: 400;
    }

  }

</style>