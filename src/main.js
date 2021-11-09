import Vue from 'vue';
import App from './App.vue';
import VueMask from 'v-mask';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;
Vue.use(VueMask, {
  placeholders: {
    Я: /[а-яА-Я]/,
    E: /[a-zA-Z]/
  }
});
Vue.use(Vuelidate);

new Vue({
  render: (h) => h(App)
}).$mount('#app');
