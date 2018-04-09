<template>
  <div class="example">
    <div v-for="st in getStringsArray">
      {{ st }}
    </div>
    <input
      type="text"
      v-model="newStr">
    <button @click="pushStringArray">Add</button>
    <button @click="pushStringArrayAsync">Add Async</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {mapActions, mapGetters, mapMutations} from 'vuex';

  export default Vue.extend({
    computed: {
      ...mapGetters({
        getStringsArray: 'getStringsArray'
      }),
      newStr: {
        get(): string {
          return this.$store.state.newStr;
        },
        set(value: string) {
          this.$store.commit('setNewStr', value);
        }
      }
    },
    methods: {
      ...mapMutations({
        pushStringArray: 'pushStringArray'
      }),
      ...mapActions({
        pushStringArrayAsync: 'pushStringArrayAsync'
      }),
      methodThatUsesActionOrMutation() {
        this.pushStringArray();
        console.log('done');
      }
    }
  });
</script>

<style lang="scss" scoped>
</style>

