import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Checkbox from '~/02/Checkbox.vue';
import MultipleCheckbox from '~/02/MultipleCheckbox.vue';

export default {
  title: 'Input',
};

export const checkbox = () => Checkbox;
export const multipleCheckbox = () => MultipleCheckbox;
