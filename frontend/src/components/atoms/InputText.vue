<script>
  export default {
    name: 'InputText',
    components: {},
    props: {
      hasError: {
        type: Boolean,
        value: false
      },
    },
    computed: {
      classnames: function() {
        return {
          'has-error': this.hasError === true,
        }
      },
    },
  };
</script>

<template lang="pug">
  input.c-input-text(
    type = 'text'
    :class = 'classnames'
    )
</template>

<style lang="scss">
  .c-input-text {
    height: calc(1.5em + 1em);
    box-sizing: border-box;
    line-height: 1.5;
    padding: calc(.5em);
    border: 1px solid map-get($colors, 'wb-light-m2');
    border-radius: 4px;
    &:focus {
      outline: 0;
      padding: calc(.5em - 1px);
      border: 2px solid map-get($colors, 'info-medium');
    }
    &:disabled {
      color: map-get($colors, 'wb-medium');
      background-color: map-get($colors, 'wb-light');
    }
    &.has-error {
      padding: calc(.5em - 1px);
      border: 2px solid map-get($colors, 'error-medium');
      background-color: map-get($colors, 'error-light');
    }
  }
</style>
