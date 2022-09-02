---
lang: zh-CN
title: 日语50音判定
---

# TypeScript(JavaScript)判定日语片假名在50音的哪一行
![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



📡  [掘金](https://juejin.cn/post/7127153730104852517)



## 代码

🌐 [live demo](https://codepen.io/kensoz/pen/eYMMqbY)

```typescript
 const handleNameCode = (str: string): number => {
    // カタカナ定義
    const kana: Map<number, string> = new Map([
      [1, 'アイウエオ'],
      [2, 'カキクケコガギグゲゴ'],
      [3, 'サシスセソザジズゼゾ'],
      [4, 'タチツテトダヂヅデド'],
      [5, 'ナニヌネノ'],
      [6, 'ハヒフヘホパピプペポバビブベボ'],
      [7, 'マミムメモ'],
      [8, 'ヤユヨ'],
      [9, 'ラリルレロ'],
      [10, 'ワヲン'],
    ])

    for (let [key, value] of kana.entries()) {
      // 存在の場合、カタカナの行数のkeyを返す
      if (value.indexOf(str) !== -1) return key
    }

    // 存在しない場合、数字などの場合
    return kana.size + 1
  }
```

## 使用

```typescript
  console.log(handleNameCode('カ')) // 2
  console.log(handleNameCode('a')) // 11
```