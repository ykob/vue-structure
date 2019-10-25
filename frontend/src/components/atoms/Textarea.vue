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
    padding: calc(.5em - 1px);
    border: 1px solid map-get($colors, 'wb-light-m2');
    border-radius: 4px;
    &:focus {
      outline: 0;
      padding: calc(.5em - 2px);
      border: 2px solid map-get($colors, 'info-medium');
    }
  }
</style>
