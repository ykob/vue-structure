<script>
  import { action } from '@storybook/addon-actions';

  import Button from '@/components/atoms/Button.vue';

  export default {
    components: {
      Button,
    },
    data: function() {
      return {
        checkState: 0,
      }
    },
    computed: {
      showCheckState: function() {
        switch (this.checkState) {
          case 0: return '0: not selected';
          case 1: return '1: selected all';
          case 2: return '2: selected part';
          default: return;
        }
      },
    },
    methods: {
      action: action('clicked'),
    },
  };
</script>

<template lang="pug">
  div
    Button(
      @click = 'action'
      value = 'value'
      )
      |Button
</template>

<style lang="scss" scope>
</style>
