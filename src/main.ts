import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';

// Global styles
import './styles/styles.scss';

Vue.config.productionTip = false;

export const vue = new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
});
