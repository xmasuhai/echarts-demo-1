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
import chartData from '../storage/chartData'

// 初始化加载DOM
const chartDom = document.getElementById('lineChart')
if (!chartDom) {return}
export const myChart = echarts.init(chartDom, 'light')

export default function () {
// 使用配置项和数据显示图表
  myChart.setOption({
    title: {
      show: true,
      text: '销售数据',
      left: 20
    },
    legend: {
      data: ['金额']
    },
    tooltip: {
      show: true
    },
    xAxis: {
      axisLine: {},
      data: chartData.dateList
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '金额',
      data: chartData.valueList,
      type: 'line',
      lineStyle: {
        color: '#0074d9'
      },
      itemStyle: {
        borderWidth: 20,
        color: '#ff4136'
      }
    }]
  })
}
