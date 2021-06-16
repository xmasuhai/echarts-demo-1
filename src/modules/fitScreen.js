// 当前视口宽度
const myScreenWidth = document.documentElement.clientWidth

// 换算方法
function nowSize(originalFontSizePX, initWidth = 1920) {
  return originalFontSizePX * (myScreenWidth / initWidth)
}

export default function (chartDom) {
  if (!chartDom) {return}
  chartDom.style.width = `${myScreenWidth}px`
  chartDom.style.height = `${myScreenWidth * 1.2}px`
}
