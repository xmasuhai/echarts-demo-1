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
import {chartOptions as barChartOptions} from '../store/options/barChartOptions.js'
import fitScreen from '../utils/fitScreen.js'

echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer]
)

// 初始化加载DOM
const chartDom = document.getElementById('barChart')
if (!chartDom) {return}
fitScreen(chartDom)

const myChart = echarts.init(chartDom, 'dark')

const chartOptions
  = barChartOptions

/*
 * @Description: 柱形图
 * @Author: xmasuhai
 * @Date: 2025-10-04 15:18:21
 * @LastEditors: xmasuhai
 * @LastEditTime: 2025-10-05 10:33:19
 * @FilePath: src/modules/barChart.js
 * Copyright (c) 2025 by xmasuhai, All Rights Reserved.
 */
export {
  chartDom,
  myChart,
  chartOptions
}
