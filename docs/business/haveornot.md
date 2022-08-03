---
lang: ja-JP
title: 配列値の有無
---

# 配列にあれば削除なければ追加
![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
常用操作ですね。[Qiita](https://qiita.com/kensoz/items/14ed846ace6abfec4c77)にも投稿しました。
:::



### コード

```typescript
const arr = [1,2,3,4]
const x = 5

// indexOf()による判断
const index = arr.indexOf(x);
// index < 0: なければ，追加
// index >= 0: ある，削除
index < 0 ? arr.push(x) : arr.splice(index, 1)

console.log(arr)
// [1,2,3,4,5]
```

