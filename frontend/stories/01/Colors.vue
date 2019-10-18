<script>
  export default {
    components: {
    },
    data: function() {
      return {
        items: [
          {
            'key-light' : 'Key Color Light',
            'key-medium': 'Key Color Medium',
            'key-dark'  : 'Key Color Dark',
          },
          {
            'text': 'Text Color',
            'bg'  : 'Background Color',
          },
          {
            'mono-white'   : 'Monochrome White',
            'mono-light'   : 'Monochrome Light',
            'mono-light-m1': 'Monochrome Medium Light 1',
            'mono-light-m2': 'Monochrome Medium Light 2',
            'mono-medium'  : 'Monochrome Medium',
            'mono-dark'    : 'Monochrome Dark',
          },
          {
            'link-light' : 'Link Color Light',
            'link-medium': 'Link Color Medium',
            'link-dark'  : 'Link Color Dark',
          },
          {
            'success-light' : 'Success Color Light',
            'success-medium': 'Success Color Medium',
            'success-dark'  : 'Success Color Dark',
          },
          {
            'warning-light' : 'Warning Color Light',
            'warning-medium': 'Warning Color Medium',
            'warning-dark'  : 'Warning Color Dark',
          },
          {
            'error-light' : 'Error Color Light',
            'error-medium': 'Error Color Medium',
            'error-dark'  : 'Error Color Dark',
          },
        ]
      }
    },
    computed: {
    },
    methods: {
      classnamesPallet: function(name) {
        return [
          `color-item__pallet--${name}`
        ]
      },
    },
  };
</script>

<template lang="pug">
  div
    h1
      |Colors
    .color-items(
      v-for = 'item, index in items'
      )
      .color-item(
        v-for = 'value, name in item'
        )
        .color-item__pallet(
          :class = 'classnamesPallet(name)'
          )
        .color-item__label
          |{{ value }}
</template>

<style lang="scss" scope>
  .color-items {
    display: flex;
    flex-wrap: wrap;
    align-items: top;
  }
  .color-item {
    width: 180px;
    margin-right: 8px;
    margin-bottom: 16px;
    &__pallet {
      height: 32px;
      margin-bottom: 8px;
      border-radius: 4px;
      @each $key, $color in $colors {
        &--#{$key} {
          background-color: $color;
        }
      }
    }
    &__label {
      text-align: center;
    }
  }
</style>
