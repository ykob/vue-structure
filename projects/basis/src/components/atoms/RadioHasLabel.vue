<script>
  import Radio from '@/components/atoms/Radio.vue'

  export default {
    name: 'RadioHasLabel',
    components: {
      Radio,
    },
    props: {
      isChecked: {
        Type: Boolean,
        default: false,
      },
    },
    methods: {
      click: function(event) {
        this.$emit('click', event);
      },
    },
  };
</script>

<template lang="pug">
  .c-radio-has-label(
    @click = 'click'
    )
    Radio.c-radio-has-label__icon(
      tag = 'div'
      :state = 'state'
      )
    slot
</template>

<style lang="scss">
  .c-radio-has-label {
    cursor: pointer;
    display: flex;
    align-items: center;
    &__icon {
      margin-right: 8px;
    }
  }
</style>
