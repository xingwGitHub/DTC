# Common

## Browser

```js
new [dtc.]util.Browser()
```

浏览器及系统嗅探

**Arguments**  
null

**Returns**
(object): 实例对象

**Example**
```js
let browser = new [dtc.]util.Browser()
// browser.browser: "Chrome"
// browser.device: "PC"
// browser.engine: "Blink"
// browser.language: "zh_CN"
// browser.os: "Mac OS"
// browser.osVersion: "10.14.2"
// browser.version: "71.0.3578.98"

// 判断浏览器版本
// 支持浏览器大版本的判别
browser.isVersion('gt70')
// true
browser.isVersion('lt70')
// false
browser.isVersion('eq70')
// false
browser.isVersion('>70')
// true
browser.isVersion('<70')
// false
browser.isVersion('=70')
// false
```


## urlArgs

```js
[dtc.]util.urlArgs()
```

取得URL的search信息转为对象形式

**Arguments**  
null

**Returns**  
(object): 返回url里的查询参数，如果没有则返回`{}`

**Example**
```js
let url = `http://example.com/index.html?a=12&b=13`

[dtc.]util.urlArgs()
// {a:12,b:13}
```

## moment

```js
[dtc.]util.moment() //默认为当前时间
[dtc.]util.moment('1991/09/01')
```

格式化日期为特定格式

**Arguments**

任何可通过 new Date() 转换的日期格式 或者 null


**方法**

`format()`

```js
[dtc.]util.moment('1991/09/01 13:09:07').format()
```

**format方法参数**

字符串，你希望的目标日期格式

##### 年份、月份、日期相关
Input|Example|Description
:--:|:--:|:--:
yyyy|1991|四位数字年份
yy|91|两位数字年份
M|9|一位位数字月份
MM|09|两位数字，缺位补零
MMM|9月|阿拉伯数字月份+'月'
MMMM|九月|中文月份+'月'
d|1|一位数字日期
dd|01|两位数字日期
##### 星期相关
Input|Example|Description
:--:|:--:|:--:
w|5|-
ww|五|-
www|周五|-
wwww|星期五|-
##### 小时、分钟、秒相关
Input|Example|Description
:--:|:--:|:--:
H|13|二十四小时格式-小时
HH|13|同上，两位数字缺位补零
h|1|十二小时格式-小时
hh|01|同上，两位数字缺位补零
a|pm|am/pm
A|PM|AM/PM
m|9|一位数字-分钟
mm|09|两位数字缺位补零
s|7|一位数字-秒
ss|07|两位数字缺位补零
SSS|000|毫秒
Z|+08:00|时区

#### **Returns**
(string): 返回格式化后的日期字符串

#### **Example**
```js
[dtc.]util.moment('1911.9.1').format()
// 1911-09-01T00:00:00+08:00
[dtc.]util.moment('1911.9.1').format('yyyy-MM-dd www')
// 1911-09-01 周五
[dtc.]util.moment('1911.9.1').format('MMMM yyyy, h:mm:ss a')
// 九月 1911, 12:00:00 am
[dtc.]util.moment('1911.9.1').format('yyyy[年]MMMd[日] www'')
// 1911年9月1日 周五
```
