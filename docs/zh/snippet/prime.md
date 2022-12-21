---
lang: zh-CN
title: JavaScript质数判定
---

# JavaScript质数判定

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



📡 [思否](https://segmentfault.com/a/1190000043079387)



## Code

🌐 [live demo](https://codepen.io/kensoz/pen/zYjQJOY)

```js
const isPrimeNum = (n) => {
	for (let i = 2; i < n; i++) {
		if (n % i === 0) return false;
	}
	return true;
};

console.log(isPrimeNum(2));
```

