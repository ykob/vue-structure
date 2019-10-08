<script>
  export default {
    name: 'CheckboxHasLabel',
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
  .c-checkbox-has-label
    input(
      type = 'checkbox'
      :id = 'id'
      :value = 'value'
      )
    label(
      :for = 'id'
      )
      |{{ label }}
</template>

<style lang="scss">
  .c-checkbox-has-label {
  }
</style>
