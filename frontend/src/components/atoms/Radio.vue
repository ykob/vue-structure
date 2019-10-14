<script>
  export default {
    name: 'Radio',
    components: {},
    props: {
      tag: {
        Type: String,
        default: 'button',
      },
      isChecked: {
        Type: Boolean,
        default: false,
      },
    },
    computed: {
      classnames: function() {
        return {
          'is-checked': this.isChecked === true,
        }
      },
    },
    methods: {
      click: function(event) {
        this.$emit('click', event);
      }
    },
  };
</script>

<template lang="pug">
  .c-radio(
    :is = 'tag'
    :class = 'classnames'
    @click = 'click'
    )
</template>

<style lang="scss">
  .c-radio {
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    position: relative;
    padding: 0;
    border: 2px solid #444;
    border-radius: 50%;
    background-color: #fff;
    &:before {
      width: 12px;
      height: 12px;
      content: '';
      display: block;
      position: absolute;
      top: calc(50% - 6px);
      left: calc(50% - 6px);
      opacity: 0;
      border-radius: 50%;
      background-color: #444;
    }
    &.is-checked {
      &:before {
        opacity: 1;
      }
    }
  }
</style>
