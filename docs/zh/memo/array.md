---
lang: zh-CN
title: 数组整备
---

# 数组整备

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



## 一，改变原数组的操作

#### 1、shift

- 作用：将第一个元素删除
- 返回：返回删除元素，空即为`undefined`

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.shift()
console.log(a) // 返回被删除的1
console.log(arr) // [2,3,4,5,6]
```

#### 2、unshift

- 作用：向数组开头添加元素
- 返回：新数组的长度

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.unshift(0)
console.log(a)  // 返回新数组的长度7
console.log(arr)  // [0,1,2,3,4,5,6]
```

#### 3、pop

- 作用：删除最后一个
- 返回：删除的元素

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.pop()
console.log(a)  // 返回被删除的6
console.log(arr)  // [1,2,3,4,5]
```

#### 4、push

- 作用：向数组末尾添加元素
- 返回：新数组的长度

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.push(99)
console.log(a) // 返回新数组的长度7
console.log(arr) // [1,2,3,4,5,6,99]
```

#### 5、reverse

- 作用：颠倒数组顺序
- 返回：颠倒后的数组
- 注意的是，这里看上去新数组和原数组一样

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.reverse()
console.log(a)  // [6,5,4,3,2,1]
console.log(arr)  // [6,5,4,3,2,1]
```

#### 6、sort

- 用法：`sort((a,d)=>a - b)`：其中a是小的，b是大的，如果不用ab就会出现排序不准的情况
- 作用：对数组排序
- 返回：排序后的数组
- 注意的是，这里看上去新数组和原数组一样

```js
let arr = [6, 5, 4, 3, 2, 1];
let a = arr.sort()
console.log(a)        // [1,2,3,4,5,6]
console.log(arr)      // [1,2,3,4,5,6]
```

#### 7、splice

- 用法：`splice(start, length, item...)`
- `start`是起点，`length`是长度，`item...`是要替换的东西，可以是多个
- 作用：删，增，改数组元素
- 返回：被删除元素的值所组成的数组，无删除则不返回

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.splice(1, 2, 99)
console.log(a) // 被删除元素的值所组成的数组[2,3] 
console.log(arr) // 在添加的地方添加元素后的数组[1,99,4,5,6]
```

#### 8、copyWithin

- 用法：`copyWithin(target, start = 0, end = this.length)`
- target（必需）：从该位置开始替换数据。如果为负值，表示倒数。start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算。end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算。
- 作用：在当前数组内部，将指定位置的成员浅复制到其他位置（会覆盖原有成员）
- 返回：返回当前数组
- 注意的是，这里看上去新数组和原数组一样

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.copyWithin(1, 2, 3)
console.log(a)  //返回被复制的元数组 [1,3,3,4,5,6]
console.log(arr)  //原数组已经改变 [1,3,3,4,5,6]
```

#### 9、fill

- 作用：用一个元素填充原来的数组
- 还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置
- 返回：新的数组。
- 注意的是，这里看上去新数组和原数组一样

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.fill(99, 2, 4);
console.log(a) // [1,2,99,99,5,6]
console.log(arr) // [1,2,99,99,5,6]
```



## 二，不改变原数组的操作

#### 1、concat

- 作用：连接多个数组，合并数组
- 返回：新的数组

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.concat([7, 8])
console.log(a)        // 新数组 [1,2,3,4,5,6,7,8]
console.log(arr)      // [1,2,3,4,5,6] 不变
```

#### 2、join

- 作用：将数组中所有元素以参数作为分隔符放入一个字符，常用来将数组转换为字符串

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.join('-')
console.log(a)        // 字符串 "1-2-3-4-5-6"
console.log(arr)      // [1,2,3,4,5,6] 不变
```

#### 3、slice

- 用法：`slice(start,end)`
- 作用：选择数组中的一段东西
- 参数：第一个参数为起始位置（从0开始，会包括在返回的新数组之中），第二个参数为终止位置（但该位置的元素本身不包括在内）。如果省略第二个参数，则一直返回到原数组的最后一个成员。
- 返回：新数组

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.slice(1)
console.log(a)        // 新数组[2,3,4,5,6]
console.log(arr)      // [1,2,3,4,5,6] 不变
```

#### 4、reduce

- 作用：接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值
- 返回：计算（累加）的值
- 注：`reduceRight`同理
- 详见[[reduce]]

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.reduce((p, c) => p + c);
console.log(a); // 21
console.log(arr); // [1,2,3,4,5,6] 不变
```

#### 5、map

- 作用：处理数组中的每一项
- 返回：处理后的新的数组
- 注意：在一些条件下会改变原数组，比如当`arr`是引用类型（对象），则可以改变原数组
  参考：[LINK](https://juejin.cn/post/6844903817549447182)
- 会跳过空元素

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.map((i) => i + 100);
console.log(a); // [101, 102, 103, 104, 105, 106]
console.log(arr); // [1,2,3,4,5,6] 不变
```

#### 6、forEach

- 作用：遍历数组并处理数组
- 返回：`undefined`，但是如果有回调函数可能会改变原数组，一般来说是不会
- 详见[[循环整备]]

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.forEach((i) => i + 100);
console.log(a); // undefined
console.log(arr); // [1,2,3,4,5,6] 不变
```

#### 7、filter

- 作用：筛选指定项
- 返回：处理后的新的数组
- 会跳过空元素

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.filter((item) => item > 3);
console.log(a); // [4, 5, 6]
console.log(arr); // [1,2,3,4,5,6] 不变
```

#### 8、find

- 作用：找出第一个符合条件的数组成员
- 返回：返回该成员。如果没有符合条件的成员，则返回`undefined`
- 注：`findLast()`同理

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.find((item) => item > 2);
console.log(a); // 3
console.log(arr); // [1,2,3,4,5,6] 不变
```

#### 9、findIndex

- 作用：找出第一个符合条件的数组成员的数组下标
- 返回：第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回`-1`
- 注：`findLastIndex()`同理

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.findIndex((item) => item > 2);
console.log(a); // 2
console.log(arr); // [1,2,3,4,5,6] 不变
```

#### 10、JSON深拷贝

- 作用：深拷贝

```js
let arr = [1, 2, 3, 4];
const a = JSON.parse(JSON.stringify(arr))
console.log(a); // [1,2,3,4]
console.log(arr); // [1,2,3,4] 不变
```

#### 11、flat，flatMap

- 作用：拉平数组
- 返回：新数组

```js
let arr = [1, 2, [3, 4]];
let a = arr.flat()
console.log(a); // [1,2,3,4]
console.log(arr); // [1, 2, [3, 4]] 不变

let arr = [1, 2, [3, 4]];
let a = arr.flatMap((i) => i)
console.log(a); // [1,2,3,4]
console.log(arr); // [1, 2, [3, 4]] 不变
```

#### 12、every

- 作用：是所有成员的返回值都是`true`，整个`every`方法才返回`true`，否则返回`false`
- 返回：判断后的布尔值
- 迭代方法，可以被中断
- 三个参数：当前成员、当前位置和整个数组

```js
const arr = [1, 2, 3, 4, 5];
const a = arr.every((elem, index, arr) => elem >= 3);

// 数组arr并非所有成员大于等于3，所以返回false
console.log(a) // false
console.log(arr) // 原数组[1,2,3,4,5]
```

#### 13、some

- 作用：是只要一个成员的返回值是`true`，则整个`some`方法的返回值就是`true`，否则返回`false`
- 返回：判断后的布尔值
- 迭代方法，可以被中断
- 三个参数：当前成员、当前位置和整个数组

```js
const arr = [1, 2, 3, 4, 5];
const a = arr.some((elem, index, arr) =>elem >= 3);

// 数组arr有一个成员大于等于3，some方法就返回true
console.log(a) // true
console.log(arr) // 原数组[1,2,3,4,5]
```

#### 14、toString

+ 作用：把数组转换为字符串
+ 返回：结果

```js
const arr = [1, 2, 3, 4, 5];
let a = arr.toString()
console.log(a) // "1,2,3,4,5"
console.log(arr) // 原数组[1,2,3,4,5]
```

#### 15、indexOf

+ 作用：查找元素
+ 返回：给定元素在数组中第一次出现的位置，如果没有出现则返回`-1`
+ 注：`lastIndexOf()`同理

```js
const arr = [1, 2, 3, 4, 5];
let a = arr.indexOf(1)
console.log(a) // 0
console.log(arr) // 原数组[1,2,3,4,5]
```

#### 16、扩展运算符

+ 作用：展开数组

```js
let arr = [1, 2, 3, 4];
let a = [...arr];
console.log(a); // [1,2,3,4]
console.log(arr); // [1,2,3,4] 不变
```

#### 17、group

+ 作用：将数组分组
+ 返回：分组后的对象
+ 注：`groupToMap()`同理

```js
let arr = [1, 2, 3, 4, 5];
let a = arr.group((num, index, array) => (num % 2 === 0 ? 'even': 'odd'));
console.log(a); // { odd: [1, 3, 5], even: [2, 4] }
console.log(arr); // [1, 2, 3, 4, 5] 不变
```

#### 18、其他不会改变原数组的操作

- `includes()`，`at()`，`values()`，`keys()`，`entries()`，`valueOf()`
- `toReversed()`，`toSorted()`，`toSpliced()`，`with()`