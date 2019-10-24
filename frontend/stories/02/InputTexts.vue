<script>
  import InputText from '@/components/atoms/InputText.vue';
  import Textarea from '@/components/atoms/Textarea.vue';

  export default {
    components: {
      InputText,
      Textarea,
    },
    data: function() {
      return {
      }
    },
    computed: {
    },
    methods: {
    },
  };
</script>

<template lang="pug">
  div
    h1
      |Input Texts
    p
      |type text
      br
      InputText(
        value = ''
        )
    p
      |type number
      br
      InputText(
        type = 'number'
        value = ''
        )
    p
      |type password
      br
      InputText(
        type = 'password'
        value = ''
        )
    p
      |Textarea
      br
      Textarea
</template>

<style lang="scss" scope>
</style>
