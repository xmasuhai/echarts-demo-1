import {myChart, chartOptions} from './pieChart'

const app = {}
app.currentIndex = -1

/*
 * @Description: 图表分派事件
 * @Author: xmasuhai
 * @Date: 2025-10-04 15:18:21
 * @LastEditors: xmasuhai
 * @LastEditTime: 2025-10-05 22:14:34
 * @FilePath: src/modules/uiTriggerEvent.js
 * Copyright (c) 2025 by xmasuhai, All Rights Reserved.
 */
export default function () {
  setInterval(() => {
    const dataLength = chartOptions.baseOption.series[0].data.length

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
