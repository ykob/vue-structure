<script>
  export default {
    name: 'Page',
  };
</script>

<template lang="pug">
  .page
    slot
</template>

<style lang="scss" scope>
  .page {
    margin: 20px;
  }
</style>
