export default function (myChart) {
  myChart.on('click', (e) => {
    console.log("e: ", e)
    console.log("e.name: ", e.name)
    console.log("e.dataIndex: ",e.dataIndex)
    console.log("e.data: ", e.data)
    window.open(`https://www/baidu.com/?time=${e.name}`, 'blank')
  })
}
