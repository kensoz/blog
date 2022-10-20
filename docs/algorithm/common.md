---
lang: ja-JP
title: Other
---

# その他のコーディングテストサイト

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
Codility、HackerRank、Codewars
:::



## Codility

### メモ

- `return`解答、入力の処理が特に必要ない



### LESSONS-BinaryGap

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



## HackerRank

### メモ

- 題名の関数で`return`解答、入力の処理が特に必要ない、`main`関数でシステム判定
- 操作やや重い



### Problem Solving\Solve Me First

```js
function solveMeFirst(a, b) {
  return a + b
}
```



## Codewars

### メモ

- `return`解答、入力の処理が特に必要ない



### PracticeGravity-Flip

```js
const flip=(d, a)=>{
  if(d === 'R') return a.sort((a,b)=>a-b);
  if(d === 'L') return a.sort((a,b)=>b-a);
}
```

