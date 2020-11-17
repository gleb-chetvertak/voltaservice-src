<template lang="pug">
  button(
    :class="'s-button--' + modifier"
  ).s-button {{text}}

</template>

<script>

  export default {
    name: 's-button',
    components: {
    },
    props: {
      text: {
        type: String,
        default(){
          return '';
        }
      },
      modifier: {
        type: String,
        default(){
          return '';
        }
      }
    }
  }

</script>

<style lang="scss">
  .s-button {
    border: 1px solid $colRed;
    border-radius: 4px;
    font-family: Roboto, Arial, serif;
    font-size: 14px;
    font-weight: 400;
    color: $colWhite;
    text-decoration: none;
    background-color: $colRed;
    text-decoration: none;
    transition: $animButtons;
    cursor: pointer;

    &:hover {
      border: 1px solid $colGray;
      color: $colRed;
      background-color: $colWhite;
    }

    &--large {
      padding: 20px 50px;
      text-transform: uppercase;
    }

    &--mini {
      padding: 10px 25px;
    }

  }
</style>