---
lang: ja-JP
title: bind,apply,callの学習
---

# bind,apply,callの学習

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
thisにかかわるbind，apply，callについての学習と整理
:::



🌐 [live demo](https://codepen.io/kensoz/pen/gOxjXqa)

## 0.初めに

コンストラクター内の場合のみ、thisローカルスコープです。  
勝手に関数を定義してグローバルに呼び出すと、内部のthisはWindowsを指定します。  
Javascriptは、thisを切り替えるか修正するために、call、apply、bindの3つのメソッドを提供します



## 1.call：thisの指定を切り替え

```js
// 元のメソッドfは、callを使用してオブジェクトobjを渡す
// objというのは指定されたスコープのことで，thisはobjを指定している

var n = 2 
let obj = { n:1 } //指定されたスコープ
let f = function () {
  return this.n;
};

f.call(obj) // thisは切り替えられた
// f() === 1
```



## 2.apply:thisの指定を切り替え

```js
// callとほぼ同じで、パラメータは配列
function f2(x, y){
  console.log(x + y);
}
f2.call(null, 1, 1) // 2
f2.apply(null, [1, 1]) // 2

var a = [10, 2, 4, 15, 9];
Math.max.apply(null, a) 
// 15
```



## 3.bind:欲しいthisの値を設定

```js
// aがあなたに割り当てられると、thisは容器として割り当てられる
// 割り当てられた指定はあなたのものですが、aの指定が必要なので、aの指定をバインドすることが必要
let counter = {
  count: 0,
  inc: function () {
    this.count++;
  }
};
let tmp = { count: 100 };

let f3 = counter.inc 
f3() 
// 設定なし，tmp.countは0，counterは使っていない

let f4 = counter.inc.bind(counter)
f4() 
// 設定，tmp.countは1，counterは一回使われた

let f5 = counter.inc.bind(tmp)
f5() 
// 設定，tmp.countは1，tmpでcounterは一回使われた
```

