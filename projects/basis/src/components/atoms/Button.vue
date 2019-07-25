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
    },
    render: function (createElement) {
      const self = this;
      const vnode = createElement(
        this.tag,
        {
          class: {
            'p-button': true,
            'p-button--submit': this.role === 'submit',
            'p-button--cancel': this.role === 'cancel',
            'p-button--delete': this.role === 'delete',
            'p-button--link': this.role === 'link',
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
  .p-button {
    &--submit {}
    &--cancel {}
    &--delete {}
    &--link {}
  }
</style>
