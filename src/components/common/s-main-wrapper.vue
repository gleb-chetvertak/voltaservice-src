<template lang="pug">
  div(
    :style="wrapperStyles",
    :class="'s-main-wrapper--' + loc"
  ).s-main-wrapper
    slot

</template>

<script>

  import Vue from 'vue'

  export default {
    name: 's-main-wrapper',
    components: {
    },
    props: {
      loc: {
        type: String,
        default(){
          return '';
        }
      },
    },
    data(){
      return {
        wrapperStyles: {
          height: '0',
          'padding-top': '0'
        }
      }
    },
    mounted() {
      this.observeHeight()
    },
    methods: {
      observeHeight() {
        let vm = this;

        const resizeObserver = new ResizeObserver(function() {
          const windowH = window.innerHeight;
          const headerH = document.querySelector('.s-header').offsetHeight;

          Vue.set(vm.wrapperStyles, 'height', windowH + 'px');
          Vue.set(vm.wrapperStyles, 'padding-top', headerH + 'px');
        });

        resizeObserver.observe(document.querySelector('.s-header'));
      }
    }
  }
</script>

<style lang="scss">

</style>