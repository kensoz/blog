---
lang: zh-CN
title: JS常用异步整理
---

# JS常用异步整理

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
常用JavaScript异步总结整理。包括Async，Await，Promise等。
:::



## Promise

🌐 [live demo](https://codepen.io/kensoz/pen/QWgMMJN)

```js
// 1.new写法
// 其中两个参数是固定的，一个是成功resolve 一个是失败reject
// 也可以定义空的如let p = Promise.resolve();
// 这两个参数的用途不是参与到处理而是把结果返回出去，没错最后运行的结果要填在这两个函数中
// 如下，resolve把计算结果a返回了出去，这里可以省略reject,但是出错的话会在下面走catch

let promise = new Promise(function (resolve, reject) {	
  let a = "a" // 你要做的处理就写在这，axios什么的
  resolve(a);  // 成功结果放到resolve里，这就是函数的返回值
  reject("完了") // 失败结果放到reject里，这就是函数的返回值
});

console.log(1) 
// 因为是异步函数，所以事件流中的其他函数会先执行

// 下面是使用promise函数，通过then方法来接收成功的返回值，通过catch方法来接收失败的返回值
// catch可以省略。finally函数是无论什么结果都会执行
promise.then( value => 
  console.log("ok:" + value)
).catch( error => 
	console.log("no:" +error)
).finally(() => console.log("finally"));

console.log(2) 
// 因为是异步函数，所以事件流中的其他函数会先执行

// 执行的顺序
// 1
// 2
// "ok:a"
// "finally"

// 2.函数写法，promise函数作为匿名函数用箭头函数的形式来写
function timeout(ms) {
  return new Promise((resolve, reject) => {
	// 这里的定时器，第一个参数为resolve函数，第二个为时间，第三个为传入resolve的参数或值，也是返回值
    setTimeout(resolve, ms, 'done'); 
  });
}

// 调用
timeout(100).then((value) => {
  console.log(value);
});
// "done"
```



## Async&Await

🌐 [live demo](https://codepen.io/kensoz/pen/GREvONv)

```js
// async是什么意思？可以理解为声明了一个异步区域，整体的返回值是一个promise对象
// await是什么意思？async所要执行的东西

// 如果await后面的函数或值不是promise，那么他就会立即执行
function getSomething() {
  return "res"; //一个普通的函数，会立即执行
}

// 如果await后面是一个promise对象，那么他就会停止async函数的执行，等这个promise执行之后
function testAsync() {
  return Promise.resolve("hello async"); 
} 

async function test() {
    const v1 = await getSomething();
    const v2 = await testAsync();
    console.log(v1, v2);
	console.log(1); // 因为async函数内有promise对象需要执行，所以他后执行
	return v1 + v2 // 可以async函数内处理一些操作并赋值，也可以把结果return出去，注意他会变成promise对象
}

// 如果async函数有返回值，那么就用then来接收，就像promise一样处理
test().then(
res => { console.log(res); })

console.log(2); // 因为async函数内有promise对象需要执行，所以他先执行

// 执行的顺序
// 2
// "res" "hello async"
// 1
// "reshello async"
```



## Async的执行顺序

🌐 [live demo](https://codepen.io/kensoz/pen/QWqMzZP)

```js
console.log('start')
// 开始

let num = 0

const c1 = (e) => {
  num = e
  console.log('c1' + num) 
  // 执行await
}

const f1 = async () => {
  console.log('f1-1' + num) 
  // 进入内部根据顺序，先执行
  
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
// 调用前的肯定先出现

f1()

console.log(num) 
// 触发await后，async进入死区，外部函数先执行
console.log('end')

// 执行的顺序
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

