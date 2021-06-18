export const chartOptions = {
  baseOption: {
    title: {
      text: 'ECharts 柱状图示例'
    },
    legend: {
      data: ['bug数']
    },
    tooltip: {},
    xAxis: {
      data: ['1月', '2月', '3月', '4月', '5月', '6月'],
    },
    yAxis: {
    },
    series: [{
      name: 'bug数',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    }]
  },
  media: [
    {
      query: {
        maxWidth: 500
      },
      option: {
        title: {
          text: 'ECharts 柱状图示例 移动端'
        },
        legend: {
          data: ['bug数'],
          right: 40
        },
      }
    }
  ]
}
