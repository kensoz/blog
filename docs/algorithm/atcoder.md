---
lang: ja-JP
title: AtCoder
---

# AtCoder

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



## メモ

- [AtCoder Problems](https://kenkoooo.com/atcoder/)
- **AtCoder Beginners Selection**だけやりました
- `console.log(解答)`、入力の処理が必要
- 配列化input：`input.split("\n")`，
- 文字列配列化：`split(" ")`
- JavaScriptテンプレート：

  ```js
  const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
  // 入力が一行：const arr = input[0].split(" ");
  // console.log(arr)
  // answer code...
  ```
  



## AtCoder Beginners Selection

### ABC086A - Product

```js
  const arr = input[0].split(" ");
  const count = Number(arr[0])*Number(arr[1])
  console.log(count%2 === 0 ? "Even" : "Odd");
```

### ABC081A - Placing Marbles

```javascript
  let res = 0;
  for (i = 0; i < input[0].length; i++) {
    input[0][i] === "1" && res++;
  }
  console.log(res);
```

### ABC081B - Shift only

```js
  const arr = input[1].split(" ");
  let res = 0;

  const count = (nima) => {
    const tmp = [];
    res++;
    for (i = 0; i < nima.length; i++) {
      tmp.push(Number(nima[i]) / 2);
    }

    return lai(tmp);
  };

  const lai = (cao) => {
    let isEven = true;
    for (i = 0; i < cao.length; i++) {
      if (Number(cao[i]) % 2 === 0) {
        isEven = true;
      } else {
        isEven = false;
        break;
      }
    }

    isEven ? count(cao) : console.log(res);
  };

  lai(arr);
```

### ABC087B - Coins

```js
  const fHundredSize = Number(input[0]);
  const hundredSize = Number(input[1]);
  const fiftySize = Number(input[2]);
  const price = Number(input[3]);

  let res = 0;

  for (let fh = 0; fh <= fHundredSize; fh++) {
    for (let h = 0; h <= hundredSize; h++) {
      for (let f = 0; f <= fiftySize; f++) {
        const count = 500 * fh + 100 * h + 50 * f;
        count === price && res++;
      }
    }
  }

  console.log(res);
```

### ABC083B - Some Sums

```js
const arr = input[0].split(" ");
let num = [];
let res = [];
// 全数字配列を作成
for (let i = 1; i < Number(arr[0]) + 1; i++) {
  num.push(i.toString());
}

// ループで各数字の桁数合計を算出
for (let e = 0; e < num.length; e++) {
  let tmp = 0;

  // 桁数足し算
  for (let a = 0; a < num[e].length; a++) {
    tmp = Number(num[e][a]) + tmp;
  }

  // 条件に合うかどうかを判断
  if (tmp >= arr[1] && tmp <= arr[2]) {
    res.push(Number(num[e]));
  }
}

// 条件にあった数字の配列を加算
console.log(res.reduce((prev, curr) => prev + curr));
```

### ABC088B - Card Game for Two

```js
let alice = 0;
let bob = 0;
const lai = Array.from(input[1].split(" "), Number);
const sort = lai.sort((a, b) => b - a);

for (const [i, e] of sort.entries()) {
  if (i % 2 === 0) {
    alice += e;
    continue;
  }
  bob += e;
}

console.log(alice - bob);
```

### ABC085B - Kagami Mochi

```js
input.shift()
console.log([ ... new Set(input)].length)
```

### ABC085C - Otoshidama

```js
const arr = input[0].split(" ");
const count = Number(arr[0])
const Otoshidama = Number(arr[1])
let res = '-1 -1 -1';
 
  for (let i = 0; i <= count; i++) {
    for (let e = 0; e <= count; e++) {
      if (i + e > count) {
        continue;
      }
      if (10000 * i + 5000 * e + 1000 * (count - i - e) === Otoshidama) {
        res = `${i} ${e} ${count - i - e}`;
        break;
      }
    }
  }
 
console.log(res);
```

### ABC049C - 白昼夢

```js
console.log(input[0].match( /^(dream|dreamer|erase|eraser)*$/ ) ? "YES" : "NO")
```

### ABC086C - Traveling

```js
// tは時間、Nは観光したいポイントの総数、始めは(0,0)から
const N = Number(input[0])
let arr = [{t:0,x:0,y:0}]

//　座標データをオブジェクトで格納、全データ配列にする
for(let i = 1; i <= N; i++){
  const tmp = input[i].split(" ")
  arr.push({
    t: Number(tmp[0]),
    x: Number(tmp[1]),
    y: Number(tmp[2]),
  })
}

// スタートからポイント、ポイントから次のポイント...の各keyの差を算出
let flg = true
for(let d = 0; d < N; d++){
  const Dt = arr[d + 1]["t"] - arr[d]["t"] //一回使う時間
  // なぜabs？戻る場合はある
  const Dx = Math.abs(arr[d + 1]["x"] - arr[d]["x"]); // 一回xの移動距離
  const Dy = Math.abs(arr[d + 1]["y"] - arr[d]["y"]); // 一回yの移動距離
  const move = Dx + Dy; // 一回移動の総距離 = 一回xの移動距離 + 一回yの移動距離

  // 一回移動の総距離 > 一回使う時間：遠すぎて観光できない
  // 一回移動の総距離と一回使う時間の偶奇が合わない：到着できなくて観光できない（最初はここで失敗した）
  flg = (move > Dt || Dt % 2 !== move % 2) ? false : true
}

flg ? console.log("Yes") : console.log("No");
```

