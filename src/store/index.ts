import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface ITestData {
  stringArray: string[],
  newStr: string
}

export default new Vuex.Store<ITestData>({
  state: {
    stringArray: [],
    newStr: ''
  },
  actions: {
    pushStringArrayAsync: ({commit}) => {
      return setTimeout(() => {
        commit('pushStringArray');
      }, 1000);
    }
  },
  mutations: {
    pushStringArray: state => {
      state.stringArray.push(state.newStr);
    },
    setNewStr: (state, payload) => {
      state.newStr = payload;
    }
  },
  getters: {
    getStringsArray: state => state.stringArray
  }
});
