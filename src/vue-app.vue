<!--
 * @Description: vue组件使用echarts
 * @Author: xmasuhai
 * @Date: 2025-10-04 15:18:21
 * @LastEditors: xmasuhai
 * @LastEditTime: 2025-10-05 12:14:34
 * @FilePath: src/vue-app.vue
 * Copyright (c) 2025 by xmasuhai, All Rights Reserved.
-->
<template>
  <div>
    <h2>在 Vue 中使用 echarts</h2>
    <VueEcharts
      :option="option"
      :moreData="n"
      :isLoading="isLoading"
      @giveMoreData="renewOptions($event)"/>
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
import VueEcharts from './view/vue-echarts.vue'
import {chartOptions as lineChartOptions} from './store/options/lineChartOptions.js'
import {resetOption, renewData} from './utils/loadMoreButton.js'

echarts.use(
  [GridComponent, LineChart, CanvasRenderer]
)

export default {
  name: 'vue-app',
  components: {
    VueEcharts,
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
