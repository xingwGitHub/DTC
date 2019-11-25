# TypeCheck

## isArray

```js
[dtc.]util.isArray(value)
```

检查值是否归类为Array对象。

**Arguments**  
value (*): 需要检查的值

**Returns**  
(boolean): 如果`value`是数组，则返回`true`，否则返回`false`

**Example**  
```js
[dtc.]util.isArray([1, 2, 3]);
// => true
 
[dtc.]util.isArray(document.body.children);
// => false
 
[dtc.]util.isArray('abc');
// => false
 
[dtc.]util.isArray([dtc.]util.noop);
// => false
```

## isEmptyObject

```js
[dtc.]util.isEmptyObject(value)
```
检查值是否为空对象

**Arguments**  
value (*): 需要检查的值

**Returns**  
(boolean): 如果`value`是数组，则返回`true`，否则返回`false`

**Example**  
```js
[dtc.]util.isEmptyObject({});
// => true
```

## isFunction

```js
[dtc.]util.isFunction(value)
```

检查值是否归为Function

**Arguments**  
value (*): 需要检查的值

**Returns**  
(boolean): 如果`value`是function，则返回`true`，否则返回`false`

**Example**
```js
[dtc.]util.isFunction(/abc/);
// => false
```

## isNaN

```js
[dtc.]util.isNaN(value)
```

检查值是不是 `NaN`. 

:::warning NOTE
该方法与全局`isNaN`不同，`window.isNaN`对于`undefined`和其他非数字值返回`true`
:::

**Arguments**  
value (*): 需要检查的值

**Returns**
(boolean): 如果`value`是NaN，则返回`true`，否则返回`false`

**Example**
```js
[dtc.]util.isNaN(NaN);
// => true
 
[dtc.]util.isNaN(new Number(NaN));
// => true
 
isNaN(undefined);
// => true
 
[dtc.]util.isNaN(undefined);
// => false
```

## isNull

```js
[dtc.]util.isNull(value)
```

检查值是不是`null`

**Arguments**  
value (*): 需要检查的值

**Returns**
(boolean): 如果`value`是null，则返回`true`，否则返回`false`

**Example**
```js
[dtc.]util.isNull(null);
// => true
 
[dtc.]util.isNull(void 0);
// => false
```

## isNumber

```js
[dtc.]util.isNumber(value)
```

检查值是否归类为`Number`原始值或`Number`对象

:::warning NOTE
`Infinity`，`-Infinity`和`NaN`都被认为是数值
:::

**Arguments**  
value (*): 需要检查的值

**Returns**  
(boolean): 如果`value`是数值，则返回`true`，否则返回`false`

**Example**
```js
[dtc.]util.isNumber(3);
// => true
 
[dtc.]util.isNumber(Number.MIN[dtc.]utilVALUE);
// => true
 
[dtc.]util.isNumber(Infinity);
// => true
 
[dtc.]util.isNumber('3');
// => false
```

## isObject

```js
[dtc.]util.isObject(value)
```

检查value是否是Object类型。 （例如数组，函数，对象，正则表达式，new Number（0）和new String（''））

**Arguments**  
value (*): 需要检查的值

**Returns**  
(boolean): 如果`value`是Object，则返回`true`，否则返回`false`

**Example**
```js
[dtc.]util.isObject({});
// => true
 
[dtc.]util.isObject([1, 2, 3]);
// => true
 
[dtc.]util.isObject([dtc.]util.noop);
// => true
 
[dtc.]util.isObject(null);
// => false
```

## isPlainObject <Badge text="1.0.4+"/>

```js
[dtc.]util.isPlainObject(value)
```

检查value是否是真正的Object类型。也就是说value的toString方法返回的值是'[object Object]'才能通过测试

**Arguments**  
value (*): 需要检查的值

**Returns**  
(boolean): 如果`value`是PlainObject，则返回`true`，否则返回`false`

**Example**
```js
[dtc.]util.isPlainObject({});
// => true
 
[dtc.]util.isPlainObject(null);
// => false
 
[dtc.]util.isPlainObject(function() {});
// => false
```
