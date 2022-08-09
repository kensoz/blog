---
lang: zh-CN
title: pinia的setup模式
---

# 用Setup API来写Pinia.js

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)  ![](https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=vue.js&style=popout-square)



::: tip
用setup api来写Pinia.js。[思否](https://segmentfault.com/a/1190000042290316)也投了稿。
:::



## 0.写在前面

+ 本教程使用基于`Vue.js 3`项目来讲解



## 1.安装

参考[官网](https://pinia.vuejs.org/introduction.html)安装

```shell
yarn add pinia
# or with npm
npm install pinia
```



## 2.导入

在`main.js`或`main.ts`导入Pinia.js

```typescript
import { createPinia } from 'pinia'

app.use(createPinia())
```



## 3.新建Store

先在`src`文件夹中创建`store`文件夹
新建`index.ts`或`index.js`文件，本教程使用`ts`

```typescript
import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useMainStore = defineStore('main', () => {
  // 就像写script setup一样来写store
  const count = ref<number>(1)
  const increment = ():void => {
    count.value++;
  }

  return { count, increment }
})

```



## 4.使用Store

在`App.vue`

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

// hooks一样来使用
const useMainStore = useMainStore()
const { count, increment } = storeToRefs(useMainStore)

// vue里面也可以直接改
count.value = 0
</script>
```

