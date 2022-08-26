import Vue from 'vue'
import App from './App.vue'
import TastOne from "@/components/TastOne.vue";

Vue.config.productionTip = false
Vue.component('TastOne', TastOne)
new Vue({
  render: h => h(App)
}).$mount('#app')
