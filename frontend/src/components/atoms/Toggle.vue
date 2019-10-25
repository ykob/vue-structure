<script>
  export default {
    name: 'Toggle',
    components: {},
    props: {
      isTurnedOn: {
        Type: Boolean,
        default: false,
      },
    },
    computed: {
      classnames: function() {
        return {
          'is-turned-on': this.isTurnedOn === true,
        }
      },
    },
    methods: {
      click: function(event) {
        this.$emit('click', event);
      }
    }
  };
</script>

<template lang="pug">
  button.c-toggle(
    :class = 'classnames'
    @click = 'click'
    )
</template>

<style lang="scss">
  .c-toggle {
    width: 48px;
    height: 24px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    border: 2px solid map-get($colors, 'wb-medium');
    border-radius: 12px;
    background-color: map-get($colors, 'wb-white');
    transition-duration: .2s;
    transition-property: background-color;
    &:before {
      width: 16px;
      height: 16px;
      content: '';
      display: block;
      position: absolute;
      top: calc(50% - 8px);
      left: calc(50% - 8px);
      border-radius: 8px;
      background-color: map-get($colors, 'wb-medium');
      transform: translate3d(-12px, 0, 0);
      transition-duration: .2s;
      transition-property: transform, background-color;
    }
    &.is-turned-on {
      background-color: map-get($colors, 'wb-medium');
      &:before {
        background-color: map-get($colors, 'wb-white');
        transform: translate3d(12px, 0, 0);
      }
    }
  }
</style>
