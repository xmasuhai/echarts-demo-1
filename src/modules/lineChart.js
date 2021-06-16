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
import fitScreen from './fitScreen.js'

// 初始化加载DOM
export const chartDom = document.getElementById('lineChart')

if (!chartDom) {return}
fitScreen(chartDom)

export const myChart = echarts.init(chartDom, 'light')

export default function () {
// 使用配置项和数据显示图表
  myChart.setOption({
    baseOption: {
      title: {
        show: true,
        text: '数据',
        left: 20
      },
      legend: {
        data: ['金额']
      },
      tooltip: {
        show: true
      },
      xAxis: {
        axisLine: {
          lineStyle: {
            color: '#0074d9'
          }
        },
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
          color: '#28a745'
        },
        itemStyle: {
          borderWidth: 20,
          color: '#ff4136'
        }
      }]
    },
    media: [
      {
        query: {
          maxWidth: 500
        },
        option: {
          title: {
            show: true,
            text: '移动端数据',
            left: 20
          },
          series: [{
            lineStyle: {
              color: '#0074d9'
            },
            itemStyle: {
              borderWidth: 25,
              color: '#ff4136'
            }
          }]
        }
      }
    ]
  })
}
