import chartData, {createKey, createValue}  from '../storage/chartData'
const loadMoreButton = document.getElementById('loadMore')

export default function (myChart) {
  loadMoreButton.addEventListener('click', () => {
    const key = createKey()
    const value = createValue()
    chartData.dateList = [...chartData.dateList, key]
    chartData.valueList = [...chartData.valueList, value]
    myChart.setOption({
      xAxis: {
        data: chartData.dateList
      },
      series: [{
        data: chartData.valueList
      }]
    })
  })
}
