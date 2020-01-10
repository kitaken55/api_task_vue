import Vue from 'vue'
import App from './App.vue'
import axios from "axios"

Vue.config.productionTip = false

axios.defaults.baseURL = "https://teachapi.herokuapp.com/";

axios.defaults.headers.get["Accept"] = "application/json";

new Vue({
  render: h => h(App),
}).$mount('#app')
