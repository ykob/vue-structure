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
    div
      .row
        .col
          |type text
          br
          InputText(
            value = 'It is default value.'
            )
        .col
          |type number
          br
          InputText(
            type = 'number'
            value = ''
            )
        .col
          |type password
          br
          InputText(
            type = 'password'
            value = ''
            )
      .row
        .col
          |type text (is disabled)
          br
          InputText(
            value = 'is disabled'
            :disabled = 'true'
            )
        .col
          |type text (has error)
          br
          InputText(
            value = ''
            :hasError = 'true'
            )
      .row
        .col
          |Textarea
          br
          Textarea(
            value = 'It is default value.\nIt is default value.'
            )
        .col
          |Textarea (is disabled)
          br
          Textarea(
            value = 'This textarea is disabled.'
            :disabled = 'true'
            )
        .col
          |Textarea (has error)
          br
          Textarea(
            value = 'It is default value..\nIt is default value.'
            :hasError = 'true'
            )
</template>

<style lang="scss" scope>
  .row {
    display: flex;
    margin-top: 24px;
    &:first-child {
      margin-left: 0;
    }
  }
  .col {
    margin-left: 16px;
    &:first-child {
      margin-left: 0;
    }
  }
</style>
