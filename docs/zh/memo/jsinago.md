---
lang: zh-CN
title: 算法中的JS
---

# 算法中的JS

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



## 数学与计算

#### 1.判断奇偶

```js
console.log(2 & 1); // even 0
console.log(1 & 1); // odd 1
```

#### 2.平方

```js
console.log(2**3); // 8
console.log(Math.pow(2,3)); // 8
```

#### 3.平方根

```js
console.log(Math.sqrt(4)); // 2
```

#### 4.判断整数

```js
console.log(Number.isInteger(2)); // true
console.log(Number.isInteger(1.2)); // false
```

#### 5.平均值

```js
const arr = [1, 2, 3];
const ava = arr.reduce((x, y) => x + y) / arr.length;
console.log(ava); // 2
```

#### 6.累加

```js
const arr = [1, 2, 3];
const sum = arr.reduce((x, y) => x + y)
console.log(sum); // 6
```

#### 7.取整

```js
parseInt(5/2)　　// 2
```

#### 8.向上取整/天花板值

```js
Math.ceil(5/2)　　// 3
```

#### 9.向下取整/地板值

```js
Math.floor(5/2)　　// 2
```

#### 10.四舍五入

```js
Math.round(5/2)　　// 3
```

#### 11.取余

```js
6%4　　// 2
```

#### 12.四舍五入

```js
const num =2.446242342;
num = num.toFixed(2); // 输出结果为 2.45
```

#### 13.不四舍五入

```js
Math.floor(15.7784514000 * 100) / 100 // 输出结果为 15.77
```

#### 14.绝对值

```js
console.log(Math.abs(-1)); // 1
```




## 字符串
#### 1.字符串转换为数组

```js
const arr = [..."MCMXCIV"]
console.log(arr); // ["M","C","M","X","C","I","V"]
```

#### 2.全局匹配字符串所有空格，把空的地方去掉

```js
console.log("M CMXCI V".replace(/\s*/g,'')); // "MCMXCIV"
```

#### 3.大小写转换

```js
const str = "sTR"
console.log(str.toUpperCase()); // "STR"
console.log(str.toLowerCase()); // "str"
```

#### 4.查找子串就用

```js
console.log("MCMXCIV".indexOf("MC")); // "0
```

#### 5.横线转驼峰命名

```js
const camelize = (str) => {
	const reg = /-(\w)/g;
	return str.replace(reg, (_, c) => (c ? c.toUpperCase() : ""));
};

console.log(camelize("as-d")) // "asD"
```

#### 6.驼峰命名转横线

```js
const hyphenate = (str) => {
	const reg = /\B([A-Z])/g;
	return str.replace(reg, "-$1").toLowerCase();
};
console.log(hyphenate("asD")); // "as-d"
```

#### 7.字符串首位大写

```js
const big = (str) => str.charAt(0).toUpperCase() + str.slice(1)
console.log(big("asd")); // "Asd"
```

#### 8.倒序

```js
const str = "lai"
console.log(str.split("").reverse().join("")) // "ial"
```



## 数组

#### 1.倒序

```js
const arr = [1,2,3]
console.log(arr.reverse()) // [3,2,1]
```

#### 2.合并数组

```js
const arr = [1,2,3]
const arr2 = [4]
console.log([...arr, ...arr2]) // [1,2,3,4]
```

#### 3.去重

```js
const arr = [1,1,2,3]
const newArr = [ ... new Set(arr)]
console.log(newArr) // [1,2,3]
```

#### 4.快速生成`n`个值为`1`的数组

```js
Array(n).fill(1)
```

#### 5.判断两个数组是否相等

```js
console.log([1,2,3,4].join() === [1,2,3,4].join()) // true
```



## 正则式

#### 1.NG词汇

```js
const reg = /NG/
console.log(reg.test("fuck")) // false 
console.log(reg.test("NG")) // true

const lai = new RegExp(reg)
console.log(lai.test("fuck")) // false 
console.log(lai.test("NG")) // true
```

