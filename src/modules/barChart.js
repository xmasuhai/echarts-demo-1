import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import {
  BarChart
} from 'echarts/charts';
import {
  CanvasRenderer
} from 'echarts/renderers';

echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer]
);

export default function () {
  // 初始化加载DOM
  const chartDom = document.getElementById('barChart')
  const myChart = echarts.init(chartDom, 'dark')
// 配置选项
  const option = {
    title: {
      text: 'ECharts 柱状图示例'
    },
    tooltip: {},
    legend: {
      data: ['bug数']
    },
    xAxis: {
      data: ['1月', '2月', '3月', '4月', '5月', '6月']
    },
    yAxis: {},
    series: [{
      name: 'bug数',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  }
// 使用配置项和数据显示图表
  option && myChart.setOption(option)
}
