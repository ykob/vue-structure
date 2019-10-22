<script>
  import Radio from '@/components/atoms/Radio.vue';

  export default {
    components: {
      Radio,
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
    h1
      |Radio
    p
      |checked: {{ checked }}
    .items
      .item(
        v-for = 'item, index in items'
        )
        Radio(
          :isChecked = 'item.value === checked'
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
