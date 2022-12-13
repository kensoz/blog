---
lang: ja-JP
title: 関数カリー化学習
---

# 関数カリー化学習

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
JavaScript関数カリー化学習と整理
:::



🌐 [live demo](https://codepen.io/kensoz/pen/KKaJjpp)



## 1.カリー化

```js
// 二つの関数をパラメータとして使う，一番目のパラメータ()
const currying = function(m, a) {
// 二番目のパラメータ()
    return function(x) {
		// カリー化の実行ルールを返す
        return m(a(x));
    };
};

const mul = x => x * 5; // パラメータm
const add = x => x + 1; // パラメータa

currying(mul, add)(2)
// 15
```



## 2.thunk

```js
// カリー化に似ているもの
const thunk = function(time, ...args){
    return function(callback){
        setTimeout(() => callback(...args), time);
    }
}

const callback = function(x, y, z){
    console.log(x, y, z);
}

// thunk方法
const delayAsyncThunk = thunk(1000, 1, 2, 3);
delayAsyncThunk(callback);
// 1 2 3

// カリー化方法
const delayAsyncThunk = thunk(1000, 1, 2, 3)(callback);
// 1 2 3
```

