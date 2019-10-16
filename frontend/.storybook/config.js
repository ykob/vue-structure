import { configure, addDecorator } from "@storybook/vue";

import Page from '~/util/Page.vue';

addDecorator(() => ({
  components: { Page },
  template: '<page><story/></page>',
}));
configure(require.context('../stories', true, /\.stories\.js$/), module);
