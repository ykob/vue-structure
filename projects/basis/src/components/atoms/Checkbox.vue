<script>
  export default {
    name: 'Checkbox',
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
    }
  };
</script>

<template lang="pug">
  input.c-checkbox(
    type = 'checkbox'
    :id = 'id'
    :value = 'value'
    )
</template>

<style lang="scss">
  .c-checkbox {
  }
</style>
