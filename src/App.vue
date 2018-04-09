<template>
  <div id="app">
    <Example/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Example from './components/Example/Example.vue';

  export default Vue.extend({
    name: 'App',
    components: {
      Example
    }
  });
</script>

<style lang="scss" scoped></style>
