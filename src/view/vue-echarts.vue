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

echarts.use(
  [TitleComponent, LegendComponent, TooltipComponent, TimelineComponent, GridComponent, LineChart, CanvasRenderer]
)

import fitScreen from '../utils/fitScreen.js'

export default {
  name: 'vue-echarts',
  props: ['option'],
  mounted() {
    fitScreen(this.$refs.container)
    this.chart = echarts.init(this.$refs.container, 'light')
    this.chart.setOption(this.option)
  },
  watch: {
    option() {
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
