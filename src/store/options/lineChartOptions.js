import {dateList, valueList} from '../chartData.js'

export const chartOptions = {
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
      data: dateList
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '金额',
      data: valueList,
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
            borderWidth: 30,
            color: '#ff4136'
          }
        }]
      }
    }
  ]
}
