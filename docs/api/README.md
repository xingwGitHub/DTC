# Array

:::warning NOTE
在本文档的所有使用文档中，使用示例都是以以下的形式出现：  
`[dtc.]util.arrayConcat(array1[,array2])`  
**[dtc.]** 表示 `dtc`命名空间是可选的，当你使用按需引入的方式的时候，没有顶层的`dtc`命名空间，当你完全引入的时候则需要通过`dtc`来访问具体的方法。
:::

## arrayConcat

```js
[dtc.]util.arrayConcat(array1[,array2])
```
传入多个数组，返回一个合并以后的数组

**Arguments**  
  `array1 (Array)`: 需要合并的数组们 

**Returns**  
  `(Array)`: 一个合并以后的新数组

**Example**

```js
[dtc.]util.arrayConcat(['a', 'b', 'c', 'd'], [1, 2, 3]);
// => ['a', 'b', 'c', 'd', 1, 2, 3]
```

## arrShuffle

```js
[dtc.]util.arrShuffle(array)
```
打乱传入的原始数组的顺序，并返回一个新的数组

**Arguments**  
 `array (Array)`: 需要打乱顺序的数组

**Returns**  
`(Array)`: 打乱顺序以后的新数组

**Example**

```js
[dtc.]util.arrShuffle([0, 1, false, 2, '', 3]);
// => [0, false, 1, 3, 2, '']
```

## max

```js
[dtc.]util.max(array)
```
计算数组的最大值，如果数组是空或者`falsey`那么返回`undefined`

**Arguments**  
array (Array): 需要遍历的数组

**Returns**  
(*): 返回最大值

**Example**  
```js
[dtc.]util.max([4, 2, 8, 6]);
// => 8
 
[dtc.]util.max([]);
// => undefined
```

## min

```js
[dtc.]util.min(array)
```
计算数组的最小值，如果数组是空或者`falsey`那么返回`undefined`

**Arguments**  
array (Array): 需要遍历的数组

**Returns**  
(*): 返回最小值

**Example**

```js
[dtc.]util.min([4, 2, 8, 6]);
// => 2
 
[dtc.]util.min([]);
// => undefined
```

## unique

```js
[dtc.]util.unique(array)
```
去除数组中重复的项目

**Arguments**  
array (Array): 需要遍历的数组

**Returns**  
(*): 返回一个没有重复数据的新数组

**Example**

```js
[dtc.]util.unique([4, 2, 8, 6, 4]);
// => [4, 2, 8, 6]
```