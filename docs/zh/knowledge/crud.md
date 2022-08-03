---
lang: zh-CN
title: JS增删改查
---

# JS增删改查整理

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
常用的Javascript，Typescript增删改查方法
:::



## 1.JSON增删改查篇

##### 0.示例JSON数据（常规型）

```js
const sampleJson = [
  {
    id: 1,
    date: "2021-06-01",
  },
  {
    id: 2,
    date: "2021-06-02",
  },
  {
    id: 3,
    date: "2021-05-31",
  },
  {
    id: 4,
    date: "2021-05-30",
  },
  {
    id: 5,
    date: "2021-05-29",
  },
];
```

##### 1.1增加

```javascript
sampleJson.push({ id: 6, date: "2021-05-28" });

// 验证
console.log(sampleJson);
// [{"id":1,"date":"2021-06-01"},{"id":2,"date":"2021-06-02"},{"id":3,"date":"2021-05-31"},
//  {"id":4,"date":"2021-05-30"},{"id":5,"date":"2021-05-29"},{"id":6,"date":"2021-05-28"}]
```

##### 1.2删除

```js
// 思路就是删除一个对象，肯定是要知道删除的是谁，要么是属性要么是值，就以这个东西为基准，获取它的下标
// 假设删除id为4的对象，先获取下标
let i = sampleJson.findIndex((value) => value.id == 4);

// 获取下标为3
console.log(i);

// 删除下标对象（参数1为删除谁，参数2为删几个）
// 先判断这个东西在不在，如果存在则将其删除，i > -1 代表存在 json基本就是用这个方法来删除
i > -1 && sampleJson.splice(i, 1);

// 验证
console.log(sampleJson);
// [{"id":1,"date":"2021-06-01"},{"id":2,"date":"2021-06-02"},{"id":5,"date":"2021-05-29"}]

// 另一种思路
// 用findIndex查找指定对象中的指定元素的下标，在用splice
sampleJson.splice(
  sampleJson.findIndex((i) => i.id === 1),
  1
);
```

##### 1.3修改

```js
// 先获取要修改的东西
// 注意filter是浅拷贝
let obj = sampleJson.filter((p) => {
  return p.id === 5;
});

//filter返回一个数组. 修改id
obj[0].id = 7;

// 验证
console.log(sampleJson);
// [{"id":1,"date":"2021-06-01"},{"id":2,"date":"2021-06-02"},{"id":3,"date":"2021-05-31"}, {"id":4,"date":"2021-05-30"},{"id":7,"date":"2021-05-29"}]
```

##### 1.4查询（筛选）

```js
let getObj = sampleJson.filter((p) => {
  return p.id === 1;
});

// 验证
console.log(getObj);
// [{"id":1,"date":"2021-06-01"}]
```



## 2.数组增删改查&其他操作篇

##### 2.1增加

```js
// 将参数添加到原数组末尾，并返回数组的长度(b)
let a = [1, 2, 3, 4, 5];
let b = a.push(6, 7);

// 验证
// --> a：[1,2,3,4,5,6,7]    b：7

// 将参数添加到原数组开头，并返回数组的长度(b)
let a = [1, 2, 3, 4, 5];
let b = a.unshift(0);

// 验证
// --> a：[0,1,2,3,4,5]    b：6

// 多个参数（起始位置、删除长度、插入的元素1、元素2...）
// 比较灵活的增减改方法，要注意参数（下面不在举例）
const arr = [1, 2, 3, 4, 5, 6];
arr.splice(1, 2, 9, 10, 15, 17);

// 验证
// --> [1, 9, 10, 15, 17, 4, 5, 6]
```

##### 2.2删除

```js
// 删除掉数组中的元素后，会把该下标出的值置为null,数组的长度不会改变
const arr = [1, 2, 3, 4, 5, 6];
delete arr[1];

// 验证
// --> [1,null,3,4,5,6]

// 删除数组的的第一项，返回的是删除的那一项，原有数组改变
let a = [1, 2, 3, 4, 5, 6];
let b = a.shift();

// 验证
// --> a：[2,3,4,5,6]    b：1

// 删除数组的最后一项，返回的是删除的那一项，原有数组改变
let a = [1, 2, 3, 4, 5, 6];
let b = a.pop();

// 验证
// --> a：[1,2,3,4,5]    b：1
```

##### 2.3修改

```js
// splice方式    三个参数（起始位置、修改长度、新元素）
const arr = [1, 2, 3, 4, 5, 6];
arr.splice(1, 2, 9);

// 验证
// --> [1,9,4,5,6] 这里替换了下标1也就是2，把2换成了9
```

##### 2.4查询（筛选）

```js
// indexOf 函数   arr.indexOf(find,start);  
// find:要找的内容  start:查找开始下标，可选参数并函数返回值：查找数据所在的下标，如果没找到，返回-1
const arr = [1, 2, 3, 4, 5, 6];
const a1 = arr.indexOf(3, 1);
const a2 = arr.indexOf(3, 5);

// 验证
// --> a：2    b：-1
```

##### 2.5复制和截取

```js
// slice()，用于截取数组的某一部分返回被截取的那部分数组。不会改变原数组。可以对字符串使用。
// 写法：slice(从哪里开始接错,到哪里结束)可以是负数如-1就是末尾开始，如果第二个参数不填就是截取到末尾超过数组的长度也是到末尾结束。
// 例子：从1到第五位
let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 5));
// 验证
// --> [2, 3, 4, 5]

// 返回一个新数组，是将参数添加到原数组中构成的
let a = [1, 2, 3, 4, 5];
let b = a.concat(6, 7);

// 验证
// --> a：[1,2,3,4,5] b：[1,2,3,4,5,6,7]
```

##### 2.6循环遍历

###### for

```js
// for循环加强版
const arr = [1, 2, 3, 4, 5, 6];
for (let j = 0, len = arr.length; j < len; j++) {
  console.log(j);
}

// 验证
// --> 1, 2, 3, 4, 5, 6
```

######  for...of

```js
// for...of循环
const arr = [1, 2, 3, 4, 5, 6];
for (let value of arr) {
  console.log(value);
}

// 验证
// --> 1, 2, 3, 4, 5, 6
```

###### for...in

```js
// for...in循环(不推荐)
const arr = [1, 2, 3, 4, 5, 6];
for (j in arr) {
  console.log(j);
}

// 验证
// --> 1, 2, 3, 4, 5, 6
```

###### map

```js
// map循环
const arr = [1, 2, 3, 4, 5, 6];
arr.map(function (n) {
  console.log(n);
});

// 验证
// --> 1, 2, 3, 4, 5, 6
```

##### 2.7其他方法

###### reverse()

```js
// 把数组倒过来排序，原有数组改变
let a = [1, 2, 3, 4, 5];
let b = a.reverse();

// 验证
// --> a：[5,4,3,2,1] b：[5,4,3,2,1]
```

###### sort()

```js
// sort(orderfunction)：按指定的参数对数组进行排序
let a = [1, 2, 3, 4, 5];
let b = a.sort();

// 验证
// --> a：[1,2,3,4,5] b：[1,2,3,4,5]
```

###### join()

```js
// join("+")把数组的每一项拿出来用指定分隔符隔开,并转换为字符串
let a = [1, 2, 3, 4, 5];
let b = a.join("|");

// 验证
// --> a：[1,2,3,4,5]  b: 1|2|3|4|5
```

###### find()

```js
// find() 方法返回通过测试（函数内判断）的数组的第一个元素的值，必须配合函数使用
let test = [1, 2, 3, 4, 5];
let a = test.find((item) => item > 3);

// 验证
// --> 4
```

###### findIndex()

```js
// 与find() 方法一致，只不过是返回下标
let test = [1, 2, 3, 4, 5];
let a = test.findIndex((item) => item > 3);

// 验证
// --> 3
```

##### 2.8数组去重set方法

```js
let arr = [1,1,'true','true']
function unique (arr) {
  return Array.from(new Set(arr))
}

console.log(unique(arr))　
// 验证
// -- > [1,"true"]
```



## 3.对象增删改查篇

##### 0.示例对象

```js
let obj = {
  name: "zhangsan",
  age: 13,
};
```

##### 3.1增加

```js
obj.sex = "男";

console.log(obj.sex);
// 验证
// --> 男
```

##### 3.2删除

```js
delete obj.sex; // 删除属性
obj = {}; // 清空对象
```

##### 3.3修改

```js
obj["name"] = "haha";

console.log(obj["name"]);
// 验证
// --> haha
```

##### 3.4查询属性

```js
console.log(obj.name);
// --> zhangsan
console.log(obj["age"]);
// --> 13
```

##### 3.5循环遍历

```js
// 遍历对象，分别遍历出key和value
for (let key in obj) {
  console.log(key);
  // --> name. age
  console.log(obj[key]);
  // --> zhangsan, 13
}
```



## 4.map增删改查 + 遍历

```js
let map = new Map();

//添加集合
map.set("key", "val");
map.set("id", "1");
map.set("name", "liu");
map.set("age", "22");

//删除集合
map.delete("key");

//修改集合
map.set("age", "27");

//循环遍历集合（查看）
let url = "";
for (let i of map) {
  url = url + "<li> key是" + i[0] + " , val是" + i[1] + "</li>";
}


console.log(url);
// 验证
// key是id , val是1
// key是name , val是liu
// key是age , val是27
```



## 5.多维JSON数组

##### 0.示例数据

```js
// 示例数组
const arr = ["1", "2", "3", "4"];

// 示例json数据（对象内有命名的对象，命名对象为数组）
const json = {
  1: [
    {
      id: "1-1",
      name: "可以",
    },
    {
      id: "1-2",
      name: "还可以",
    },
  ],
  2: [
    {
      id: "2-1",
      name: "行",
    },
  ],
};
```

##### 5.1取得内部属性名

```js
// 注意，这个解构不是iterable，所以无法使用for of遍历器
// 使用for in for in专门为了对象设计的
for (let value in json) {
  console.log(value); // --> 1,2
}

```

##### 5.2取得内部属性的值

```js
for (let value in json) {
  console.log(json[value]); // -->[{"id": "2-1","name": "行"},]
}
```

##### 5.3把属性去掉，让他成为一个整体的数组

```js
let a = [];
for (let value in json) {
  a.push(...json[value]);
}
```

##### 5.4根据数组，来取得json中的指定元素

```js
let a = [];
for (let value of arr) {
  if (json[value]) {
    //先判断它有没有
    a.push(...json[value]);
  }
}
console.log(a); // -->所有包含1，2的json，变成一个数组
```

