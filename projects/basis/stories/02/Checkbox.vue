<script>
  import Checkbox from '@/components/atoms/Checkbox.vue';

  export default {
    components: {
      Checkbox,
    },
    data: function() {
      return {
        checkState: 0,
      }
    },
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
  };
</script>

<template lang="pug">
  div
    div
      |checkState: {{ showCheckState }}
    Checkbox(
      :state = 'checkState'
      id = 'checkbox'
      @click = 'click'
      )
</template>

<style lang="scss" scope>
</style>
