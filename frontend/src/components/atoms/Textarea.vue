<script>
  export default {
    name: 'InputText',
    components: {},
    props: {
      propA: {
        Type: String,
        default: '',
      },
    }
  };
</script>

<template lang="pug">
  textarea.c-textarea(
    cols = '40'
    rows = '6'
</template>

<style lang="scss">
  .c-textarea {
  }
</style>
