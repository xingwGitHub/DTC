# Storage

## cookieSet

```js
[dtc.]util.cookieSet(name, value, days)
```

设置一个 cookie

**Arguments**  
name (string): cookie 的名称
value (*): cookie 的值
days (number): cookie 的有效期

**Returns**  
(null)

**Example**

```js
[dtc.]util.cookieSet('cookieName', 'value', 2)
```

## cookieGet

```js
[dtc.]util.cookieGet(name)
```

获取一个 cookie 如果没有则返回null

**Arguments**  
name (string): cookie 的名称

**Returns**  
(*): cookie的值
(null): 没有找到对应的cookie则返回null

**Example**

```js
[dtc.]util.cookieSet('cookieName')
```

## cookieDel

```js
[dtc.]util.cookieDel(name)
```

删除一个 cookie

**Arguments**  
name (string): cookie 的名称

**Returns**  
(null)

**Example**

```js
[dtc.]util.cookieDel('cookieName')
```
