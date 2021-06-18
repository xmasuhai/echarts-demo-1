import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'
import {
  BarChart
} from 'echarts/charts'
import {
  CanvasRenderer
} from 'echarts/renderers'

echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer]
)
import {chartOptions as barChartOptions} from '../store/options/barChartOptions.js'
import fitScreen from '../utils/fitScreen.js'

// 初始化加载DOM
const chartDom = document.getElementById('barChart')
if (!chartDom) {return}
fitScreen(chartDom)

const myChart = echarts.init(chartDom, 'dark')

const chartOptions
  = barChartOptions

export {
  chartDom,
  myChart,
  chartOptions
}
