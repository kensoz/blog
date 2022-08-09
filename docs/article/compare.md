---
lang: zh-CN
title: jsフレームワーク比較
---

# Vue.jsをベースでReact.js、Svelte.jsのAPIを比較

![](https://img.shields.io/badge/-React.js-9ca3af.svg?logo=react&style=popout-square)  ![](https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=vue.js&style=popout-square)  ![](https://img.shields.io/badge/-Svelte.js-9ca3af.svg?logo=svelte&style=popout-square)



::: warning
三つのjsフレームワークのAPI比較表です。[Qiita](https://qiita.com/kensoz/items/79ccf7d5b718d2dd0249)にも投稿しました。  
あくまでの比較です。場合によって使い方が違うことがあります。
:::



## APIの比較

| Vue.js 3 Composition API |   React.js Hooks API    |      Svelte.js       |
| :----------------------: | :---------------------: | :------------------: |
|   ライフサイクルフック   |        useEffect        | ライフサイクルフック |
|    watch/watchEffect     |        useEffect        |       $: {  }        |
|         computed         |    useMemo/useEffect    |       $: {  }        |
|       ref/reactive       |        useState         |          $:          |
|          v-html          | dangerouslySetInnerHTML |      { @html }       |
|           v-if           |      js三項演算子       |       { #if }        |
|          v-for           |          map()          |      { #each }       |
|         v-model          |    useState+onChange    |      bind:value      |
|          @click          |         onClick         |       on:click       |
|           ref            |         useRef          |         this         |
|          :class          |        className        |        class:        |
|      provide/inject      |       useContext        |     context API      |
|        eventbus*         |   publish/subscribe*    |  publish/subscribe*  |

*：ライブラリの利用が必要です
