import chartData, {createKey, createValue} from '../store/chartData'

const loadMoreButton = document.getElementById('loadMore')

let isLoading = false
export default function (myChart) {
  loadMoreButton.addEventListener('click', () => {
    if (isLoading) {return}
    const key = createKey()
    const value = createValue()
    chartData.dateList = [...chartData.dateList, key]
    chartData.valueList = [...chartData.valueList, value]

    myChart.showLoading()
    isLoading = true
    setTimeout(() => {
      myChart.setOption({
        xAxis: {
          data: chartData.dateList
        },
        series: [{
          data: chartData.valueList
        }]
      })
      myChart.hideLoading()
      isLoading = false
    }, 1500)

  }, {passive: true})
}
