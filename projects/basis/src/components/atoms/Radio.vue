<script>
  export default {
    name: 'Radio',
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
  input.c-radio(
    type = 'radio'
    :id = 'id'
    :value = 'value'
    )
</template>

<style lang="scss">
  .c-radio {
  }
</style>
