<script>
  export default {
    name: 'RadioHasLabel',
    components: {},
    props: {
      id: {
        Type: String,
        default: '',
      },
      value: {
        Type: String,
        default: '',
      },
      label: {
        Type: String,
        default: '',
      },
    }
  };
</script>

<template lang="pug">
  .c-radio-has-label
    input(
      type = 'radio'
      :id = 'id'
      :value = 'value'
      )
    label(
      :for = 'id'
      )
      |{{ label }}
</template>

<style lang="scss">
  .c-radio-has-label {
  }
</style>
