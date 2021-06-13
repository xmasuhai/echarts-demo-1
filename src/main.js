import barChart from './modules/barChart.js'
barChart()

import lineChart, {myChart} from './modules/lineChart.js'
lineChart()

import loadMoreButton from './modules/loadMoreButton'

loadMoreButton(myChart)

import clickChart from './modules/clickChart.js'
clickChart(myChart)
