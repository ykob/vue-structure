<script>
  export default {
    name: 'Button',
    components: {
    },
    props: {
      tag: {
        type: String,
        default: 'button',
      },
      role: {
        type: String,
        default: 'submit',
      },
      width: {
        type: String,
        default: '120px',
      },
    },
    render: function (createElement) {
      const self = this;
      const vnode = createElement(
        this.tag,
        {
          class: [
            'c-button',
            `c-button--${this.role}`
          ],
          style: {
            width: this.width,
          },
          on: {
            click: function (event) {
              self.$emit('click', event)
            },
            submit: function (event) {
              self.$emit('submit', event)
            },
          },
        },
        [
          this.$slots.default,
        ]
      );
      return vnode;
    },
  };
</script>

<style lang="scss">
  .c-button {
    height: 40px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border-top: 0;
    border-bottom: 2px solid;
    border-right: 0;
    border-left: 0;
    border-radius: 4px;
    text-decoration: none;
    letter-spacing: 0.1em;
    transition-duration: .2s;
    transition-property: background-color;
    &--submit {
      color: map-get($colors, 'wb-white');
      border-bottom-color: darken(map-get($colors, 'success-medium'), 15%);
      background-color: map-get($colors, 'success-medium');
      &:hover {
        background-color: lighten(map-get($colors, 'success-medium'), 10%);
      }
      &:active {
        background-color: darken(map-get($colors, 'success-medium'), 10%);
      }
    }
    &--cancel {
      color: map-get($colors, 'wb-medium');
      border-bottom-color: darken(map-get($colors, 'wb-light-m1'), 15%);
      background-color: map-get($colors, 'wb-light-m1');
      &:hover {
        background-color: lighten(map-get($colors, 'wb-light-m1'), 5%);
      }
      &:active {
        background-color: darken(map-get($colors, 'wb-light-m1'), 10%);
      }
    }
    &--warning {
      color: map-get($colors, 'wb-dark');
      border-bottom-color: darken(map-get($colors, 'warning-medium'), 15%);
      background-color: map-get($colors, 'warning-medium');
      &:hover {
        background-color: lighten(map-get($colors, 'warning-medium'), 10%);
      }
      &:active {
        background-color: darken(map-get($colors, 'warning-medium'), 10%);
      }
    }
    &--delete {
      color: map-get($colors, 'wb-white');
      border-bottom-color: darken(map-get($colors, 'error-medium'), 15%);
      background-color: map-get($colors, 'error-medium');
      &:hover {
        background-color: lighten(map-get($colors, 'error-medium'), 10%);
      }
      &:active {
        background-color: darken(map-get($colors, 'error-medium'), 10%);
      }
    }
    &--link {
      color: map-get($colors, 'wb-white');
      border-bottom-color: darken(map-get($colors, 'link-medium'), 15%);
      background-color: map-get($colors, 'link-medium');
      &:hover {
        background-color: lighten(map-get($colors, 'link-medium'), 10%);
      }
      &:active {
        background-color: darken(map-get($colors, 'link-medium'), 10%);
      }
    }
    &:disabled {
      cursor: auto;
      color: map-get($colors, 'wb-light-m1');
      border-bottom-color: darken(map-get($colors, 'wb-light'), 5%);
      background-color: map-get($colors, 'wb-light');
    }
  }
</style>
