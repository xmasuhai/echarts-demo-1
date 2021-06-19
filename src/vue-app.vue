<template>
  <div>
    <h2>在 Vue 中使用 echarts</h2>
    <vue-echarts :option="option"
                 :moreData="n"
                 :isLoading="isLoading"
                 @giveMoreData="renewOptions($event)">
    </vue-echarts>
    <button @click="loadMore">加载更多</button>
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
import {resetOption, renewData} from './utils/loadMoreButton.js'

export default {
  name: 'vue-app',
  components: {
    VueEcharts
  },
  data() {
    return {
      n: 0,
      isLoading: false,
      option: lineChartOptions,
    }
  },
  methods: {
    loadMore() {
      this.n++
    },
    renewOptions(container) {
      if (this.isLoading) {return}
      renewData()
      container.showLoading()
      this.isLoading = true
      setTimeout(() => {
        resetOption(container)
        container.hideLoading()
        this.isLoading = false
      }, 1500)
    }
  }
}
</script>
