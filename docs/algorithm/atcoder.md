---
lang: ja-JP
title: AtCoder
---

# AtCoder

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
出題範囲と問題のタイプを把握するため、AtCoderを始めました。  
メモとして自分の回答を整理します。
:::



## メモ

- [AtCoder Problems](https://kenkoooo.com/atcoder/)
- `console.log(解答)`、入力の処理が必要
- 配列化input：`input.split("\n")`，
- 文字列配列化：`split(" ")`
- JavaScriptテンプレート：

  ```js
  const input = require("fs").readFileSync("/dev/stdin", "utf8").split("\n");
  const arr = input[0].split(" ");
  // console.log(arr)
  // answer code...
  ```
  
  



## ABC

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

