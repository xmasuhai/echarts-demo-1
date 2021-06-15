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

import fitScreen from './fitScreen'

// 初始化加载DOM
const chartDom = document.getElementById('barChart');
if (!chartDom) {return;}
fitScreen(chartDom)

const myChart = echarts.init(chartDom, 'dark');

export default function () {
// 使用配置项和数据显示图表
  myChart.setOption({
    title: {
      text: 'ECharts 柱状图示例'
    },
    tooltip: {},
    legend: {
      data: ['bug数']
    },
    xAxis: {
      data: ['1月', '2月', '3月', '4月', '5月', '6月'],
    },
    yAxis: {},
    series: [{
      name: 'bug数',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    }]
  });
}
