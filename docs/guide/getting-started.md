# 快速上手

## 模块介绍

1. **util**  
  该模块提供在前端实际开发过程中高频使用但JS API不直接提供的方法，主要覆盖字符串、数组和对象的相关方法。
2. **vis**  
  第三方库的扩展方法。基于第三方开源库（Three.js、Echarts、D3js）等，提供的常用的操作方法或二次封装。
3. **dev**  
  该模块提供开发面向开发者的工具，如性能检测、debug等。
4. **voice**
  该模块提供语音识别和语音合成功能

:::tip 提示
如果只需要本脚本库提供的部分功能，请使用按需引入的方式。
:::

## 安装

浏览器环境：
```js
// 完整引入
<script src="https://unpkg.com/dtc@<version>/dist/dtc.umd.min.js"></script>
```
```js
// 按需引入 util 包
<script src="https://unpkg.com/dtc@<version>/dist/dtc.util.umd.min.js"></script>

// 按需引入 vis 包
<script src="https://unpkg.com/dtc@<version>/dist/dtc.vis.umd.min.js"></script>

// 按需引入 dev 包
<script src="https://unpkg.com/dtc@<version>/dist/dtc.dev.umd.min.js"></script>
```

通过 npm：
```bash
$ npm install dtc --save
```

## 使用
在浏览器端使用

```js
// 使用
let arr = [3,4,4,33,4,3,4]
[dtc.]util.unique(arr)
// [3,4,33]
```
:::warning
如果你引入的是某一个子模块，那么 dtc 命名空间则省略了。使用 vis 模块你需要手动引入 three.js 等第三方依赖。
:::

在实用webpack的项目构建工具的项目中引入

:::tip
为了减少调用方法的层级，我们提供了两种模块导出方式，即默认导出和命名导出。因此你可以通过以下两种方式来时用。
:::
```js
// 完整引入
import dtc from 'dtc'
// 使用
let arr = [3,4,4,33,4,3,4]
dtc.util.unique(arr)
// [3,4,33]

// 按需引入
import {util} from 'dtc'
// 使用
let arr = [3,4,4,33,4,3,4]
util.unique(arr)
// [3,4,33]
```

本项目在浏览器端使用是通过`umd`方式导出，通过`npm`安装的`package`则是通过`ES6`的模块暴露方式暴露，你可以在任何支持的前端工程项目中引用。
