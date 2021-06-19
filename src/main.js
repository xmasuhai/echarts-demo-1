import chartSetOption from './utils/chartSetOption.js'
import {myChart as myBarChart, chartOptions as barChartOptions} from './modules/barChart.js'
import {myChart as myLineChart, chartOptions as lineChartOptions} from './modules/lineChart.js'
import {myChart as myPieChart, chartOptions as pieChartOptions} from './modules/pieChart.js'
import loadMore, {loadMoreButton} from './utils/loadMoreButton.js'
import clickChart from './utils/clickChart.js'
import uiTriggerChart from './modules/uiTriggerEvent.js'

chartSetOption(myBarChart, barChartOptions)
chartSetOption(myLineChart, lineChartOptions)
loadMore(loadMoreButton,myLineChart)
clickChart(myLineChart)
chartSetOption(myPieChart, pieChartOptions)
uiTriggerChart()
