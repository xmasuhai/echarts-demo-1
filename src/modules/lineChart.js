import * as echarts from 'echarts/core';
import {
  GridComponent
} from 'echarts/components';
import {
  LineChart
} from 'echarts/charts';
import {
  CanvasRenderer
} from 'echarts/renderers';

echarts.use(
  [GridComponent, LineChart, CanvasRenderer]
);
export default function () {
  // 初始化加载DOM
  const chartDom = document.getElementById('lineChart')
  const myChart = echarts.init(chartDom, 'light')
// 配置选项
  const option = {
    title: {
      text: 'ECharts 线形图示例'
    },
    legend: {
      data: ['bug数']
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: 'bug数',
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }]
  }
// 使用配置项和数据显示图表
  option && myChart.setOption(option)
}
