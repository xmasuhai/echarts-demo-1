import {myChart, option} from './pieChart'

const app = {}
app.currentIndex = -1

export default function () {
  setInterval(() => {
    const dataLength = option.baseOption.series[0].data.length

    // 取消之前高亮的图形 dispatchAction({ type: 'downplay' })
    myChart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: app.currentIndex
    })

    app.currentIndex = (app.currentIndex + 1) % dataLength

    // 高亮当前图形 dispatchAction({ type: 'highlight' })
    myChart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: app.currentIndex
    })

    // 显示 tooltip dispatchAction({ type: 'showTip' })
    myChart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: app.currentIndex
    })
  }, 1000)
}
