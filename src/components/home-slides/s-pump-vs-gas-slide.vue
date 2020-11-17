<template lang="pug">
  .s-pump-vs-gas-slide
    b-container(fluid).s-pump-vs-gas-slide__container
      h2.secondary-section-headline.secondary-section-headline--dark Чем отличается отопление тепловым насосом от газового отопления

      b-row(align-h="between").text-block
        b-col(cols="5")
          p.text-block--list__text.text-block--list__text--dark
            CircleSVG.text-block--list__icon
            |Ключевым отличием тепловых насосов от газового отопления является
            |то, что они работают на тепловой энергии из окружающей среды, а не газе.

          p.text-block--list__text.text-block--list__text--dark
            CircleSVG.text-block--list__icon
            |Для поднятия температуры окружающей среды до нужной температуры для системы
            |отопления, тепловые насосы используют электричество. В результате, 2/3 энергии,
            |которую вы используете для системы отопления и горячего водоснабжения,
            |вы бесплатно берете из окружающей среде и платите всего за 1/3 использованной
            |энергии — за электроэнергию.

          p.text-block--list__text.text-block--list__text--dark
            CircleSVG.text-block--list__icon
            |Летом тепловые насосы могут выполнять функцию кондиционера и охлаждать Ваш дом.

        b-col(cols="5")
          p.text-block--list__text.text-block--list__text--dark
            CircleSVG.text-block--list__icon
            |Кроме того, что тепловой насос использует минимум электроэнергии, домовладелец
            |платит за нее по минимальным ценам. На данный момент на территории Украины
            |действует специальный тариф на электроэнергию для отопления дома тепловым
            |насосом с потреблением до 3000 кВт в месяц.

          p.text-block--list__text.text-block--list__text--dark
            CircleSVG.text-block--list__icon
            |Основной элемент в тепловом насосе — компрессор. Такой, как в вашем холодильнике,
            |но значительно большей мощности. Поэтому он может работать бесперебойно 25 лет и более.
            |Котлы не имеют такого срока службы.

          p.text-block--list__text.text-block--list__text--dark
            CircleSVG.text-block--list__icon
            |Тепловые насосы абсолютно безопасны для жителей дома и для окружающей среды. В работе
            |теплового насоса исключен человеческий или внешний фактор и отсутствуют процессы горения.
            |При работе теплового насоса отсутствуют какие-либо выбросы вредных веществ.

</template>

<script>

  import CircleSVG from '@/assets/img/svg/circle.svg?inline'

  export default {
    name: 's-pump-vs-gas-slide',
    components: {
      CircleSVG
    }
  }

</script>

<style lang="scss">

  .s-pump-vs-gas-slide {
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

    &__container {
      max-width: $desktop;
      padding-top: 50px;
      padding-bottom: 15px;
      position: relative;
      z-index: 3;
    }

  }

</style>