---
lang: zh-CN
title: 三大框架比较
---

# 以Vue.js为标准来比较React.js，Svelte.js的API

![](https://img.shields.io/badge/-React.js-9ca3af.svg?logo=react&style=popout-square)  ![](https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=vue.js&style=popout-square)  ![](https://img.shields.io/badge/-Svelte.js-9ca3af.svg?logo=svelte&style=popout-square)



::: warning
三大框架的api速查，速度对比表。  
但是注意，在一些情况并不是完全对应。
:::



📡  [掘金](https://juejin.cn/post/7129684578406989837/) · [思否](https://segmentfault.com/a/1190000042288970)



## API比较

| Vue.js 3 Composition API |   React.js Hooks API    |     Svelte.js      |
| :----------------------: | :---------------------: | :----------------: |
|         生命周期         |        useEffect        |      生命周期      |
|    watch/watchEffect     |        useEffect        |      $: {  }       |
|         computed         |    useMemo/useEffect    |      $: {  }       |
|       ref/reactive       |        useState         |         $:         |
|          v-html          | dangerouslySetInnerHTML |     { @html }      |
|           v-if           |       js三元运算        |      { #if }       |
|          v-for           |          map()          |     { #each }      |
|         v-model          |    useState+onChange    |     bind:value     |
|          @click          |         onClick         |      on:click      |
|           ref            |         useRef          |        this        |
|          :class          |        className        |       class:       |
|      provide/inject      |       useContext        |    context API     |
|        eventbus*         |   publish/subscribe*    | publish/subscribe* |

*：需要第三方库
