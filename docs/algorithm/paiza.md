---
lang: ja-JP
title: Paiza
---

# Paiza

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
メモとして自分の回答を整理します。  
Paizaの回答と違っている回答はあります、ここは最適解です。  
数字順番ではありません。  

中文说明：算法题转职网站Paiza的答案，基本复制就可以用。
:::



## Cランク

### C013:嫌いな数字 

```js
let lai = lines[1];
let arr = [];

for (let i = 1; i <= lai; i++) {
  if (lines[i + 1].indexOf(lines[0]) < 0) arr.push(lines[i + 1]);
}

arr.length > 0 ? console.log(arr.join("\n")) : console.log("none");
```

### C016:Leet文字列 

```js
const arr = lines[0].split("");
const obj = {
  A: "4",
  E: "3",
  G: "6",
  I: "1",
  O: "0",
  S: "5",
  Z: "2",
};

arr.forEach((e, index, arr) => {
  arr[index] = obj[arr[index]] ? obj[arr[index]] : arr[index];
});

console.log(arr.join(""));
```

### C030:白にするか黒にするか

```js
let arr = [];
let lai = lines[0].split(" ")[0];

for (let i = 0; i < lai; i++) {
  let roopArr = lines[i + 1].split(" ");
  for (let j in roopArr) {
    roopArr[j] = roopArr[j];
  }
  arr[i] = roopArr;
}

for (let e in arr) {
  for (let c in arr[e]) {
    arr[e][c] >= 128 ? (arr[e][c] = 1) : (arr[e][c] = 0);
  }
}

for (let a in arr) {
  console.log(arr[a].join(" "));
}
```



## Dランク

### D053:トリック・オア・トリート

```javascript
 lines[0] == "candy" || lines[0] === "chocolate" ? console.log("Thanks!") : console.log("No!");
```

### D041:本棚選び

```js
const lai = lines[0].split(" ")
const res = lai[2] * lai[1] > lai[0] ? 'OK' : 'NG'
console.log(res);
```

### D054:11/11

```js
 const lai = lines[0];
 console.log(lai.length >= 11 ? "OK" : 11 - lai.length);
```

### D002:数の比較

```js
const a = (a, b) => {
  a != b ? console.log(Math.max(a, b)) : console.log("eq");
};

const arr = lines[0].split(" ");
a(parseInt(arr[0]), parseInt(arr[1]));
```

### D049:◯◯の秋

```js
console.log(lines[0].replace(/noaki$/,''))
```

### D037:花粉症でつらい

```js
const a = lines[0];
const b = lines[1];
console.log(Math.ceil(b/a));
```

### **D043**:天気の表示 

```js
const lai = lines[0];

lai >= 71
  ? console.log("rainy")
  : lai >= 31
  ? console.log("cloudy")
  : console.log("sunny");
```

### **D042**:行列

```js
const lai = lines.map((x) => {
  return x.split(" ")
});

console.log(lai[0][0] * lai[1][1] - lai[0][1] * lai[1][0]);
```

### **D039**:正三角形かどうか

```js
let flg = true;
for (let i = 1; i <= 2; i++) {
  if (lines[i] !== lines[i - 1]) flg = false;
}
console.log(flg ? "YES" : "NO");
```

### D048:台風の間隔 

```js
for (let i = 0; i <= lines.length - 2; i++) {
  console.log(lines[i + 1] - lines[i]);
}
```

### D047:メダリストの表示 

```js
const arr = ["Gold", "Silver", "Bronze"];
for (let i in arr) {
  console.log(arr[i] + " " + lines[i]);
}
```

### D220:【騎士と魔女コラボ問題】従業員の数

```js
console.log(Number(lines[0]) + Number(lines[1]));
```

### D219:犬猿の仲

```js
console.log(lines[0] === 'saru' ? 'No' : 'Yes');
```

### D162:【推しプロコラボ問題】お米の重さ

```js
console.log(lines[0]*150);
```

