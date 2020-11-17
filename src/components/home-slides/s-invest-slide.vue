<template lang="pug">
  .s-invest-slide
    b-container(fluid)
      b-row.s-invest-slide__row
        b-col.s-invest-slide-half-col.s-invest-slide-half-col--bg
          .s-invest-slide-half-col__container
            h2.secondary-section-headline.secondary-section-headline--white.secondary-section-headline--left.s-invest-slide__headline Когда имеет смысл инвестировать в тепловой насос?

        b-col.s-invest-slide-half-col.s-invest-slide-half-col--grad.text-block--list
          .s-invest-slide-half-col__container
            p.text-block--list__text.text-block--list__text--dark
              CircleSVG.text-block--list__icon
              |У вас большие расходы на газ (отопление, горячая вода). 
              |Вы хотели бы уменьшить ваши счета за энергию (особенно зимой, 
              |когда речь идет о тысячах гривен).
            p.text-block--list__text.text-block--list__text--dark
              CircleSVG.text-block--list__icon
              |Вы планируете делать ремонт или строите дом и Вам нужно
              |оборудование для отопления и горячего водоснабжения.
            p.text-block--list__text.text-block--list__text--dark
              CircleSVG.text-block--list__icon
              |К Вашему дому не подведена газовая магистраль.
            p.text-block--list__text.text-block--list__text--dark
              CircleSVG.text-block--list__icon
              |Вы используете или планируете использовать систему "теплый пол"
              |(если не планируете - подумайте об этом).
            p.text-block--list__text.text-block--list__text--dark
              CircleSVG.text-block--list__icon
              |Вы стремитесь быть максимально эффективными и использовать
              |только энергоэффективное оборудование
            p.text-block--list__text.text-block--list__text--dark
              CircleSVG.text-block--list__icon
              |Для Вас важно, чтобы в доме не было взрывоопасных веществ.
            p.text-block--list__text.text-block--list__text--dark
              CircleSVG.text-block--list__icon
              |Вы готовы потратить на отопление от $5000 до $12000

</template>

<script>

  import CircleSVG from '@/assets/img/svg/circle.svg?inline'

  export default {
    name: 's-invest-slide',
    components: {
      CircleSVG
    }
  }

</script>

<style lang="scss">

  .s-invest-slide {
    height: 100%;
    position: relative;
    background-color: $colWhite;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: $headerGradient;
      opacity: 0.1;
      left: 0;
      top: 0;
      z-index: 2;
    }

    &__row {
      height: 100%;
    }

    &__headline {
      text-align: left;
      position: relative;
      z-index: 12;
    }

  }

  .s-invest-slide-half-col {

    &__container {
      padding: 60px;
    }

    &--bg {
      height: 100%;
      position: relative;
      background-image: url(../../assets/img/png/img10.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      z-index: 10;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        left: 0;
        top: 0;
        z-index: 11;
      }

    }

    &--grad {
      height: 100%;
      position: relative;
      z-index: 10;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: $headerGradient;
        opacity: 0.1;
        left: 0;
        top: 0;
        z-index: 11;
      }

    }
  }

</style>