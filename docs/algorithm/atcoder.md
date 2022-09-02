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
  // atcoder temp
  function Main(input) {
    input = input.split("\n");
  }
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));
  ```

  



## ABC

### ABC086A - Product

```js
  input = input.split("\n");
  const arr = input[0].split(" ");
  const count = Number(arr[0])*Number(arr[1])
  console.log(count%2 === 0 ? "Even" : "Odd");
```

