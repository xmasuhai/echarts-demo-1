<template>
  <div id="vueChartDemo">
    <h2>在 Vue 中使用 echarts</h2>
    <vue-echarts :option="option"></vue-echarts>
    <button @click="loadMore"> load More</button>
  </div>
</template>

<script>
import * as echarts from 'echarts/core'
import {
  GridComponent
} from 'echarts/components'
import {
  LineChart
} from 'echarts/charts'
import {
  CanvasRenderer
} from 'echarts/renderers'

echarts.use(
  [GridComponent, LineChart, CanvasRenderer]
)
import VueEcharts from './view/vue-echarts.vue'
import {chartOptions as lineChartOptions} from './store/options/lineChartOptions.js'

export default {
  name: 'vue-app',
  components: {
    VueEcharts
  },
  data() {
    return {
      option: lineChartOptions,
    }
  },
  methods: {
    loadMore() {
      console.log(this.option)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
