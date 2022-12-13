---
lang: ja-JP
title: アルゴリズムまとめ
---

# アルゴリズムまとめ

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



## JavaScript素数判定

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

