---
lang: ja-JP
title: JS階乗
---

# JavaScript階乗

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



📡  [Qiita](https://qiita.com/kensoz/items/223d40cab4b62a431626)



## 初めに

🌐 [live demo](https://codepen.io/kensoz/pen/dyeEqMv)
+ パラメータ`n` : n の階乗



## 再帰方法
### Number型
`Number型`の適用範囲は、最大 `9007199254740991` (`2^53 − 1`)、最小 `−9007199254740991` (`−(2^53 − 1)`)です。
```js
const factorial_recursion = (n) => {
	if (n <= 1) return 1;
	return n * factorial_recursion(n - 1);
};

console.log(factorial_recursion(5)); //120
```

### BigInt型
`BigInt型`の適用範囲は、`Number型`で表すことができない大きな数を表現したり操作したりするために使用します。[BigInt MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
```js
const factorial_recursion_bigInt = (n) => {
	if (n <= 1) return 1;
	return BigInt(n) * BigInt(factorial_recursion_bigInt(n - 1));
};

console.log(factorial_recursion_bigInt(5)); //120n
```


但し、再帰関数で`n`の値が大きくなると、スタックオーバーエラーになってしまうという問題があります。例えば、`factorial_recursion_bigInt(10000)`
```js
console.log(factorial_recursion_bigInt(10000)) 
// Maximum call stack size exceeded
```
`BigInt型`が活用できて、スタックオーバーエラーが回避されるため、平方の差方法で解決します。



## 平方の差方法
階乗の計算回数を減らすという観点から、階乗はいくつかの平方の差の積に変換できますため、 `n/2`の乗算するだけできて、平方の差の差は連続する奇数を知りました。
```js
const factorial_square = (n) => {
	if (n <= 1) return 1

	const middle = Math.ceil(n / 2);

	let tmp = middle * middle
	let result = n & (1 == 1) ? middle : middle * n

	for (let i = 1; i <= n - 2; i += 2) {
		tmp -= i
		result = BigInt(result) * BigInt(tmp)
	}

	return result;
};

console.log(factorial_square(5)) // 120n
console.log(factorial_square(10000)) // 28462596809170...
```
