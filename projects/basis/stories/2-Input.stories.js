import Checkbox from '~/02/Checkbox.vue';
import MultipleCheckbox from '~/02/MultipleCheckbox.vue';
import Radio from '~/02/Radio.vue';
import Select from '~/02/Select.vue';

export default {
  title: 'Input',
};

export const checkbox = () => Checkbox;
export const multipleCheckbox = () => MultipleCheckbox;
export const radio = () => Radio;
export const select = () => Select;
