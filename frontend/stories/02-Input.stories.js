import Checkbox from '~/02/Checkbox.vue';
import MultipleCheckboxes from '~/02/MultipleCheckboxes.vue';
import Radio from '~/02/Radio.vue';
import Select from '~/02/Select.vue';

export default {
  title: 'Input',
};

export const checkbox = () => Checkbox;
export const multipleCheckboxes = () => MultipleCheckboxes;
export const radio = () => Radio;
export const select = () => Select;
