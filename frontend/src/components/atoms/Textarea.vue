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
    )
</template>

<style lang="scss">
  .c-textarea {
    box-sizing: border-box;
    padding: .5em;
    border: 1px solid map-get($colors, 'wb-light-m2');
    border-radius: 4px;
  }
</style>
