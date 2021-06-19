<template>
  <div ref="container">
    vue-echarts
  </div>
</template>

<script>
import * as echarts from 'echarts/core'
import {
  TitleComponent, TooltipComponent, LegendComponent, GridComponent, TimelineComponent
} from 'echarts/components'
import {
  LineChart
} from 'echarts/charts'
import {
  CanvasRenderer
} from 'echarts/renderers'
import fitScreen from '../utils/fitScreen.js'

echarts.use(
  [TitleComponent, LegendComponent, TooltipComponent, TimelineComponent, GridComponent, LineChart, CanvasRenderer]
)

export default {
  name: 'vue-echarts',
  props: ['option', 'moreData', 'isLoading'],
  mounted() {
    fitScreen(this.$refs.container)
    this.chart = echarts.init(this.$refs.container, 'light')
    this.chart.setOption(this.option)
  },
  watch: {
    option() {
      this.chart.setOption(this.option)
    },
    moreData() {
      this.$emit('giveMoreData', this.chart)
    },
    isLoading() {
      this.isLoading ? this.chart.showLoading() : this.chart.hideLoading()
    }
  }
}
</script>
