# String

## excerpt

```js
[dtc.]util.excerpt(value, length)
```

根据给定的长度截取文本，如果文本被截取，那么它的后面会自动带上省略号

**Arguments**  
value (string): 需要处理的值  
length (number): 长度，确定从字符串的什么位置开始截取

**Returns**
(boolean): 截取后的字符串

**Example**
```js
var str = `如果字数超过5个就截取`

[dtc.]util.excerpt(str, 5);
// => 如果字数超...
```

## trim

```js
[dtc.]util.trim(value[, place])
```

从字符串中删除前部和尾部空格或单独删除一部分空格

**Arguments**  
value (string): 需要处理的字符串  
[place] (string): 要删除的空格所在字符串的位置,可选值为"left","right",默认是"all"

**Returns**
(boolean): 删除空格后的字符串

**Example**
```js
var str = `   hello   `

[dtc.]util.trim(str);
// => `hello`

[dtc.]util.trim(str, 'left');
// => `hello   `

[dtc.]util.trim(str, 'right');
// => `   hello`
```

## uId

```js
[dtc.]util.uId([length])
```

生成一个可读的id，尽最大可能的保证ID的唯一性

**Arguments**  
length (number): id长度，默认为6

**Returns**
(string): 生成的id

**Example**
```js
[dtc.]util.uId();
// => wOWLXk

[dtc.]util.uId(8);
// => sjwuDjze
```

:::warning NOTE
该方法在前端生成ID，并不能保证ID的唯一性，你必须在服务器端验证ID的唯一性。
:::

## toRawType <Badge text="1.0.4+"/>

```js
[dtc.]util.toRawType(any)
```

检测传入的数据的类型，并返回`buildin tag`主要包括：  
`Array` `String` `Arguments` `Function` `Error` `Boolean` `Number` `Date` `RegExp` `Object`等，数据类型的完整列表可以访问[ECMAScript定义](http://www.ecma-international.org/ecma-262/9.0/index.html#sec-object.prototype.tostring)

**Arguments**  
params(any): 需要判断的数据

**Returns**  
(string): `buildin tag`

**Example**
```js
[dtc.]util.toRawType([]);
// => Array

[dtc.]util.toRawType(8);
// => Number
```

## rgbToHex <Badge text="1.0.4+"/>

```js
[dtc.]util.rgbToHex(string, [Boolean] = true)
```
rgb颜色值转换位十六进制，可以通过传入第二个参数来控制是否在结果中显示alpha通道，默认是`true`。转换失败则返回`null`。
支持的格式：  
```css
rgba(128,128,128,0.5)
rgb(128,128,128)
255,255,0, 0.2
20, 30, 40
```

**Arguments**  
params(string): rgb/rgba值，需要是约定的格式，其它格式会转换失败

**Returns**  
(string): 十六进制表示的颜色值

**Example**
```js
[dtc.]util.rgbToHex('rgba(20,50,255,0.8)');
// => #1432ffcc

[dtc.]util.rgbToHex('rgba(20,50,255,0.8)', false);
// => #1432ff
```

## hexToRgb <Badge text="1.0.4+"/>

```js
[dtc.]util.hexToRgb(string)
```

十六进制表示的颜色值转换位rgb的数值。转换失败则返回`null`。

支持的格式为：  
```css
#654722
#fff
773743
fff
```

**Arguments**  
params(string): 十六进制表示的颜色值

**Returns**  
(string): 以RGB格式表示的颜色值

**Example**
```js
[dtc.]util.hexToRgb('#141e28');
// => 20,30,40

[dtc.]util.hexToRgb('#14');
// => null
```