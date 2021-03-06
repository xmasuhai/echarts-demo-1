// 当前视口宽度
const myScreenWidth = document.documentElement.clientWidth

export default function (chartDom) {
  if (!chartDom) {return}
  let coefficient = 1
  if(myScreenWidth > 500) {
    coefficient = .45
  }
  chartDom.style.width = `${(myScreenWidth - 10) * coefficient}px`
  chartDom.style.height = `${(myScreenWidth - 10) * coefficient * 1.2}px`
}
