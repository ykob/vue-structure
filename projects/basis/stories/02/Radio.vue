<script>
  import RadioHasLabel from '@/components/atoms/RadioHasLabel.vue';

  export default {
    components: {
      RadioHasLabel,
    },
    data: function() {
      return {
        checked: 'itemA',
        items: [
          { id: 'itemA', value: 'itemA', label: 'check itemA', },
          { id: 'itemB', value: 'itemB', label: 'check itemB', },
          { id: 'itemC', value: 'itemC', label: 'check itemC', },
          { id: 'itemD', value: 'itemD', label: 'check itemD', },
          { id: 'itemE', value: 'itemE', label: 'check itemE', },
        ],
      }
    },
    computed: {
    },
    methods: {
      click: function(i) {
        this.checked = this.items[i].value;
      },
    },
  };
</script>

<template lang="pug">
  div
    div
      |checked: {{ checked }}
    .items
      .item(
        v-for = 'item, index in items'
        )
        RadioHasLabel(
          :isChecked = 'item.value === checked'
          @click = 'click(index)'
          )
          |{{ item.label }}
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
