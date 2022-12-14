---
lang: ja-JP
title: JavaScript素数判定
---

# JavaScript素数判定

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



📡  [Qiita](https://qiita.com/kensoz/items/32f97989f2fd412a3d15)



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

