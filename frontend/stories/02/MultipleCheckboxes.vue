<script>
  import Checkbox from '@/components/atoms/Checkbox.vue';

  export default {
    components: {
      Checkbox,
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
  };
</script>

<template lang="pug">
  div
    h1 Multiple Checkboxes
    p
      |checked IDs: {{ showSelectedItems }}
    .items
      .item(
        v-for = 'item, index in items'
        )
        Checkbox(
          :state = 'item.state'
          :label = 'item.label'
          @click = 'click(index)'
          )
</template>

<style lang="scss" scope>
  .items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .item {
    margin-bottom: 10px;
  }
</style>
