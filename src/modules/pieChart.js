import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  TimelineComponent
} from 'echarts/components'
import {
  PieChart
} from 'echarts/charts'
import {
  CanvasRenderer
} from 'echarts/renderers'
import fitScreen from '../static/fitScreen'

echarts.use(
  [TitleComponent, TooltipComponent, LegendComponent, PieChart, TimelineComponent, CanvasRenderer]
)

// 初始化加载DOM
const chartDom = document.getElementById('pieChart')
if (!chartDom) {return}
fitScreen(chartDom)

import {chartOptions as pieChartOptions} from '../static/pieChartOptions.js'

const myChart = echarts.init(chartDom, 'default')
const chartOptions
  = pieChartOptions

export {
  chartDom,
  myChart,
  chartOptions
}
