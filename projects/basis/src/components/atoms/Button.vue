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
            'c-button': true,
            'c-button--submit': this.role === 'submit',
            'c-button--cancel': this.role === 'cancel',
            'c-button--delete': this.role === 'delete',
            'c-button--link': this.role === 'link',
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
    &--submit {}
    &--cancel {}
    &--delete {}
    &--link {}
  }
</style>
