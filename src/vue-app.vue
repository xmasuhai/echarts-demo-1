<template>
  <div>
    <h2>在 Vue 中使用 echarts</h2>
    <vue-echarts :option="option"
                 :moreData="n"
                 @giveMoreData="renewOptions($event)">
    </vue-echarts>
    <button @click="loadMore" ref="loadMore">加载更多</button>
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
import {loadMoreData} from './utils/loadMoreButton.js'

export default {
  name: 'vue-app',
  components: {
    VueEcharts
  },
  data() {
    return {
      n: 0,
      option: lineChartOptions,
    }
  },
  methods: {
    loadMore() {
      this.n++
    },
    renewOptions(container) {
      loadMoreData(container)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
