<script>
  import Select from '@/components/atoms/Select.vue';

  export default {
    components: {
      Select,
    },
    data: function() {
      return {
        selected: 'itemA',
        items: [
          { value: 'itemA', label: 'select itemA', },
          { value: 'itemB', label: 'select itemB', },
          { value: 'itemC', label: 'select itemC', },
          { value: 'itemD', label: 'select itemD', },
          { value: 'itemE', label: 'select itemE', },
        ],
      }
    },
    computed: {
    },
    methods: {
      change: function(e) {
        this.selected = e.currentTarget.value;
      },
    },
  };
</script>

<template lang="pug">
  div
    div
      |selected: {{ selected }}
    Select(
      :selected = 'selected'
      :items = 'items'
      @change = 'change'
      )
</template>

<style lang="scss" scope>
</style>
