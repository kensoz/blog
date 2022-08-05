---
lang: zh-CN
title: 组件注册
---

# 通用组件一次性注册

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)  ![](https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=Vue.js&style=popout-square)



::: tip
Vue.js 2通用组件一次性全局注册。 [思否](https://segmentfault.com/a/1190000042275539)也投了稿。
:::



### 代码

```typescript
// 在main.js
// 通用组件地址： src/components/base
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

```vue
// 在想要用的组件内只用写通用组件标签即可
<base-title />
```

