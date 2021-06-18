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

import fitScreen from '../static/fitScreen.js'
import {chartOptions as lineChartOptions} from '../static/lineChartOptions.js'

// 初始化加载DOM
const chartDom = document.getElementById('lineChart')
if (!chartDom) {return}
fitScreen(chartDom)

const myChart = echarts.init(chartDom, 'light')
const chartOptions
  = lineChartOptions

export {
  chartDom,
  myChart,
  chartOptions
}
