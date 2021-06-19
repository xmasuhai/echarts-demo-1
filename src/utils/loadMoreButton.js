import {dateList, valueList, createKey, createValue} from '../store/chartData'

const loadMoreButton = document.getElementById('loadMore')
let isLoading = false
let newDateList = [...dateList]
let newValueList = [...valueList]

const loadMoreData = function (myChart) {
  if (isLoading) {return}
  const key = createKey()
  const value = createValue()
  newDateList = [...newDateList, key]
  newValueList = [...newValueList, value]

  myChart.showLoading()
  isLoading = true

  setTimeout(() => {
    myChart.setOption({
      xAxis: {
        data: newDateList
      },
      series: [{
        data: newValueList
      }]
    })
    myChart.hideLoading()
    isLoading = false
  }, 1500)

}

export default function (buttonElement, myChart) {
  buttonElement.addEventListener('click', () => {
    loadMoreData(myChart)
  })
}

export {
  loadMoreButton,
  newDateList,
  newValueList,
  loadMoreData
}
