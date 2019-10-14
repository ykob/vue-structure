<script>
  import Checkbox from '@/components/atoms/Checkbox.vue'

  export default {
    name: 'CheckboxHasLabel',
    components: {
      Checkbox,
    },
    props: {
      state: {
        Type: Number,
        default: 0,
      },
    },
    methods: {
      click: function() {
        this.$emit('click');
      },
    },
  };
</script>

<template lang="pug">
  .c-checkbox-has-label(
    @click = 'click'
    )
    Checkbox.c-checkbox-has-label__icon(
      tag = 'div'
      :state = 'state'
      )
    slot
</template>

<style lang="scss">
  .c-checkbox-has-label {
    cursor: pointer;
    display: flex;
    align-items: center;
    &__icon {
      margin-right: 8px;
    }
  }
</style>
