# Visualization

## Map3D

Map3D作为 vis 组件的一部分，它依赖于 [Three.js](https://threejs.org) 。

### 基础地图

世界地图，在 codepen 上查看源码：
<code-pen penSrc='//codepen.io/wuyax/embed/gEMxzY/' penHeight='350'/>


## BackToTop <Badge text="1.0.4+"/>

```js
new [dtc.]vis.BackToTop([threshold, ele, property])
```

回到顶部按钮，该组件默认提供一种按钮风格，用户也可以通过传入自定义的DOM对象或者元素选择器。


**Arguments**  
param {number} [threshold=300] 出现滚动条的阈值 px
param {*} ele dom元素或者选择器
param {object} [property={}] 元素自定义属性 

**Returns**  
(object): 实例对象  
实例方法`getDom`，通过该方法可以获取回到顶部按钮的 DOM 对象。用户可以根据具体需求修改 DOM 对象；  
实例方法`dispose`，通过该方法移除**回到顶部**按钮。

**Example**
```js
let btt = new [dtc.]vis.BackToTop(300, '')
let bttDom = btt.getDom()
(bttDom instanceof HTMLElement) // true
```
