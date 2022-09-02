---
lang: ja-JP
title: 五十音順判定
---

# TypeScript(JavaScript)によるカタカナ五十音順の行を判定
![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



📡  [Qiita](https://qiita.com/kensoz/items/87d28cf13b8d59abf052)

## コード

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