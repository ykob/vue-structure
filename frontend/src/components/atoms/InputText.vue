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
    padding: .5em;
    border: 1px solid map-get($colors, 'wb-light-m2');
    border-radius: 4px;
  }
</style>
