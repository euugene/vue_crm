import Vue from 'vue'
import Vuelidate from "./../node_modules/vuelidate";
import App from './App.vue'
import router from './router/router'
import store from './store'
import dateFilter  from "./filters/date.filter";
import './registerServiceWorker'
import './../node_modules/materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.filter('dateFilter', dateFilter); // globally filter declaration

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
