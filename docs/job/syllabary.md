---
lang: ja-JP
title: 五十音順判定
---

# TypeScript(JavaScript)によるカタカナ五十音順の行を判定
---

### コード

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