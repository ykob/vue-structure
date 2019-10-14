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
  textarea.c-textarea
</template>

<style lang="scss">
  .c-textarea {
  }
</style>
