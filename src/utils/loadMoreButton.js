import {dateList, valueList, createKey, createValue} from '../store/chartData.js'

const loadMoreButton = document.getElementById('loadMore')
let isLoading = false
let newDateList = [...dateList]
let newValueList = [...valueList]

const renewData = function() {
  const key = createKey()
  const value = createValue()
  newDateList = [...newDateList, key]
  newValueList = [...newValueList, value]
}

const resetOption = function(myChart) {
  myChart.setOption({
    xAxis: {
      data: newDateList
    },
    series: [{
      data: newValueList
    }]
  })
}

const mockLoadData = function(myChart) {
  setTimeout(() => {
    resetOption(myChart)
    myChart.hideLoading()
    isLoading = false
  }, 1500)
}

const loadMoreData = function (myChart) {
  if (isLoading) {return}
  renewData()
  myChart.showLoading()
  isLoading = true
  mockLoadData(myChart)
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
  loadMoreData,
  renewData,
  resetOption
}
