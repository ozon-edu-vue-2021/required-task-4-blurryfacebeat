import Vue from 'vue';
import App from './App.vue';
import VueMask from 'v-mask';

Vue.config.productionTip = false;
Vue.use(VueMask, {
  placeholders: {
    Я: /[а-яА-Я]/,
    E: /[a-zA-Z]/
  }
});

new Vue({
  render: (h) => h(App)
}).$mount('#app');
