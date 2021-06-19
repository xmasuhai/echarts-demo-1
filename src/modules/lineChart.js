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
import fitScreen from '../utils/fitScreen.js'
import {chartOptions as lineChartOptions} from '../store/options/lineChartOptions.js'

echarts.use(
  [GridComponent, LineChart, CanvasRenderer]
)
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
