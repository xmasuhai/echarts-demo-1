import barChart from './modules/barChart.js'
barChart()

import lineChart, {myChart} from './modules/lineChart.js'
lineChart()

import loadMoreButton from './modules/loadMoreButton'

loadMoreButton(myChart)

import clickChart from './modules/clickChart.js'
clickChart(myChart)

const app = {}
app.currentIndex = -1
const option = null;
setInterval(function () {
  const dataLen = option.series[0].data.length;
  // 取消之前高亮的图形
  myChart.dispatchAction({
    type: 'downplay',
    seriesIndex: 0,
    dataIndex: app.currentIndex
  });
  app.currentIndex = (app.currentIndex + 1) % dataLen;
  // 高亮当前图形
  myChart.dispatchAction({
    type: 'highlight',
    seriesIndex: 0,
    dataIndex: app.currentIndex
  });
  // 显示 tooltip
  myChart.dispatchAction({
    type: 'showTip',
    seriesIndex: 0,
    dataIndex: app.currentIndex
  });
}, 1000);
