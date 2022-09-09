---
lang: ja-JP
title: Paiza
---

# Paiza

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
メモとして自分の回答を整理します。  
Paizaの回答と違っている回答はあります、ここは最適解です。  
数字順も公式順でもはありません。  

中文说明：算法题转职网站Paiza的答案，基本复制就可以用。
:::



## メモ

- `console.log(解答)`、入力の処理が必要
- 改行：`"\n"`，
- 文字列転換：

  ```js
  const str = "2 3"
  console.log(str.split(" ")) // ["2","3"]
  console.log(str.split(" ").join("")) // "23"
  ```



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

### D166:何日後になるか

```js
console.log(lines[0] * 7);
```

### D192:感嘆符の付与

```js
console.log(lines[0]+ "!");
```

### D032:充電時間

```js
console.log(100 - lines[0]);
```

### D151:お菓子のプレゼント

```js
  if(lines[0] === "chocolate"){
      console.log(Number(lines[1]) * 2);
  }else{
      console.log(Number(lines[1]) * 5);
  }
```

### D062:ひな祭り

```js
  　const arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const lai = lines[0].split(" ");
    const one = arr.splice(0,lai[0]).join("");
    const two = arr.splice(0,lai[1]).join("");
    console.log(one + "\n" + two + "\n" + arr.join(""));
```

### D194:カロリーの計算

```js
 console.log(lines[0]*540);
```

### D174:栄養の摂取

```js
console.log(lines[0] * 1500);
```

### D210:年間の料金

```js
console.log(lines[0]*12);
```

### D200:【銀の弾丸コラボ問題】電気代の計算

```js
console.log(lines[0]*25*24);
```

### D012:絶対値を求めよ

```js
console.log(Math.abs(lines[0]));
```

### D031:分から秒へ

```js
console.log(lines[0]*60);
```

### D110:3つの数字

```js
const arr = lines[0].split(" ")
console.log(arr[0]*arr[1]*arr[2]);
```

### D038:試合の回数

```js
console.log(lines[0]*(lines[0]-1)/2);
```

### D008:奇数か偶数か

```js
console.log(lines[0]%2 === 0 ? "even" : "odd");
```

### D095:ジュースの分配

```js
console.log(parseInt(lines[0]/lines[1]))
```

### D109:ゾロ目の日付

```js
const arr = lines[0].split(" ").join("")
let tmp = arr[0]

for(let i = 1; i < arr.length; i++){
  if(arr[i] === tmp){
    tmp = arr[i]
  }else{
    tmp = 'No'
    console.log(tmp)
    break
  }
}

tmp !== "No" && console.log('Yes')
```

### D120:鉛筆の数

```js
console.log(lines[0]*12);
```

### D172:イヴの日付

```js
console.log(lines[0] - 1);
```

### D190:センチをミリに

```js
console.log(lines[0]*10);
```

### D164:区切りの良い日

```js
let res = "";
for (let i = 1; i <= 8; i++) {
  if (Math.pow(2, i) === Number(lines[0])) {
    console.log("OK");
    res = "";
    break;
  } else {
    res = "NG";
  }
}

res !== "" && console.log(res);
```

### D160:N合目の高さ

```js
console.log(lines[0]/10 * lines[1]);
```

### D217:キャラクターの名前

```js
console.log(lines[0].length);
```

### D218:【813の日2022】買い物

```js
console.log(lines[0] >= 1000 ? 'Yes' : 'No');
```

### D215:金庫のパスワード

```js
console.log(lines[0] === 'paiza' ? 'Yes' : 'No');
```

### D065:エラーコードの分類

```js
const lai = String(lines[0]);
if (lai[0] === "2") {
  console.log("ok");
} else if (lai[0] === "4") {
  console.log("error");
} else {
  console.log("unknown");
}
```

