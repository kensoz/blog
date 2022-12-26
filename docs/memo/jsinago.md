---
lang: ja-JP
title: コーディングテスト中のJS
---

# コーディングテスト中のJS

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



## 計算

#### 1.奇偶検査

```js
console.log(2 & 1); // even 0
console.log(1 & 1); // odd 1
```

#### 2.冪乗

```js
console.log(2**3); // 8
console.log(Math.pow(2,3)); // 8
```

#### 3.平方根

```js
console.log(Math.sqrt(4)); // 2
```

#### 4.判定整数

```js
console.log(Number.isInteger(2)); // true
console.log(Number.isInteger(1.2)); // false
```

#### 5.平均値

```js
const arr = [1, 2, 3];
const ava = arr.reduce((x, y) => x + y) / arr.length;
console.log(ava); // 2
```

#### 6.累加

```js
const arr = [1, 2, 3];
const sum = arr.reduce((x, y) => x + y)
console.log(sum); // 6
```

#### 7.整数値を取る

```js
parseInt(5/2)　　// 2
```

#### 8.天井関数

```js
Math.ceil(5/2)　　// 3
```

#### 9.床関数

```js
Math.floor(5/2)　　// 2
```

#### 10.四捨五入

```js
Math.round(5/2)　　// 3
```

#### 11.剰余

```js
6%4　　// 2
```

#### 12.四捨五入&固定小数点

```js
const num =2.446242342;
num = num.toFixed(2); // 输出结果为 2.45
```

#### 13.绝对值

```js
console.log(Math.abs(-1)); // 1
```




## 文字列
#### 1.文字列→配列

```js
const arr = [..."MCMXCIV"]
console.log(arr); // ["M","C","M","X","C","I","V"]
```

#### 2.ブランク削除

```js
console.log("M CMXCI V".replace(/\s*/g,'')); // "MCMXCIV"
```

#### 3.大文字小文字

```js
const str = "sTR"
console.log(str.toUpperCase()); // "STR"
console.log(str.toLowerCase()); // "str"
```

#### 4.文字列検索

```js
console.log("MCMXCIV".indexOf("MC")); // "0
```

#### 5.スネークケース→キャメルケース

```js
const camelize = (str) => {
	const reg = /-(\w)/g;
	return str.replace(reg, (_, c) => (c ? c.toUpperCase() : ""));
};

console.log(camelize("as-d")) // "asD"
```

#### 6.キャメルケース→スネークケース

```js
const hyphenate = (str) => {
	const reg = /\B([A-Z])/g;
	return str.replace(reg, "-$1").toLowerCase();
};
console.log(hyphenate("asD")); // "as-d"
```

#### 7.文字列の最初の文字を大文字にする

```js
const big = (str) => str.charAt(0).toUpperCase() + str.slice(1)
console.log(big("asd")); // "Asd"
```

#### 8.反転

```js
const str = "lai"
console.log(str.split("").reverse().join("")) // "ial"
```



## 配列

#### 1.反転

```js
const arr = [1,2,3]
console.log(arr.reverse()) // [3,2,1]
```

#### 2.配列を結合する

```js
const arr = [1,2,3]
const arr2 = [4]
console.log([...arr, ...arr2]) // [1,2,3,4]
```

#### 3.重複排除

```js
const arr = [1,1,2,3]
const newArr = [ ... new Set(arr)]
console.log(newArr) // [1,2,3]
```

#### 4.値が1の長さnの配列を生成

```js
Array(n).fill(1)
```

#### 5.配列の値のイコール判定

```js
console.log([1,2,3,4].join() === [1,2,3,4].join()) // true
```



## 正規表現

#### 1.NGワールド

```js
const reg = /NG/
console.log(reg.test("fuck")) // false 
console.log(reg.test("NG")) // true

const lai = new RegExp(reg)
console.log(lai.test("fuck")) // false 
console.log(lai.test("NG")) // true
```

