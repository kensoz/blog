---
lang: ja-JP
title: paiza
---

# Paiza

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
メモとして自分の回答（JavaScript）を整理します。数字順番ではありません。
:::



## C 回答

### C013

```js
let lai = lines[1] - 0;
let arr = [];

for (let i = 1; i <= lai; i++) {
  if (lines[i + 1].indexOf(lines[0]) < 0) arr.push(lines[i + 1]);
}

arr.length > 0 ? console.log(arr.join("\n")) : console.log("none");
```

### C016

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

### C030

```js
let arr = [];
let lai = lines[0].split(" ")[0] - 0;

for (let i = 0; i < lai; i++) {
  let roopArr = lines[i + 1].split(" ");
  for (let j in roopArr) {
    roopArr[j] = roopArr[j] - 0;
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



## D 回答

### D053

```javascript
 lines[0] == "candy" || lines[0] === "chocolate" ? console.log("Thanks!") : console.log("No!");
```

### D041

```js
const lai = lines[0].split(" ").map((e) => {
  return e - 0;
});
const obj = {
  true: "OK",
  false: "NG",
};
console.log(obj[lai[1] * lai[2] >= lai[0]]);
```

### D054

```js
 const lai = lines[0];
 console.log(lai.length >= 11 ? "OK" : 11 - lai.length);
```

### D002

```js
const a = (a, b) => {
  a != b ? console.log(Math.max(a, b)) : console.log("eq");
};

const arr = lines[0].split(" ");
a(parseInt(arr[0]), parseInt(arr[1]));
```

### D049

```js
console.log(lines[0].replace(/noaki$/,''))
```

### D037

```js
const a = lines[0] - 0;
const b = lines[1] - 0;
console.log(Math.ceil(b/a));
```

### **D043**

```js
const lai = lines[0] - 0;

lai >= 71
  ? console.log("rainy")
  : lai >= 31
  ? console.log("cloudy")
  : console.log("sunny");
```

### **D042**

```js
const lai = lines.map((x) => {
  return x.split(" ").map((x) => {
    return x - 0;
  });
});

console.log(lai[0][0] * lai[1][1] - lai[0][1] * lai[1][0]);
```

### **D039**

```js
let flg = true;
for (let i = 1; i <= 2; i++) {
  if (lines[i] !== lines[i - 1]) flg = false;
}
console.log(flg ? "YES" : "NO");
```

### D048

```js
const arr = lines.map((e) => {
  return e - 0;
});

for (let i = 0; i <= arr.length - 2; i++) {
  console.log(arr[i + 1] - arr[i]);
}
```

### D047

```js
const arr = ["Gold", "Silver", "Bronze"];
for (let i in arr) {
  console.log(arr[i] + " " + lines[i]);
}
```

