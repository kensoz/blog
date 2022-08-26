---
lang: ja-JP
title: setupで🍍Piniaを使う
---

# Setupで🍍Pinia.jsを使う

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)  ![](https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=vue.js&style=popout-square)



::: tip
よくOptions APIでPinia.jsを使っていますが、本記事はVue3 Composition APIに合わせて、🍍Pinia.jsのSetup書き方を紹介します。
:::



📡  [Qiita](https://qiita.com/kensoz/items/f1d4204f218651d2b6f9)



## 0.🍍 初めに

+ この記事は`Vue.js 3`を使うプロジェクトに基づいて作成しました。



## 1.🍍 インストール

まずはインストールです。  
[公式サイト](https://pinia.vuejs.org/introduction.html) 

```shell
yarn add pinia
# or with npm
npm install pinia
```



## 2.🍍 インポート

`main.js`または`main.ts`で🍍をインポートします。

```typescript
import { createPinia } from 'pinia'

app.use(createPinia())
```



## 3.🍍 Storeを作成

まずは`src`フォルダで`store`フォルダを新規作成、
`index.ts`または`index.js`ファイルを新規作成、この記事は`ts`を使っています。
`store`で二つのパターン（`Options API`と`Composition API`）があります、この記事はもちろん`Composition API`パターンの`store`を作ります。

```typescript
import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useMainStore = defineStore('main', () => {
  // script setupの感じでstoreを書く
  // 値
  const count = ref<number>(1)
  // メソッド
  const increment = ():void => {
    count.value++;
  }

  return { count, increment }
})

```



## 4.🍍 Storeを使う

`App.vue`で使う

```vue
<template>
  <div>
    count: {{ count }}
    <button @click="increment()">increment</button>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/store/index'

// hooksの感じで使う
const useMainStore = useMainStore()
const { count, increment } = storeToRefs(useMainStore)

// vueファイルで直接的に値を更新することもできます
count.value = 0
</script>
```



## 5.🍍 感想

`Vue3`に対して、`Options API`よりやはり🍍`Composition API`のほうが使いやすいと思います。
