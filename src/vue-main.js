import Vue from 'vue'
import VueApp from './vue-app.vue'

import {options} from './modules/lineChart.js'
import {myChart} from './modules/lineChart.js'

console.log("myChart: ", myChart)
console.log("options: ", options)

new Vue({
  render: h => h(VueApp)
}).$mount(document
  .getElementById('vueChartDemo'))
