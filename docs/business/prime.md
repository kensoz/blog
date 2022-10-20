---
lang: ja-JP
title: JS素数判定
---

# JavaScript素数判定

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



## コード

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

