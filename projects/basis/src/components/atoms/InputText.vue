<script>
  export default {
    name: 'InputText',
    components: {},
    props: {
      type: {
        Type: String,
        default: 'text',
      },
    }
  };
</script>

<template lang="pug">
  input.c-input-text(
    :type = 'type'
    )
</template>

<style lang="scss">
  .c-input-text {
  }
</style>
