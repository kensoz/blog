---
lang: zh-CN
title: JS階乗
---

# JavaScript階乗

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



## 代码

🌐 [live demo](https://codepen.io/kensoz/pen/dyeEqMv)

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

