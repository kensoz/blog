---
lang: ja-JP
title: 五十音順判定
---

# TypeScript(JavaScript)によるカタカナ五十音順の行を判定
![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
カタカナの五十音順を判定する関数です。  [Qiita](https://qiita.com/kensoz/items/87d28cf13b8d59abf052)にも投稿しました。
:::



### コード

🌐 [live demo](https://codepen.io/kensoz/pen/eYMMqbY)

```typescript
  const handleNameCode = (str: string): string => {
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

    for (let i = 1; i < 11; i++) {
      // パラメータカタカナの行を返す
      if (kana.get(i)?.indexOf(str) !== -1) return i.toString()
    }

    // 数字、ひらがなの場合
    return '11'
  }
```

### 使用

```typescript
handleNameCode('ア')
// 出力： '1'
```