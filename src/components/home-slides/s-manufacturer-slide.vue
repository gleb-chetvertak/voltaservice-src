<template lang="pug">
  .s-manufacturer-slide
    b-container(fluid).s-manufacturer-slide__container
      h2.secondary-section-headline.secondary-section-headline--white Почему оборудование Altek?

      b-row(align-h="between").text-block
        b-col(cols="5")
          h3.text-block__headline.text-block__headline--white Проверенный временем производитель
          p.text-block__text.text-block__text--white.
            Сегодня ALTEK – не просто оператор рынка альтернативной энергетики.
            Это крупнейшая компания, которая занимается поставками для отрасли качественного
            оборудования, в том числе, собственной разработки и сборки.

          h3.text-block__headline.text-block__headline--white Инновационные решения
          p.text-block__text.text-block__text--white.
            Оборудование ALTEK адаптировано
            под требования украинского рынка и особенности украинских электросетей. Такой подход
            к организации производства позволяет учитывать обратную связь и рекомендации
            непосредственно от пользователей продукцией ALTEK, оперативно воплощать самые
            инновационные решения и создавать модели, соответствующие требованиям времени.

        b-col(cols="5")
          h3.text-block__headline.text-block__headline--white Популярность
          p.text-block__text.text-block__text--white.
            ALTEK обеспечивает полным комплектом оборудования проекты солнечных электростанций
            и систем нагрева воды для частных домовладений и промышленные станции. Сегодня инверторы
            и фотомодули от ALTEK входят в состав каждой третьей солнечной электростанции, а гелиосистемы
            ALTEK обеспечивают нагрев воды в 70-80% курортных объектов на юге Украины.

          h3.text-block__headline.text-block__headline--white Широкий ассортимент и доступный сервис
          p.text-block__text.text-block__text--white.
            Широкий ассортимент оборудования, доступность сервиса для оборудования ALTEK по сравнению
            с агрегатами других производителей делают ALTEK лучшим партнером в сегменте B2B
            и стандартом качества в сегменте розничных продаж.
      sButton(
        :modifier="'large'",
        :text="'Тепловые насосы Altek'"
        )
            
</template>

<script>

  import sButton from '@/components/common/s-button.vue'

  export default {
    name: 's-manufacturer-slide',
    components: {
      sButton
    }
  }

</script>

<style lang="scss">

  .s-manufacturer-slide {
    height: 100%;
    position: relative;
    text-align: center;
    background-image: url(../../assets/img/png/img2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      left: 0;
      top: 0;
      z-index: 2;
    }

    &__container {
      max-width: $desktop;
      padding-top: 40px;
      padding-bottom: 20px;
      position: relative;
      z-index: 3;
    }

  }

</style>