<template lang="pug">
  .s-single-item-config
    h5.s-single-item-config__headline Данные для проектирования:
    ul.s-single-item-config__list
      li.s-single-item-config__list-item
        .s-single-item-config__list-item-selector
        p Наши специалисты бесплатно подберут наиболее подходящие модели для Вашего помещения.
      li.s-single-item-config__list-item
        .s-single-item-config__list-item-selector
        p
          span.s-single-item-config__required-field * 
          |Данные, которые можно предоставить позже, обязательны для окончательного выбора.
      li.s-single-item-config__list-item
        .s-single-item-config__list-item-selector
        p
          span.s-single-item-config__required-field ** 
          |Поля, обязательные для заполнения.
    div(
      v-for="fa in FORM"
    )
      h6.s-single-item-config__fieldset-headline {{fa.name}}
        span(v-if="fa.isNeeded").s-single-item-config__required-field  *
        span(v-else-if="fa.isRequiered").s-single-item-config__required-field  **
      fieldset(
        v-if="fa.dataType === 'checkboxes'",
      ).s-single-item-config__fieldset
        div(
          v-for="f in fa.fields"
        ).s-single-item-config__field.s-single-item-config__field--checkbox
          input.s-single-item-config__checkbox(
            type="checkbox"
          )
          label {{f}}
      fieldset(
        v-else-if="fa.dataType === 'inputNumber'",
      ).s-single-item-config__fieldset
        input(
          type="number"
        )
      fieldset(
        v-else-if="fa.dataType === 'inputText'",
      ).s-single-item-config__fieldset
        input(
          type="text"
        )
      fieldset(
        v-else-if="fa.dataType === 'inputArea'",
      ).s-single-item-config__fieldset
        textarea
      div(
        v-else-if="fa.dataType === 'fieldset'",
      ).s-single-item-config__contact-fields
        fieldset(
          v-for="cf in fa.fields"
        ).s-single-item-config__contact-fieldset
          label.s-single-item-config__contact-label {{cf.name}}
            span(v-if="cf.isNeeded").s-single-item-config__required-field  *
            span(v-else-if="cf.isRequiered").s-single-item-config__required-field  **
          input(
            v-if="cf.dataType === 'inputText'",
            type="text"
          )
          input(
            v-else-if="cf.dataType === 'inputTel'",
            type="tel"
          )
          input(
            v-else-if="cf.dataType === 'inputEmail'",
            type="email"
          )
    .s-single-item-config__submit
      sButton(
        :modifier="'large'",
        :text="'Отправить'"
      )
        

</template>

<script>

  import sButton from '@/components/common/s-button.vue'
  import {mapGetters} from 'vuex'

  export default {
    name: 's-single-item-config',
    props: {
    },
    components: {
      sButton
    },
    data(){
      return {
      }
    },
    mounted(){
    },
    computed: {
      ...mapGetters([
        'FORM'
      ])
    },
    methods: {
    }
  }
</script>

<style lang="scss">
  .s-single-item-config {
    padding: 20px 30px;
    border: 1px solid rgba(50,50,50,.15);
    border-top: 0;
    background-color: $colWhite;

    &__headline {
      margin-bottom: 15px;
      color: $colBlue;
    }

    &__list {
      margin-bottom: 20px;
    }

    &__list-item {
      display: flex;
      margin-bottom: 5px;
      margin-left: 10px;
      justify-content: flex-start;
      align-items: flex-start;
      color: $colBlue;
    }

    &__list-item-selector {
      height: 8px;
      width: 8px;
      margin-top: 7px;
      margin-right: 10px;
      flex-shrink: 0;
      border-radius: 50%;
      background-color: $colRed;
    }

    &__required-field {
      color: $colRed;
    }

    &__fieldset-headline {
      margin-bottom: 10px;
      color: $colBlue;
    }

    &__fieldset {
      margin-bottom: 20px;
      margin-left: 10px;
    }

    &__field {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      color: $colBlue;
    }

    &__checkbox {
      margin-top: 7px;
      margin-right: 10px;
    }

    &__contact-label {
      display: block;
      margin-bottom: 5px;
      color: $colBlue;
    }

    &__contact-fields {
      display: grid;
      margin-left: 10px;
      grid-template-columns: repeat(2, 1fr);
    }

    &__contact-fieldset {
      margin-bottom: 10px;
    }
    &__submit {
      margin-top: 20px;
      text-align: center;
    }
  }
</style>