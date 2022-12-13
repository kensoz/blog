---
lang: ja-JP
title: 非同期整理
---

# 非同期整理

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
常用JavaScript非同期メソッドの整理。Async，Await，Promiseなど含めています
:::



## Promise

🌐 [live demo](https://codepen.io/kensoz/pen/QWgMMJN)

```js
// 1.newの書き方
// 二つのパラメータは固定で、成功の時はresolve 失敗の時はreject
// その二つのパラメータの役は結果を返す、成功か失敗の時にやりたいことはパラメータのメソッド中で書く

let promise = new Promise(function (resolve, reject) {	
  let a = "a" // やりたいことを書く、axiosリクエストなど
  resolve(a);  // 成功の時
  reject("完了") // 失敗の時（本サンプルは失敗しない設定）
});

console.log(1) 
// 非同期なので、イベントフローの他の関数は先に実行

//promiseの利用。成功の時はthenを使う、失敗の時はcatchを使う、
// catchは省略可能。finallyはどんな状況でも必ず実行
promise.then( value => 
  console.log("ok:" + value)
).catch( error => 
	console.log("no:" +error)
).finally(() => console.log("finally"));

console.log(2) 
// 非同期なので、イベントフローの他の関数は先に実行

// 実行の順番
// 1
// 2
// "ok:a"
// "finally"

// 2.関数の書き方
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done'); 
  });
}

// 利用
timeout(100).then((value) => {
  console.log(value);
});
// "done"
```



## Async&Await

🌐 [live demo](https://codepen.io/kensoz/pen/GREvONv)

- `async`はなに？非同期領域が宣言されて、全体的な戻り値が`promise`オブジェクト
- `await`はなに？`async`で実行するもの

```js
// awaitに続く関数または値がpromiseでない場合は、すぐに実行
function getSomething() {
  return "res"; 
}

// awaitの後にpromiseオブジェクトが続く場合、async関数の実行を停止し、promiseの実行を待機
function testAsync() {
    return Promise.resolve("hello async"); 
} 

// 利用
async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
	console.log(1);
	return v1 + v2
}

// promiseみたいなthenで結果を処理
test().then(
res => { console.log(res); })

console.log(2); 
// 非同期asyncがありますので、先に実行

// 実行の順番
// 2
// "res" "hello async"
// 1
// "reshello async"
```



## Async実行の順番

🌐 [live demo](https://codepen.io/kensoz/pen/QWqMzZP)

```js
console.log('start')
// start!

let num = 0

const c1 = (e) => {
  num = e
  console.log('c1' + num) 
　// awaitは実行された
}

const f1 = async () => {
  console.log('f1-1' + num) 
  // awaitを実行する前に実行
  
  await c1(1) 
  console.log(num)
  console.log('f1-2')
 
  await c1(1) 
  console.log(num)
  console.log('f1-3')
	
  num = 2	
  console.log(num)
  console.log('f1-4')
}

console.log('before async')
// asyncを実行する前に実行

f1()

console.log(num) 
console.log('end')

// 実行の順番
// "start"
// "before async"
// "f1-10"
// "c11"
// 1
// "end"
// 1
// "f1-2"
// "c11"
// 1
// "f1-3"
// 2
// "f1-4"
```

