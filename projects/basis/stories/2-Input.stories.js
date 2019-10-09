import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Checkbox from '../src/components/atoms/Checkbox.vue';
import CheckboxHasLabel from '../src/components/atoms/CheckboxHasLabel.vue';

export default {
  title: 'Input',
};

export const checkbox = () => ({
  components: {
    Checkbox,
  },
  data: function() {
    return {
      checkState: 0,
    }
  },
  template: `
    <div>
      <div>checkState: {{ showCheckState }}</div>
      <Checkbox :state='checkState' id='checkbox' @click="click" />
    </div>
  `,
  computed: {
    showCheckState: function() {
      switch (this.checkState) {
        case 0: return '0: not selected';
        case 1: return '1: selected all';
        case 2: return '2: selected part';
        default: return;
      }
    },
  },
  methods: {
    click: function() {
      this.checkState = (this.checkState + 1) % 3;
    },
  },
});

export const checkboxHasLabel = () => ({
  components: {
    CheckboxHasLabel,
  },
  data: function() {
    return {
      checkState: 0,
    }
  },
  template: `
    <div>
      <div>checkState: {{ showCheckState }}</div>
      <CheckboxHasLabel :state='checkState' id='checkbox' @click="click" />
    </div>
  `,
  computed: {
    showCheckState: function() {
      switch (this.checkState) {
        case 0: return '0: not selected';
        case 1: return '1: selected all';
        case 2: return '2: selected part';
        default: return;
      }
    },
  },
  methods: {
    click: function() {
      this.checkState = (this.checkState + 1) % 3;
    },
  },
});
