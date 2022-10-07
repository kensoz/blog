---
lang: ja-JP
title: Codewars
---

# Codewars

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
出題範囲と問題のタイプを把握するため、Codewarsを始めました。  
メモとして自分の回答を整理します。
:::



## メモ

- `return`解答、入力の処理が特に必要ない

  

## Practice

### Gravity Flip

```js
const flip=(d, a)=>{
  if(d === 'R') return a.sort((a,b)=>a-b);
  if(d === 'L') return a.sort((a,b)=>b-a);
}
```

