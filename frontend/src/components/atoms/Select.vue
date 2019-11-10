<script>
  export default {
    name: 'Select',
    components: {},
    props: {
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
  .c-select
    select(
      :name = 'name'
      @change = 'change'
      )
      option(
        v-for = 'item in items'
        :value = 'item.value'
        )
        |{{ item.label }}
    .c-select__icon
</template>

<style lang="scss">
  .c-select {
    display: inline-block;
    position: relative;
    select {
      height: 32px;
      appearance: none;
      -webkit-appearance: none;
      box-sizing: border-box;
      padding-right: 32px;
      padding-left: 16px;
      border: 1px solid map-get($colors, 'wb-light-m2');
      border-radius: 4px;
      &:focus {
        outline: 0;
        border-color: map-get($colors, 'info-medium');
      }
      &:disabled {
        color: map-get($colors, 'wb-medium');
        background-color: map-get($colors, 'wb-light');
      }
      &.has-error {
        border-color: map-get($colors, 'error-medium');
        background-color: map-get($colors, 'error-light');
      }
    }
    &__icon {
      position: absolute;
      top: 4px;
      right: 8px;
      pointer-events: none;
    }
  }
</style>
