import Vue from 'vue'
import VueApp from './vue-app.vue'

new Vue({
  render: h => h(VueApp)
}).$mount(document.getElementById('vueChartDemo'))
