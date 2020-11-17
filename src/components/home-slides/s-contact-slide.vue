<template lang="pug">
  .s-contact-slide
    b-container(fluid).s-contact-slide__container
      b-row(align-h="between").s-contact-slide__row

        b-col(cols="5").s-contact-slide__col
          h3.s-contact-slide__headline.
            Наши квалифицированные специалисты подберут для вас индивидуальное решение
          sButton(
            :modifier="'large'",
            :text="'Подобрать'"
          )

        b-col(cols="5").s-contact-slide__col
          h3.s-contact-slide__headline.
            Оставьте свой номер телефона и наши консультанты свяжутся с вами
          form(action="").s-contact-slide__form.form
            .form__field
              label(for="tel").form__label Телефон
              input(type="tel")
            .form__field
              label(for="region").form__label Область
              select(name="region")
                option(value="default") Введите Вашу область
                option(value="1") Винницкая
                option(value="2") Волынская
                option(value="3") Днепропетровская
                option(value="4")
                option(value="5")
                option(value="6")
                option(value="7")
                option(value="8")
                option(value="9")
                option(value="10")
                option(value="11")
                option(value="12")
                option(value="13")
                option(value="14")
                option(value="15")
                option(value="16")
                option(value="17")
                option(value="18")
                option(value="19")
                option(value="20")
                option(value="21")
                option(value="22")
                option(value="23")
                option(value="24")
            sButton(
              :modifier="'large'",
              :text="'Перезвоните мне'"
            )
      .s-contact-slide__icon-refs
        div
          | Icons made by 
          a(href='https://www.flaticon.com/authors/srip' title='srip') srip
          |  from 
          a(href='https://www.flaticon.com/' title='Flaticon') www.flaticon.com
        div
          | Icons made by 
          a(href='https://www.flaticon.com/authors/wanicon' title='wanicon') wanicon
          |  from 
          a(href='https://www.flaticon.com/' title='Flaticon') www.flaticon.com
        div
          | Icons made by 
          a(href='https://www.flaticon.com/authors/freepik' title='Freepik') Freepik
          |  from 
          a(href='https://www.flaticon.com/' title='Flaticon') www.flaticon.com
        div
          | Icons made by 
          a(href='https://www.flaticon.com/authors/smashicons' title='Smashicons') Smashicons
          |  from 
          a(href='https://www.flaticon.com/' title='Flaticon')  www.flaticon.com

</template>

<script>

  import sButton from '@/components/common/s-button.vue'

  export default {
    name: 's-contact-slide',
    components: {
      sButton
    }
  }

</script>

<style lang="scss">

  .s-contact-slide {
    height: 100%;
    background-image: url(../../assets/img/png/img9.jpg);
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
      height: 100%;
      max-width: $desktop;
      padding-top: 180px;
      padding-bottom: 15px;
      position: relative;
      z-index: 3;
    }

    // &__row {
    //   height: 100%;
    // }

    &__col {
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: left;
    }

    &__headline {
      margin-bottom: 30px;
      color: $colWhite;
    }

    &__icon-refs {
      color: $colWhite;
    }

  }

</style>