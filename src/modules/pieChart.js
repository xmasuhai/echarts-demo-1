import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components'
import {
  PieChart
} from 'echarts/charts'
import {
  CanvasRenderer
} from 'echarts/renderers'
import fitScreen from './fitScreen'

echarts.use(
  [TitleComponent, TooltipComponent, LegendComponent, PieChart, CanvasRenderer]
)

// 初始化加载DOM
export const chartDom = document.getElementById('pieChart')

if (!chartDom) {return}
fitScreen(chartDom)

export const myChart = echarts.init(chartDom, 'default')

export const option = {
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
}

export default function () {
  myChart.setOption(option)
}
