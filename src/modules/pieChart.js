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
import fitScreen from './fitScreen'

echarts.use(
  [TitleComponent, TooltipComponent, LegendComponent, PieChart, TimelineComponent, CanvasRenderer]
)

// 初始化加载DOM
const chartDom = document.getElementById('pieChart')
if (!chartDom) {return}
fitScreen(chartDom)

const myChart = echarts.init(chartDom, 'default')
const chartOptions = {
  baseOption: {
    title: {
      text: '饼图程序调用高亮示例',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          {value: 335, name: '直接访问'},
          {value: 310, name: '邮件营销'},
          {value: 234, name: '联盟广告'},
          {value: 135, name: '视频广告'},
          {value: 1548, name: '搜索引擎'}
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  },
  media: [
    {
      query: {
        maxWidth: 500
      },
      option: {
        title: {
          text: '程序调用高亮 移动端示例',
          x: 'center'
        },
        series: [{
          itemStyle: {
            borderWidth: 30
          },
        }]
      }
    }
  ]
}

export {
  chartDom,
  myChart,
  chartOptions
}
