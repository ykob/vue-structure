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
    h1
      |Button Variations
    .buttons
      Button.button(
        @click = 'action'
        value = 'value'
        role = 'submit'
        )
        |Submit
      Button.button(
        @click = 'action'
        value = 'value'
        role = 'cancel'
        )
        |Cancel
      Button.button(
        @click = 'action'
        value = 'value'
        role = 'warning'
        )
        |Warning
      Button.button(
        @click = 'action'
        value = 'value'
        role = 'delete'
        )
        |Delete
      Button.button(
        tag = 'a'
        href = '#'
        target = '_blank'
        @click = 'action'
        value = 'value'
        role = 'link'
        )
        |Link
</template>

<style lang="scss" scope>
  .button {
    margin-right: 8px;
  }
</style>
