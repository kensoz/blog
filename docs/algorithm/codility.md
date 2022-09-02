---
lang: ja-JP
title: Codility
---

# Codility

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
出題範囲と問題のタイプを把握するため、Codilityを始めました。  
メモとして自分の回答を整理します。
:::



## メモ

- `return`解答、入力の処理が特に必要ない



## LESSONS

### BinaryGap

```js
const getGaps = (BinaryArray, gaps) => {
     const firstOne = BinaryArray.indexOf("1");
     if (firstOne > -1) {
          let NewBinaryArray = BinaryArray.slice(firstOne + 1);
          const secondOne = NewBinaryArray.indexOf("1");
          if (secondOne > 0) {gaps.push(secondOne)}
          return getGaps(NewBinaryArray.slice(secondOne +1), gaps); 
     }

     return (gaps.length > 0) ? Math.max.apply(Math, gaps) : 0;
}


function solution (N) {
     if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
          const Binary = N.toString(2).split('');
          return getGaps(Binary, []);
     }
      
     return 0;
}
```

