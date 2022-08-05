---
lang: zh-CN
title: 函数柯里化
---

# 函数柯里化

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
函数柯里化学习与总结
:::



🌐 [live demo](https://codepen.io/kensoz/pen/KKaJjpp)



## 1.柯里化

```js
// 直接传入两个函数，这就是第一个参数括号
const currying = function(m, a) {
// 传入普通参数，这是第二个参数括号
    return function(x) {
		// 返回柯里化函数的运行规则
        return m(a(x));
    };
};

const mul = x => x * 5; // 用于上面的m参数
const add = x => x + 1; // 用于上面的a参数

currying(mul, add)(2)
// 15
```



## 2.thunk

```js
// 约等于函数柯里化
const thunk = function(time, ...args){
    return function(callback){
        setTimeout(() => callback(...args), time);
    }
}

const callback = function(x, y, z){
    console.log(x, y, z);
}

// thunk用法
const delayAsyncThunk = thunk(1000, 1, 2, 3);
delayAsyncThunk(callback);
// 1 2 3

// 柯里化用法
const delayAsyncThunk = thunk(1000, 1, 2, 3)(callback);
// 1 2 3
```


