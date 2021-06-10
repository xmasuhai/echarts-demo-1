import * as echarts from 'echarts';

// 初始化加载DOM
const chartDom = document.getElementById('main')
const myChart = echarts.init(chartDom, 'default')
// 配置选项
const option = {
  title: {
    text: 'ECharts 示例'
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
