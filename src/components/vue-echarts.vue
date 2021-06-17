<template>
  <div ref="container">
    vue-echarts
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

import fitScreen from '../modules/fitScreen.js'

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
      this.chart.setOPtion(this.option)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
