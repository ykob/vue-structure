<script>
  export default {
    name: 'Select',
    components: {},
    props: {
      name: {
        type: String,
        default: ''
      },
      items: {
        Type: Array,
        default: [],
      },
    },
    methods: {
      change: function(event) {
        this.$emit('change', event);
      }
    },
  };
</script>

<template lang="pug">
  select.c-select(
    :name = 'name'
    @change = 'change'
    )
    option(
      v-for = 'item in items'
      :value = 'item.value'
      )
      |{{ item.label }}
</template>

<style lang="scss">
  .c-select {
  }
</style>
