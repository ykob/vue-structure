import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Checkbox from '@/components/atoms/Checkbox.vue';
import CheckboxHasLabel from '@/components/atoms/CheckboxHasLabel.vue';

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
      items: [
        { id: 'itemA', value: 'itemA', label: 'check itemA', state: 0, },
        { id: 'itemB', value: 'itemB', label: 'check itemB', state: 0, },
        { id: 'itemC', value: 'itemC', label: 'check itemC', state: 0, },
        { id: 'itemD', value: 'itemD', label: 'check itemD', state: 0, },
        { id: 'itemE', value: 'itemE', label: 'check itemE', state: 0, },
      ],
    }
  },
  template: `
    <div>
      <div>
        selected: {{ showSelectedItems }}
      </div>
      <CheckboxHasLabel
        v-for = 'item, index in items'
        :state = 'item.state'
        @click = 'click(index)'
      >
        {{ item.label }}
      </CheckboxHasLabel>
    </div>
  `,
  computed: {
    showSelectedItems: function() {
      let result = [];
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].state === 1) result.push(this.items[i].value);
      }
      return result.join(', ');
    },
  },
  methods: {
    click: function(i) {
      this.items[i].state = (this.items[i].state + 1) % 2;
    },
  },
});
