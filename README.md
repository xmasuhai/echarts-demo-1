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
- 遇坑，保证安装包在项目目录下安装到`node_modules`，而不是安装在`~/`根目录
  - 去掉设置中>终端>“将'node_modules/.bin'从项目根添加到%PATH%” 前面的勾选
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

> 使用`parcel`

```sh
parcel src/index.html
```

> CRM学习法

- Copy 去官网炒栗子
- Run 在自己的项目里运行
- Modify 修改代码，理解作用（半黑箱）

#### `echarts` 第一个例子

> `index.html`

```html
```

> `main.js`

```js
```

- `legend.data`与`series.name`的名称相互对应 ，一致食材可以显示项目名称

#### 功能

##### 换主题

- `echarts.init(xxx, 'dark')`

##### `WebStorm/VSCode`技巧

- 安装`@types/echarts`加强代码提示
- `WebStorm`查看历史版本`local history > show history`

##### 细节配置

- 如何修改、提示等
- 如何查看[`echarts`术语速查手册](https://echarts.apache.org/zh/cheat-sheet.html)

##### `echarts` 如何改外观


#### `echarts` 更新数据


> 再次 `setOption`即可

- `echarts`会自动找出差异，并更新图表
- 使用`showLoading()/hideLoading()`
- [更复杂的示例](https://echarts.apache.org/examples/zh/editor.html?c=doc-example/tutorial-dynamic-data)

#### echarts 展示 loading

#### `echart` 点击事件

> 使用`on`即可

- 获取`dataIndex`和`seriesIndex`
- 其他查看文档：[ECharts 中的事件和行为](https://echarts.apache.org/zh/tutorial.html#ECharts%20%E4%B8%AD%E7%9A%84%E4%BA%8B%E4%BB%B6%E5%92%8C%E8%A1%8C%E4%B8%BA)

#### `echarts`移动端适配

##### 常规技巧

- `meta:viewport` 抄淘宝手机版
- 用`JS`获取屏幕宽度设置在`div`上
- 设定宽高比

##### `echarts`提供的功能

- `baseOption` + `media`

#### Vue里使用 `echarts`

##### 封装组件

##### 引入其他封装

- [vue-echarts](https://github.com/ecomfe/vue-echarts)

#### React里使用 `echarts`

##### 封装组件

##### 引入其他封装

- [echarts-for-react](https://github.com/hustcc/echarts-for-react)

#### 总结

- echarts x Vue
- echarts x React

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
