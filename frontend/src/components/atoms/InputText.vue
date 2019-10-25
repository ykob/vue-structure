<script>
  export default {
    name: 'InputText',
    components: {},
    props: {
    }
  };
</script>

<template lang="pug">
  input.c-input-text(
    type = 'text'
    )
</template>

<style lang="scss">
  .c-input-text {
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
