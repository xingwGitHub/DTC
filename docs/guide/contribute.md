# 贡献代码

## 原则

1. 低耦合-util模块要求不依赖第三方库
2. 高兼容-支持主流浏览器
3. 高容错-不应外部调用及传参导致内部报错
4. 通用-基本每个项目都经常可以用到
5. 易用-符合开发习惯，减少学习成本

## 如何参与

本项目的发展离不开广大的开发者，要成为贡献者只需要以下几个步骤：

1. Fork[项目源代码](https://github.com/wuyax/DTC)
2. 切换到开发分支`git checkout dev`
3. 为本项目添加新的`feature`
   - 本项目中的所有原始代码统一放在`src`目录，根据具体功能分类放置到特定目录
   - 模块统一以 `CommonJS` 的方式暴露和引入
   - 编写单元测试用例
   - 编写使用文档([文档编写规范](./specifications.md))
4. 提交`pull request`

::: tip 关于命名空间
目前脚本库提供`util`,`vis`,`dev`,`voice`(后续会更改名称，目前请不要向该模块添加方法)四个模块，它们的主要包含的内容如下：  
1. util  
该模块提供在前端实际开发过程中高频使用但JS API不直接提供的方法，主要覆盖字符串、数组和对象的相关方法。
2. vis  
第三方库的扩展方法。基于第三方开源库（Three.js、Echarts、D3js）等，提供的常用的操作方法或二次封装。
3. dev  
该模块提供开发面向开发者的工具，如性能检测、debug等。
4. voice (后续会更改名称，目前请不要向该模块添加方法)  
该模块提供语音识别和语音合成功能
:::

::: tip 关于单元测试
单元测试的代码可根据具体情况编写，我们希望尽可能的提供测试代码。所有的测试代码统一放在 `test` 目录下。
:::

::: tip 关于文档
文档是脚本库必要的补充和解释，它的重要性不言而喻。[文档库仓库地址](https://github.com/wuyax/docs)  
⚠️注意：目前文档和脚本库在两个独立的仓库，请分别提交`Pr`。
:::

::: warning 提示
文档统一以`markdown`的形式编写，由于文档是由`VuePress`驱动，它对`markdown`语法作出了一些扩展，具体支持情况请参阅[VuePress 文档](https://vuepress.vuejs.org/zh/guide/markdown.html)  
当然我们也提供了对 `codepen` 的支持，这样可以方便我们在编写文档的时候实时引入代码运行效果，使用方法请移步[codepen 支持](./codepen.md)
:::

## 格式化和Lint

该脚本库使用`prettier`和`ESLint`实现代码的规范化，有三个命令来帮助你：

```
// 该命令将运行ESLint来帮你发现存在的问题
npm run lint

// 该命令将运行ESLint --fix来帮你修复ESLint支持修复的问题
npm run lintfix

// 该命令将运行prettier来格式化代码，（在你的编辑器不支持prettier的情况下使用）
npm run format
```

::: warning 提示
你的代码中可能存在不需要格式化或者代码规范检查的代码，这些你都可以根据具体情况配置。  
忽略不需要格式化的文件或者代码块你可以参考`prettier`的[文档](https://prettier.io/docs/en/ignore.html#range-ignore)；  
忽略`ESLint`检查你可以参考`ESLint`的[文档](https://eslint.bootcss.com/docs/user-guide/configuring/#ignoring-files-and-directories)；
:::

## 示例

**unique.js**

```js
/**
 * 数组去重。
 * @memberof  util
 * @param { Array } arr 数组
 * @returns {Array}
 * @author wb  <wbxx@163.com>
 * @example
 * const a = [1,1,2,3,3,5,6]
 * dtc.util.unique(a) //[1,2,3,5,6]
 */

function unique(arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) == -1) {
      newArr.push(arr[i])
    }
  }
  return newArr
}

export default unique
```

**index.js**
```js
import unique from './unique.js'

export default {
  unique,
  ...
}
```
