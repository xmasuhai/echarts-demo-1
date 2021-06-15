const myScreenWidth = document.documentElement.clientWidth

export default function (chartDom) {
  if (!chartDom) {return}
  chartDom.style.width = `${myScreenWidth}px`
  chartDom.style.height = `${myScreenWidth * 1.2}px`
}
