# 文档编写规范

为了方便使用者快速明白方法的用途，一个准确的文档是必不可少的，因此我们对文档的编写做了限制。

## 示例

::: tip 文档示例

chunk

```js
[dtc.]util.chunk(array, [size=1])
```
Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

**Arguments**  
  `array (Array)`: The array to process.  
  `[size=1] (number)`: The length of each chunk

**Returns**  
  `(Array)`: Returns the new array of chunks.

**Example**

```js
[dtc.]util.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
[dtc.]util.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```
:::

## 文档格式

一分合格的文档至少包含6个部分

1. 方法名
2. 方法调用方式
3. 方法的功能描述
4. 参数说明
5. 返回值说明
6. 示例代码

如果是一个展示样式相关的方法，那么你可能需要引入一个`codepen`的示例效果，更多在文档中引入`codepen`的方法请访问[Codepen支持](./codepen.md)。

## 版本

我们会定期更新脚本库的版本，更新规则按照npm关于版本号的[建议](https://docs.npmjs.com/about-semantic-versioning)来确定脚本库的版本。因此请确保你提交的方法有明确的版本标志。

**例如：**  
已经发布的版本是`1.0.3`，那么新添加的功能或方法会在下一个版本中发布，写文档的时候要明确的表明在`1.0.4+`可用，你可以通过以下的方式来实现。

使用 **Badge** 组件。

::: tip 组件使用示例

### Badge <Badge text="beta" type="warn"/> <Badge text="1.0.4+"/>

- Props:

    - `text` - string
    - `type` - string, 可选值： `"tip"|"warn"|"error"`，默认值是： `"tip"`
    - `vertical` - string, 可选值： `"top"|"middle"`，默认值是： `"top"`
- Usage:

  你可以在标题中，使用这个组件来为某些 API 添加一些状态：

```md
### Badge <Badge text="beta" type="warn"/> <Badge text="1.0.4+"/>
```
:::