# Vuex mappers issue

A Vue.js/Typescript example project to address the Vuex mappers issue:
> Error: Property NAME_OF_PROP does not exist on type 'CombinedVueInstance<Vue, ...>'

## Issue Example
When you add mappers to the Vue component they work fine
until you try to use mapped methods in component methods.

The below code works fine:
```
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
    })
  }
});
```

But if we add a method that uses any of the mapped methods the error appears:
> Property 'pushStringArray' does not exist on type 'CombinedVueInstance<Vue, ...>'

```
import Vue from 'vue';
import {mapActions, mapGetters, mapMutations} from 'vuex'

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
      // HERE COMES THE ERROR
      this.pushStringArray();
      console.log('done');
    }
  }
}
```

## How to run
``` bash
# Install dependencies
yarn
OR
npm install

# Serve with hot reload at localhost:8080
yarn run dev

# Build for production with minification
yarn run build

# Run unit tests
yarn run unit
# Report will be located at: test/unit/reports/test-report.html
# Coverage report will be located at: test/unit/reports/coverage/index.html

# Run e2e tests with output to console
yarn run e2e

# Generate HTML report (after running e2e)
yarn run e2e-html-report
# Report will be located at: test/e2e/reports/html/cucumber_report.html

# Perform ESLint code check
yarn run lint
```
