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
<script src="main.js"></script>
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

> 让用户可以和图表进行交互，在初始化后的 echarts 实例( `const myChart = echarts.init(chartDom, 'light')` )上使用 API `on` 即可

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

##### `echarts`提供的功能

- `baseOption` + `media`

---

#### Vue里使用 `echarts`

##### 封装组件

##### 引入其他封装

- [vue-echarts](https://github.com/ecomfe/vue-echarts)

---

#### React里使用 `echarts`

##### 封装组件

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


### 在 Vue 记账中加入 ECharts

---

> 参考

- 设计图：Figma
- 初始代码：https://github.com/FrankFang/morney-test-9
- 最终代码：https://github.com/FrankFang/morney-test-vue-echarts


---
---
