export default function (myChart) {
  console.log("myChart: ", myChart)
  myChart.addEventListener('click', (e) => {
    console.log(myChart)
    console.log("e.name: ", e.name)
    console.log("e.dataIndex: ",e.dataIndex)
    console.log("e.data: ", e.data)
    window.open(`https://www/baidu.com/?time=${e.name}`)
  })
}
