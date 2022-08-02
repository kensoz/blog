---
lang: zh-CN
title: 日语50音判定
---

# TypeScript(JavaScript)判定日语片假名在50音的哪一行
---

### 代码

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
      // 返回所在行数
      if (kana.get(i)?.indexOf(str) !== -1) return i.toString()
    }

    // 数字英文平假名的情况
    return '11'
  }
```

### 使用

```typescript
handleNameCode('ア')
// 结果： '1'
```