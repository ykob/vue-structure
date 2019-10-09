import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button from '@/components/atoms/Button.vue';

export default {
  title: 'Button',
};

export const text = () => ({
  components: { Button },
  template: '<Button @click="action" value="value">Button</Button>',
  methods: { action: action('clicked') },
});
