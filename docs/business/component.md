---
lang: ja-JP
title: コンポーネント登録
---

# 基底コンポーネントを一括登録する
![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)  ![](https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=Vue.js&style=popout-square)



::: tip
Vue.js 2のコンポーネント一括登録です。 [Qiita](https://qiita.com/kensoz/items/8a5278d0e7b5c5c97c26)にも投稿しました。
:::



### コード

```typescript
// main.jsにて
// 基底コンポーネントフォルダパス： src/components/base
const files = require.context('./components/base, true', /\.vue$/)
const components = {}
files.keys().forEach(key => {
  components[key.replace(/(\.\/|\.vue)/g, '')] = files(key).default
})

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})

```



### 使用

コンポーネント内でそのまま使えば大丈夫です！

```vue
<base-title />
```

