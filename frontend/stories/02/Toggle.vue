<script>
  import Toggle from '@/components/atoms/Toggle.vue';

  export default {
    components: {
      Toggle,
    },
    data: function() {
      return {
        isTurnedOn: false,
      }
    },
    computed: {
    },
    methods: {
      click: function() {
        this.isTurnedOn = !this.isTurnedOn;
      },
    },
  };
</script>

<template lang="pug">
  div
    h1
      |Toggle
    p
      |toggle state: {{ isTurnedOn }}
    Toggle(
      :isTurnedOn = 'isTurnedOn'
      @click = 'click'
      )
</template>

<style lang="scss" scope>
</style>
