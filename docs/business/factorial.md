---
lang: ja-JP
title: JS階乗
---

# JavaScript階乗

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



📡  [Qiita](https://qiita.com/kensoz/items/223d40cab4b62a431626)



## コード

🌐 [live demo](https://codepen.io/kensoz/pen/dyeEqMv)



- パラメータ`n` : n の階乗
- BigInt : `Number`で表すことができない大きな数を表現したり操作したりするために使用します



```js
// bigInt
const factorial_recursion_bigInt = (n) => {
	if (n <= 1) return 1;
	return BigInt(n) * BigInt(factorial_recursion_bigInt(n - 1));
};

console.log(factorial_recursion_bigInt(5)); //120n

// common
const factorial_recursion = (n) => {
	if (n <= 1) return 1;
	return n * factorial_recursion(n - 1);
};

console.log(factorial_recursion(5)); //120
```

