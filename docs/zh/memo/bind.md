---
lang: zh-CN
title: bind,apply,call整理
---

# bind,apply,call

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
bind，apply，call整理与学习
:::



🌐 [live demo](https://codepen.io/kensoz/pen/gOxjXqa)



## 0.简述

只有在构造函数中的this才是局部作用域的，如果随便定义一个函数又在全局调用，其内部this指向windows  
因为this不固定，js提供了call、apply、bind这三个方法，来切换 or 固定this的指向



## 1.call：切换this指向

```js
// 原方法f用call传入一个对象obj
// 传入的这个东西就是被指定的作用域，this就指向了obj，如果啥都不指定就指向顶层windows对象

var n = 2 // 顶层（用var）
let obj = { n:1 } //被指定的作用域
let f = function () {
  return this.n;
};

f.call(obj) // this被切换了
// f() === 1
```



## 2.apply:切换this指向

```js
// 和call一样,只有参数不同，参数是数组
function f2(x, y){
  console.log(x + y);
}
f2.call(null, 1, 1) // 2
f2.apply(null, [1, 1]) // 2

var a = [10, 2, 4, 15, 9];
Math.max.apply(null, a) 
// 15
```



## 3.bind:绑定想要的，想改的this

```js
// a赋值给你的时候，this作为容器被赋值，赋值过来指向就是你的，但是你想要a的指向，所以需要把a的指向给绑定过来
let counter = {
  count: 0,
  inc: function () {
    this.count++;
  }
};
let tmp = { count: 100 };

let f3 = counter.inc 
f3() 
// 不绑定，tmp.count就是0，counter没有被调用

let f4 = counter.inc.bind(counter)
f4() 
// 绑定了，tmp.count就是1，counter被调用一次

let f5 = counter.inc.bind(tmp)
f5() 
// 绑定了谁，this就是指向谁，方法的作用域就在哪，tmp.count就是1，counter被调用一次，但是用在了tmp身上
```

