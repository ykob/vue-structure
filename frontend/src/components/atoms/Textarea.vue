<script>
  export default {
    name: 'Textarea',
    components: {},
    props: {
      value: {
        type: String,
        value: ''
      },
      hasError: {
        type: Boolean,
        value: false
      }
    },
    computed: {
      classnames: function() {
        return {
          'has-error': this.hasError === true
        }
      }
    },
    methods: {
      onChange(e) {
        this.$emit('change', e)
      }
    }
  };
</script>

<template lang="pug">
  textarea.textarea(
    name = ''
    cols = '40'
    rows = '6'
    :class = 'classnames'
    @change = 'onChange'
    )
    |{{ value }}
</template>

<style lang="scss">
  .textarea {
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
