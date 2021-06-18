import chartSetOption from './static/chartSetOption'
import {myChart as myBarChart, chartOptions as barChartOptions} from './modules/barChart.js'
import {myChart as myLineChart, chartOptions as lineChartOptions} from './modules/lineChart.js'
import {myChart as myPieChart, chartOptions as pieChartOptions} from './modules/pieChart.js'
import loadMoreButton from './modules/loadMoreButton'
import clickChart from './static/clickChart.js'
import uiTriggerChart from './modules/uiTriggerEvent'

chartSetOption(myBarChart, barChartOptions)
chartSetOption(myLineChart, lineChartOptions)
loadMoreButton(myLineChart)
clickChart(myLineChart)
chartSetOption(myPieChart, pieChartOptions)
uiTriggerChart()
