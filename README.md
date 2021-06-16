# echarts-demo-1

## 统计图表

### 【数据可视化】Echarts 使用指南

> 分别介绍

- JS里使用 `echarts`
- Vue里使用 `echarts`
- React里使用 `echarts`

#### 引入 `echarts`

##### 无打包工具（`webpack/parcel`）用于快速调试demo

- 直接在 `index.html`引入`<script src="[path]/echarts.min.js"></script>`，使用bootCDN
- 使用全局变量`window.echarts`

> `src/index.html`

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>echarts-demo-1</title>
</head>

<body>
<script src="https://cdn.bootcdn.net/ajax/libs/echarts/5.1.1/echarts.min.js"></script>
<script>
  // 查看控制台是否正确引入
  console.log(echarts)
</script>
</body>
</html>

```

- 安装`http-server`

```sh
yarn global add http-server
```

- 使用`http-server`打开`src/index.html`

```sh
hs src/ -c-1
```

##### 有`webpack/parcel`(`vue/cli` `vite`) + `TS` 用于一般项目

> 安装（以使用`parcel`为例）

```sh
yarn global add parcel-bundler
# yarn init -y # enter all the time # 无需此步骤 第一次安装包 自动初始化项目
yarn add echarts
yarn add --dev @types/echarts
```

- 安装`yarn add --dev @types/echarts`是为了在`WebStorm`中输入代码会有提示
- 遇坑，不显示属性名提示（灰色表示）
  - 保证安装包安装在项目目录下的`node_modules`，而不是安装在`~/`根目录
  - 去掉 `设置 > 终端 > “将'node_modules/.bin'从项目根添加到%PATH%”` 前面的勾选
  - 重新初始化一遍项目

> `index.html`中引入入口文件`main.js`

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>echarts-demo-1</title>
</head>

<body>
<script src="main.js"></script>
</body>
</html>

```

> `main.js`

```js
console.log('hi')
```

- `import * as echarts from 'echarts';'`全局导入
- 或者按需导入模块：

```js
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import {
  BarChart
} from 'echarts/charts';
import {
  CanvasRenderer
} from 'echarts/renderers';

echarts.use(
        [TitleComponent, TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer]
);

```

> `main.js`

```js
// import echarts from 'echarts' // 旧版本@5.00- 导入语句
import * as echarts from 'echarts'; // echarts@5.1.2
console.log(echarts)
```

> 使用`parcel`运行

```sh
parcel src/index.html
```

- 编译完成后，查看效果点击`Server running at http://localhost:1234`

> CRM学习法

- Copy 去官网炒栗子
- Run 在自己的项目里运行
- Modify 修改代码，理解作用（半黑箱）

#### `echarts` 第一个例子

> `index.html`

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>echarts-demo-1</title>
</head>

<body>
<main>
  <section>
    <div id="barChart" style="width: 600px; height:400px;"></div>
  </section>
  <br>
</main>
<script src="main.js"></script>
</body>

</html>

```

> `main.js`

```js
import barChart from './modules/barChart.js'
barChart()

```

> `./modules/barChart.js`

```js
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components';
import {
  BarChart
} from 'echarts/charts';
import {
  CanvasRenderer
} from 'echarts/renderers';

echarts.use(
        [TitleComponent, TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer]
);

export default function () {
  // 初始化加载DOM
  const chartDom = document.getElementById('barChart')
  const myChart = echarts.init(chartDom, 'dark')
// 配置选项
  const option = {
    title: {
      text: 'ECharts 柱状图示例'
    },
    tooltip: {},
    legend: {
      data: ['bug数']
    },
    xAxis: {
      data: ['1月', '2月', '3月', '4月', '5月', '6月']
    },
    yAxis: {},
    series: [{
      name: 'bug数',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  }
// 使用配置项和数据显示图表
  option && myChart.setOption(option)
}

```

- `legend.data`与`series.name`的名称必须相互对应 ，一致时才能显示项目名称

#### 增加一个线形图

> `index.html`

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>echarts-demo-1</title>
</head>

<body>
<main>
  <section>
    <div id="barChart" style="width: 600px; height:400px;"></div>
  </section>
  <br>
  <section>
    <div id="lineChart" style="width: 600px; height:400px;"></div>
  </section>
</main>
<script src="main.ts"></script>
</body>

</html>

```

> `main.js`

```js
import barChart from './modules/barChart'
barChart()

import lineChart from './modules/lineChart'
lineChart()

```

> `./modules/lineChart.js`

```js
import * as echarts from 'echarts/core';
import {
  GridComponent
} from 'echarts/components';
import {
  LineChart
} from 'echarts/charts';
import {
  CanvasRenderer
} from 'echarts/renderers';

echarts.use(
  [GridComponent, LineChart, CanvasRenderer]
);

export default function () {
  // 初始化加载DOM
  const chartDom = document.getElementById('lineChart')
  const myChart = echarts.init(chartDom, 'light')
// 配置选项
  const option = {
    title: {
      text: 'ECharts 线形图示例'
    },
    legend: {
      data: ['bug数']
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: 'bug数',
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }]
  }
// 使用配置项和数据显示图表
  option && myChart.setOption(option)
}

```

---

#### `echarts`功能

##### 换主题

- `ecahrts.init`支持传第二个参数`echarts.init(xxx, 'dark')`
  - 主题默认`default`
  - 暗系主题`dark`
  - 亮系主题`light`

##### `WebStorm/VSCode`技巧

- 安装`@types/echarts`加强代码提示
  - 遇坑，不显示属性名提示（灰色表示）
    - 保证安装包安装在项目目录下的`node_modules`，而不是安装在`~/`根目录
    - 去掉 `设置 > 终端 > “将'node_modules/.bin'从项目根添加到%PATH%”` 前面的勾选
    - 重新初始化一遍项目
- `WebStorm`查看历史版本`local history > show history`，比较对应变更

##### 细节配置

- 如何修改、提示等
- 如何查看[`echarts`术语速查手册](https://echarts.apache.org/zh/cheat-sheet.html)

> 以重构`lineCharts.js`为例

```js
import ...

export default function () {
  // 初始化加载DOM
  const chartDom = document.getElementById('barChart')
  if (!chartDom) {return}
  const myChart = echarts.init(chartDom, 'dark')

// 使用配置项和数据显示图表
  myChart.setOption({
    title: {
      text: 'ECharts 柱状图示例'
    },
    tooltip: {},
    legend: {
      data: ['bug数']
    },
    xAxis: {
      data: ['1月', '2月', '3月', '4月', '5月', '6月']
    },
    yAxis: {},
    series: [{
      name: 'bug数',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  });
}
```

- 直接将配置写在`myChart.setOption`里，由于安装了`@types/echarts`，写属性时会有代码提示

##### `echarts` 如何改外观 数据

- [`echarts`术语速查手册](https://echarts.apache.org/zh/cheat-sheet.html)
- 改线型 项目点样式 `series.lineStyle` `series.itemStyle`等
- 显示提示文字 `tooltip.show`

```js
import ...

export default function () {
  // 初始化加载DOM
  const chartDom = document.getElementById('lineChart');
  if (!chartDom) {return;}
  const myChart = echarts.init(chartDom, 'light');

// 使用配置项和数据显示图表
  myChart.setOption({
    title: {
      show: true,
      text: '销售数据',
      left: 20
    },
    legend: {
      data: ['金额']
    },
    tooltip: {
      show: true
    },
    xAxis: {
      axisLine: {
      },
      data: ['2021-06-01', '2021-06-02', '2021-06-03', '2021-06-04', '2021-06-05']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '金额',
      data: [150, 230, 224, 218, 135],
      type: 'line',
      lineStyle: {
        color: "#0074d9"
      },
      itemStyle: {
        borderWidth: 20,
        color: "#ff4136"
      }
    }]
  });
}

```

---

#### `echarts` 更新数据

> 目前只能显示静态的数据，需要更新数据，只需更新配置，再次 `setOption`即可

- `option`只需更新需要改的部分配置属性
  - 但是坐标轴等数据需要包括原来的旧数据和新数据
- `echarts`会自动找出差异，并更新图表
- [更复杂的示例](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/tutorial-dynamic-data)


> 封装模拟数据`storage/chartData.js`

```js
let n = 0
let m = 0

export function createKey() {
  n += 1
  return `2021-6-${n}`
}

export function createValue() {
  m += 1
  return m
}

export default {
  dateList: [createKey(), createKey(), createKey(), createKey(), createKey()],
  valueList: [createValue(), createValue(), createValue(), createValue(), createValue()]
}

```

> `lineCharts.js`

```js
import ...

echarts.use(
  [GridComponent, LineChart, CanvasRenderer]
)

import chartData from '../storage/chartData'

// 初始化加载DOM
const chartDom = document.getElementById('lineChart')

if (!chartDom) {return}
export const myChart = echarts.init(chartDom, 'light')

export default function () {
// 使用配置项和数据显示图表
  myChart.setOption({
    title: {
      show: true,
      text: '销售数据',
      left: 20
    },
    legend: {
      data: ['金额']
    },
    tooltip: {
      show: true
    },
    xAxis: {
      axisLine: {
        lineStyle: {
          color: '#0074d9'
        }
      },
      data: chartData.dateList
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '金额',
      data: chartData.valueList,
      type: 'line',
      lineStyle: {
        color: '#28a745'
      },
      itemStyle: {
        borderWidth: 20,
        color: '#ff4136'
      }
    }]
  })
}

```

> `loadMoreButton.js`

```js
import chartData, {createKey, createValue} from '../storage/chartData'

const loadMoreButton = document.getElementById('loadMore')

export default function (myChart) {
  loadMoreButton.addEventListener('click', () => {
    const key = createKey()
    const value = createValue()
    chartData.dateList = [...chartData.dateList, key]
    chartData.valueList = [...chartData.valueList, value]
    
    myChart.setOption({
      xAxis: {
        data: chartData.dateList
      },
      series: [{
        data: chartData.valueList
      }]
    })

  })
}

```

> `main.js`

```js
import barChart from './modules/barChart.js'
barChart()

import lineChart, {myChart} from './modules/lineChart.js'
lineChart()

import loadMoreButton from './modules/loadMoreButton'

loadMoreButton(myChart)

```

> `index.html`

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>echarts-demo-1</title>
</head>

<body>
<main>
  <section>
    <div id="lineChart" style="width: 600px; height:400px;"></div>
    <button id="loadMore">加载更多</button>
  </section>
</main>
<script src="main.js"></script>
</body>

</html>

```

#### echarts 展示 loading

- 使用内置的`loading`动画：`showLoading() / hideLoading()` 显示/隐藏加载中动画
- 事件锁控制触发事件的时机，防止频繁触发

> `loadMoreButton.js`

```js
import chartData, {createKey, createValue} from '../storage/chartData'

const loadMoreButton = document.getElementById('loadMore')

let isLoading = false
export default function (myChart) {
  loadMoreButton.addEventListener('click', () => {
    if(isLoading) {return}
    const key = createKey()
    const value = createValue()
    chartData.dateList = [...chartData.dateList, key]
    chartData.valueList = [...chartData.valueList, value]

    myChart.showLoading()
    isLoading = true
    setTimeout(() => {
      myChart.setOption({
        xAxis: {
          data: chartData.dateList
        },
        series: [{
          data: chartData.valueList
        }]
      })
      myChart.hideLoading()
      isLoading = false
    }, 1500)

  })
}

```

---

#### `echart` 点击事件

> 让用户可以和图表进行交互
>
> 在初始化后的 echarts 实例( `const myChart = echarts.init(chartDom, 'light')` )上使用 API `on` 即可

- 只有图表中允许用户操作(比如点击)的部分才能设置用户交互
- 获取`dataIndex`和`seriesIndex`
- 其他查看文档：[ECharts 中的事件和行为](https://echarts.apache.org/zh/tutorial.html#ECharts%20%E4%B8%AD%E7%9A%84%E4%BA%8B%E4%BB%B6%E5%92%8C%E8%A1%8C%E4%B8%BA)

> `clickChart.js`

```js
export default function (myChart) {
  myChart.on('click', (e) => {
    console.log("e.name: ", e.name)
    console.log("e.dataIndex: ",e.dataIndex)
    console.log("e.data: ", e.data)
    window.open(`https://www/baidu.com/?time=${e.name}`)
  })
}

```

> `main.js`

```js
import barChart from './modules/barChart.js'
barChart()

import lineChart, {myChart} from './modules/lineChart.js'
lineChart()

import loadMoreButton from './modules/loadMoreButton'

loadMoreButton(myChart)

import clickChart from './modules/clickChart.js'
clickChart(myChart)

```

#### `echarts`移动端适配

##### 常规技巧

- `meta:viewport` 抄淘宝手机版
- 用`JS`获取屏幕宽度设置在`div`上
  - 设定宽高比
- 使用`echarts`提供的媒体查询API

> `main.m.taobao.com`

```html
<meta name="viewport"
    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
```

> iPhoneX 的宽度 `375px`  PC端设计稿是 `1920*1080`

- 用代码获取屏幕宽度，来适配

```js
const width = document.documentElement.clientWidth
```

##### `echarts`提供的媒体查询功能

- `baseOption` + `media`
  - 将共有的选项放入 `baseOption: {...}`
  - 将独有的选项放入 `media: [{query: {...}, option: {...}}, ...]`

> `fitScreen.js`

```js
// 当前视口宽度
const myScreenWidth = document.documentElement.clientWidth

export default function (chartDom) {
  if (!chartDom) {return}
  let coefficient = 1
  if(myScreenWidth > 500) {
    coefficient = .45
  }
  chartDom.style.width = `${myScreenWidth * coefficient}px`
  chartDom.style.height = `${myScreenWidth * coefficient * 1.2}px`
}

```

> `lineChart.js`

```js
import ...

echarts.use(
  [GridComponent, LineChart, CanvasRenderer]
)

import chartData from '../storage/chartData'
import fitScreen from './fitScreen.js'

// 初始化加载DOM
export const chartDom = document.getElementById('lineChart')

if (!chartDom) {return}
fitScreen(chartDom)

export const myChart = echarts.init(chartDom, 'light')

export default function () {
// 使用配置项和数据显示图表
  myChart.setOption({
    baseOption: {
      title: {
        show: true,
        text: '数据',
        left: 20
      },
      legend: {
        data: ['金额']
      },
      tooltip: {
        show: true
      },
      xAxis: {
        axisLine: {
          lineStyle: {
            color: '#0074d9'
          }
        },
        data: chartData.dateList
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '金额',
        data: chartData.valueList,
        type: 'line',
        lineStyle: {
          color: '#28a745'
        },
        itemStyle: {
          borderWidth: 5,
          color: '#ff4136'
        }
      }]
    },
    media: [
      {
        query: {
          maxWidth: 500
        },
        option: {
          title: {
            show: true,
            text: '移动端数据',
            left: 20
          },
          series: [{
            itemStyle: {
              borderWidth: 25,
              color: '#ff4136'
            }
          }]
        }
      }
    ]
  })
}

```

---

##### 字体

> 按比例缩放字体

- 图表中的fontSize和legend的大小等默认都是px单位
  - legend中的itemWidth，itemHeight，itemGap
  - 柱状图中的barWidth，坐标系中的axisLine的width
  - 传入vw，rem单位是没有用
  - 定位方式传的单位可以是百分比，大小尺寸不能
- 不只是字体的问题 各种图的比例也是
- 将实际窗口的大小与设计图窗口大小做比得到要给相对的比率
- 每个单位数值和这个比率相乘即可

```js
// 当前视口宽度
const myScreenWidth = document.documentElement.clientWidth

// 换算方法
function nowSize(originalFontSizePX, initWidth = 1920) {
  return originalFontSizePX * (myScreenWidth / initWidth)
}

const barChartOption = {
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
    axisPointer: {type: 'shadow'}
  },
  legend: {
    data: ['门禁进入', '门禁外出'],
    align: 'left',
    top: nowSize(18),
    right: nowSize(20),
    textStyle: {
      color: '#c1c5cd',
      fontSize: nowSize(13)
    },
    itemWidth: nowSize(10),
    itemHeight: nowSize(10),
    itemGap: nowSize(12)
  },
  grid: {top: '24%', left: '3%', right: '3%', bottom: '3%', containLabel: true},
  xAxis: [{
    type: 'category',
    data: ['1号楼', '2号楼', '3号楼', '4号楼', '5号楼', '6号楼', '7号楼', '8号楼',],
    axisLine: {show: true, lineStyle: {color: '#45647f', width: nowSize(1), type: 'solid'}},
    axisTick: {show: false,},
    axisLabel: {show: true, textStyle: {color: '#a1d8f1', fontSize: nowSize(12)}},
  }],
  yAxis: [{
    type: 'value',
    axisTick: {show: false,},
    axisLine: {show: true, lineStyle: {color: '#45647f', width: nowSize(1), type: 'solid'},},
    splitLine: {show: false},
    axisLabel: {show: true, textStyle: {color: '#a1d8f1', fontSize: nowSize(12)}}
  }],
  series: [{
    name: '门禁进入', type: 'bar', data: [20, 50, 80, 58, 83, 68, 57, 100],
    barWidth: nowSize(8), // 柱子宽度
    // barGap: 1, // 柱子之间间距
    // itemStyle: { color: '#14e3cc' }}, { name: '门禁外出', type: 'bar', data: [50, 70, 60, 61, 75, 87, 60, 62],
    // barWidth: nowSize(8), // barGap: 1, itemStyle: { color: '#f84f55' } }]
  }]
}
```

> 参考

- [echarts 图表 PC/移动端自适应方案](https://www.jianshu.com/p/091c6812b0ad)
- [echarts图表文字如何适配大屏分辨率](https://juejin.cn/post/6897857163918573582)
- [echarts改变字体单位实现自适应](https://www.huaweicloud.com/articles/273c606c14d0371b9f0ce160d6971b83.html)

---

#### Vue里使用 `echarts`

##### 自己封装组件

> `vue-index.html`

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="style/reset.scss">
  <title>echarts-demo-1</title>
</head>

<body>
<main>
  <section id="vueChartDemo">
  </section>
</main>
<script src="vue-main.js"></script>
</body>

</html>

```

> 安装演示用的依赖

```sh
yarn add vue@2.6.11
yarn add --dev @types/vue
```

- vue版本依赖包（vue@2.6.11 ） （vue-template-compiler@2.6.14）不匹配
- 把版本号改成一样`yarn add --dev vue-template-compiler@2.6.11`

> 入口文件`vue-main.js` 演示组件`vue-app.vue`

```js
import Vue from 'vue'
import VueApp from './vue-app.vue'

new Vue({
  render: h => h(VueApp)
}).$mount(document.getElementById('vueChartDemo'))

```

```vue
<template>
  <div>
    Hi
  </div>
</template>

<script>
export default {
  name: 'vue-app'
};
</script>

<style lang="scss" scoped>

</style>

```

> 启动服务运行，自动安装所需依赖

```sh
parcel src/vue-index.html
```

##### 引入其他封装

- [vue-echarts](https://github.com/ecomfe/vue-echarts)

---

#### React里使用 `echarts`

##### 自己封装组件

##### 引入其他封装

- [echarts-for-react](https://github.com/hustcc/echarts-for-react)

---

#### 总结

- `echarts x Vue x TypeScript`
- `echarts x React x TypeScript`

---

### 什么是数据可视化

- 用`echarts`做页面是最初级的可视化
- 深入`d3.js`
- 大屏项目

---

> 参考

- [Echarts 使用指南 PDF](chrome-extension://oemmndcbldboiebfnladdacbdfmadadm/https://static.xiedaimala.com/xdml/file/3ac7c224-c23d-491f-84b5-4fabfbeab9b8/2020-5-17-21-21-26.pdf)
- [ECharts 教程 RUNOOB](https://www.runoob.com/echarts/echarts-tutorial.html)


### 在 Vue 记账中加入 ECharts

---

> 参考

- 设计图：Figma
- 初始代码：https://github.com/FrankFang/morney-test-9
- 最终代码：https://github.com/FrankFang/morney-test-vue-echarts


---
---
