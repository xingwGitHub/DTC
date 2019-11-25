# Develop tools

## Stats

```js
let stats = new [dtc.]dev.Stats([option])
```
提供了一个简单的信息框，可帮助您监控代码性能。

**FPS** 帧在最后一秒呈现。 数字越高越好。  
**MS** 渲染帧所需的毫秒数。 数字越低越好。  
**MB** MBytes分配的内存。 （使用--enable-precise-memory-info）。  
**CUSTOM** 用户定义的面板支持。

**Arguments**  
  `[object]`配置对

  默认值：  
  `let option = {
      dragable: false,
      x: 0,
      y: 0,
      container: null
    }`
  | 参数名称 | 参数含义 | 是否必须 | 默认值 |
  |---|---|---|---|
  | `dragable` | 是否可拖拽 | 否 | `false` |
  | `container` | stats的容器 | 否 | `body` |
  | `x` | 相对于视口x轴方向位置 | 否 | `0` |
  | `y` | 相对于视口y轴方向位置 | 否 | `0` |

**Returns**  
  `object`: Stats实例对象

**实例方法**

`showPanel()`

设置显示的面板

`begin()`

开始

`end()`

结束状态监控，返回结束时间

`update()`

更新状态

`addPanel()`

新增自定义面板

**实例属性**

`REVISION`: 版本号

`dom`: dom元素


**Example**

**基础用法**

```js
let option = {
      dragable: true,
      x: 100,
      y: 100,
      container: '#app'
    }

let stats = new [dtc.]dev.Stats(option);

stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom

function animate() {

	stats.begin();

	// monitored code goes here

	stats.end();

	requestAnimationFrame( animate );

}

requestAnimationFrame( animate );
```

**自定义监控**

```js
let stats = new [dtc.]dev.Stats();
let xPanel = stats.addPanel( new [dtc.]dev.Stats.Panel( 'x', '#ff8', '#221' ) );
let yPanel = stats.addPanel( new [dtc.]dev.Stats.Panel( 'y', '#f8f', '#212' ) );
stats.showPanel( 3 );
document.body.appendChild( stats.dom );
let canvas = document.createElement( 'canvas' );
canvas.width = 512;
canvas.height = 512;
document.body.appendChild( canvas );
let context = canvas.getContext( '2d' );
context.fillStyle = 'rgba(127,0,255,0.05)';
let test = [];
function animate() {
  let time = performance.now() / 1000;
  context.clearRect( 0, 0, 512, 512 );
  stats.begin();
  for ( let i = 0; i < 2000; i ++ ) {
    let x = Math.cos( time + i * 0.01 ) * 196 + 256;
    let y = Math.sin( time + i * 0.01234 ) * 196 + 256;
    context.beginPath();
    context.arc( x, y, 10, 0, Math.PI * 2, true );
    context.fill();
  }
  stats.end();
  xPanel.update( x, 460 );
  yPanel.update( y, 460 );
  requestAnimationFrame( animate );
}
animate();
```
**示例**

<code-pen penSrc='//codepen.io/wuyax/embed/jdOGwd/?height=550&theme-id=0&default-tab=resultundefined' penHeight='560'></code-pen>

**update**

通过update方法更新监控状态

```js
var array = [];
  for ( var i = 0; i < 50; i ++ ) {
    var stats = new Stats();
    stats.dom.style.position = 'relative';
    stats.dom.style.float = 'left';
    document.body.appendChild( stats.dom );
    array.push( stats );
  }
  function animate() {
    for ( var i = 0; i < array.length; i ++ ) {
      var stats = array[ i ];
      stats.update();
    }
    requestAnimationFrame( animate );
  }
  animate();
```

**示例**

<code-pen penSrc='//codepen.io/wuyax/embed/OdJOJd/?height=340&theme-id=0&default-tab=resultundefined' penHeight='340'></code-pen>
