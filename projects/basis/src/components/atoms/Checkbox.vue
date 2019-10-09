<script>
  export default {
    name: 'Checkbox',
    components: {},
    props: {
      tag: {
        Type: String,
        default: 'button',
      },
      state: {
        Type: Number,
        default: 0,
      },
    },
    computed: {
      classnames: function() {
        return {
          'is-checked': this.state === 1,
          'is-checked-part': this.state === 2,
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
  .c-checkbox(
    :is = 'tag'
    :class = 'classnames'
    @click = 'click'
    )
</template>

<style lang="scss">
  .c-checkbox {
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    position: relative;
    padding: 0;
    border: 2px solid #444;
    border-radius: 4px;
    background-color: #fff;
    &:before, &:after {
      width: 12px;
      height: 2px;
      content: '';
      display: block;
      position: absolute;
      top: calc(50% - 1px);
      left: calc(50% - 6px);
      opacity: 0;
      background-color: #fff;
    }
    &:after {
      transform: rotate(-45deg);
    }
    &.is-checked {
      background-color: #444;
      &:after {
        opacity: 1;
      }
    }
    &.is-checked-part {
      background-color: #444;
      &:before {
        opacity: 1;
      }
    }
  }
</style>
