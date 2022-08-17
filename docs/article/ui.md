---
lang: ja-JP
title: UI紹介（Vue）
---

# Vue3のUIフレームワーク紹介と比較

![](https://img.shields.io/badge/-Nuxt.js-9ca3af.svg?logo=nuxt.js&style=popout-square)  ![](https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=vue.js&style=popout-square)



::: tip
Vue.js 3のUIフレームワークを徹底的に選定と比較をします。[Qiita](https://qiita.com/kensoz/items/6839fd47548f3609cb69)にも投稿しました。
:::



## 初めに

広い意味のUIフレームワーク（ライブラリ）は大きく三つの種類があると思います。

- 1️⃣ ボタンなどのコンポーネントしかない、単純なUIコンポーネントライブラリ。ポイントはページのレイアウトは自分でCSSを書く必要。例：**Equal**
- 2️⃣ コンポーネントを加えて、Layout & CSS SystemもあるUIフレームワーク。ポイントは基本的に、ページのレイアウトは自分でCSSを書く必要はない。例：**PrimeVue**  
  但し、独自のLayout Systemか不完全なCSS Systemを採用しているフレームワークの場合、一部のCSSを自分で書く必要があるます。例：**Naive UI**
- 3️⃣ CSSフレームワーク、ポイントはコンポーネトを提供しない。例：**TailwindCSS**



## UIフレームワークリスト

🚧：開発中　✅：できる　❌：できない



🕒 更新：2022-08-17

|               | Vue 3 | Nuxt 3 | 種類 | Breakpoint | 日本語公式 | TS   | MIT  | star  |
| :------------ | :---: | :----: | :--: | :--------: | :--------: | ---- | :--: | :---: |
| Vuetify       |   🚧   |   🚧    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   |  35k  |
| Quasar        |   ✅   |   ✅    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   | 21.8k |
| Element+      |   ✅   |   ✅    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   | 16.7k |
| Ant Vue       |   ✅   |   ✅    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   |  17k  |
| PrimeVue      |   ✅   |   ✅    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   | 2.7k  |
| Vuestic UI    |   ✅   |   ✅    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   | 1.6k  |
| Naive UI      |   ✅   |   ✅    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   |  10k  |
| Vant UI       |   ✅   |   ✅    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   |  20k  |
| Bootstrap-vue |   ❌   |   ❌    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   |  14k  |
| Daisy UI      |   ✅   |   ✅    |  2️⃣   |     ✅      |     ✅      | ✅    |  ✅   | 13.5k |
| Buefy         |   ❌   |   ❌    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   | 9.3k  |
| Equal         |   ✅   |   ✅    |  1️⃣   |     ❌      |     ❌      | ✅    |  ✅   |  830  |
| Bulma         |   ✅   |   ✅    |  3️⃣   |     ✅      |     ❌      | ✅    |  ✅   | 45.9  |
| TailwindCSS   |   ✅   |   ✅    |  3️⃣   |     ✅      |     ❌      | ✅    |  ✅   | 59.7k |



## 結論

+ なんでもいい、早めに成果物をみたい：**Quasar**　**Element+**
+ レスポンシブサイトを構築したい：**Quasar**
+ 高度なカスタマイズができるUIフレームワークを使いたい：**TailwindCSS**　**PrimeVue**
+ スマートフォンサイトだけを構築したい：**Vant**
+ `IOS`、`Android`、`EXE`アプリを作りたい：**Quasar** 



##### 補足

+ Vuetifyは現時点開発中なので、結論に含まれていません
+ クロスプラットフォームなら、様々なフレームワークがありますが、本記事は特に話しません
+ SEOに気になれば、`Nuxt.js`がおすすめです。SPAアプリは生まれた時からSEOに弱いです
+ 🔰 初心者へ：  
  学習なら、**Vuetify 2**がおすすめです、参考資料が多くて、[公式サイト](https://vuetifyjs.com/ja/)で日本語のドキュメントもありますので、勉強しやすいと思います。また、間もなく**Vuetify 3**がリリースしますので、APIが似ている**Vuetify 2**を勉強する価値があると思います。どうしても`Vue3`を使いたい場合は**Quasar**がおすすめです
+ GitHubのstarは参考まで  
  例えば、`10k`starの**Naive UI**は中国で人気がありますが、日本で使う人があまりいないです。Evan Youさんのおすすめですが、日本で**Naive UI**を使えば、参考資料が少なくて、自分で問題を解決する覚悟が必要です
+ **Bootstrap-vue**と**Buefy**について：  
  `Vue3`に対応していないですが、日本で人気があるフレームワークので、参考のためリストに追加しました。**Bootstrap**のスタイルがほしい場合は**PrimeVue**の[Bootstrapテーマ](https://www.primefaces.org/primevue/theming)がおすすめです。



## こだわり

個人的なことですが、UIフレームワークに対して、Layout & CSS SystemとBreakpointの使いやすさは一番重視なポイントだと思います。そのため、この記事でUIフレームワークのLayout & CSS SystemとBreakpointについて確認します。さらに、この記事では✨Iconと🌏国際化（日本語化）について特別に紹介します。



##### Layout & CSS Systemの使いやすさとは

一般的に、UIフレームワークは独自のLayout & CSS Systemを使っています。その独自のシステムは理解しやすくて、余計なCSSを書く必要はないのが使いやすいLayout & CSS Systemだと思います。

```vue
< !-- Naive UI -- >
< !-- paddingはCSS感覚で自分で書く必要、APIの勉強と理解も必要 😐 -- >
<n-layout has-sider>
   <n-layout-sider content-style="padding-top: 24px;">
   </n-layout-sider>
</n-layout>
    
< !-- Quasar -- >
< !-- 見れば大体分かる、padding-topはサイズのsm、CSSを書く必要もない 😆 -- >
<div class="q-pt-sm">…</div>
```



##### Breakpointの使いやすさとは

簡単に言うと、容器（コンポーネント）のBreakpointだけではなく、容器の`padding`、`margin`、`gutter`でもBreakpointでレスポンシブ対応できるのが使いやすいBreakpointだと思います。つまり、Layout SystemのBreakpointのことです。

```html
< !-- Element+ -- >
< !-- コンポーネントのBreakpointがありますが、paddingなどは使えないので、@mediaを書かないと 😐 -- >
<el-col :md="4" :lg="3" class="padding">
   <div>…</div>
</el-col>

< !-- PrimeVue -- >
< !-- paddingまでのBreakpointがありますので、余計なCSSを書く必要はない 😆 -- >
<div class="lg:col-12 md:col-6 lg:p-8 md:p-6">…</div>
```



##### ご注意！

BreakpointでもLayout & CSS Systemでも、良いUIフレームワークの判断基準ではありません。  
ニーズに一番対応できて、問題を解決できるUIフレームワークが一番良いUIフレームワークではないかと思います。



## Vuetify

[公式サイト](https://next.vuetifyjs.com/en/)

##### コメント

日本で一番人気がある`Vue.js` UIフレームワークです。  
サイトを開くと「あ～Vuetifyだ」ということはよくあります。Googleのマテリアルデザインを採用して、コンポーネントが多くて、RTLなどの機能もあって、様々なニーズに対応できる素晴らしいフレームワークです。



🚧 現時点は開発中ですが、リリースを期待しています。



##### まとめ

- 👽 一言：王道
- 😀 メリット：レスポンシブ、コンポーネントや機能が豊富、一番人気、長期サポート、テストしやすい
- 🤔 デメリット：現時点で未完成、人気で似ているサイトが多い
- 🚩 おすすめシーン：ECサイト、管理サイト、フォームサイト



##### こだわり

- 😆 Breakpoint：コンポーネント、レイアウト両方対応
- 😆 Layout & CSS System：普段のCSSと似ている、理解しやすい
- ✨ デフォルトIcon：Material Icons、Font Awesome
- 🌏 国際化：対応



## Quasar

[公式サイト](https://quasar.dev/)

##### コメント

本来はVuetify代替品として使用すると思いますが、実際はVuetifyに負けない実力を持っています。  
同じくGoogleのマテリアルデザインを採用しています。コンポーネントがすごく多いことで、基本的にQuasarを使えば、UIコンポーネントを自分で書く必要がなくなります。現時点一番おすすめUIフレームワークです。



##### まとめ

- 👽 一言：Webデザイナーのあなたでも、IOSアプリが作れる
- 😀 メリット：レスポンシブ、コンポーネントがとても豊富、クロスプラットフォーム、テストしやすい
- 🤔 デメリット：設定が複雑、参照資料が少ない
- 🚩 おすすめシーン：ECサイト、管理サイト、フォームサイト、クロスプラットフォーム



##### こだわり

- 😆 Breakpoint：コンポーネント、レイアウト両方対応
- 😆 Layout & CSS System：普段のCSSと似ている、理解しやすい
- ✨ デフォルトIcon：Material Icons、Font Awesome、 Themify Iconsなど多数
- 🌏 国際化：対応



## Element+

[公式サイト](https://element-plus.org/en-US/)

##### コメント

Alibabaグループが開発したUIフレームワークです。  
中国のVue開発者になる必須条件のようなElementは中国で凄い人気があります。独自のデザインでGoogleのマテリアルデザインと区別できて、新鮮な気持ちを与えることができます。ちなみに、Elementの中国での意味は「饿了么」です。



##### まとめ

- 👽 一言：中国UIフレームワークの王道
- 😀 メリット：独自のデザイン、コンポーネントが豊富、テストしやすい
- 🤔 デメリット：レスポンシブに向いていない、参照資料が少ない
- 🚩 おすすめシーン：PCサイト側のECサイト、管理サイト、フォームサイト



##### こだわり

- 😐 Breakpoint：コンポーネントのみ対応（指定容器のみ）
- 😐 Layout & CSS System：独自のシステム、学習が必要。CSSを書く必要
- ✨ デフォルトIcon：独自
- 🌏 国際化：対応



## Ant Design Vue

[公式サイト](https://www.antdv.com/components/overview)

##### コメント

もう一つAlibabaグループが開発して、`React.js`の人気UIフレームワークAnt Design Reactの`Vue.js`版です。  
Ant Design Reactの経験があれば、Ant Design Vueをすぐに始めることができます。独自のデザインで、コンポーネントが豊富なUIフレームワークです。



##### まとめ

- 👽 一言：ReactとVue両方作ればスタイルが統一できる
- 😀 メリット：独自のデザイン、コンポーネントが豊富、テストしやすい
- 🤔 デメリット：レスポンシブに向いていない、一部コンポーネント有料、`React.js`のくせがある
- 🚩 おすすめシーン：PCサイト側のECサイト、管理サイト、フォームサイト



##### こだわり

- 😐 Breakpoint：コンポーネントのみ対応（指定容器のみ）
- 😐 Layout & CSS System：独自のシステム、学習が必要。CSSを書く必要
- ✨ デフォルトIcon：独自
- 🌏 国際化：対応



## PrimeVue

[公式サイト](https://www.primefaces.org/primevue/setup)

あまり有名ではないですが、おすすめしたいUIフレームワークです。  
`Vue.js`版をはじめ、`React.js`版と`Angular.js`版もあります。テーマシステムで高度的なカスタマイズデザインによって独自のデザインが実現できます。



##### まとめ

- 👽 一言：素晴らしいテーマシステム
- 😀 メリット：レスポンシブ、カスタマイズ性が高い、コンポーネントが豊富
- 🤔 デメリット：SCSSでのカスタマイズが有料、コンセプトへの理解が必要
- 🚩 おすすめシーン：ECサイト、管理サイト、フォームサイト



##### こだわり

- 😆 Breakpoint：コンポーネント、レイアウト両方対応
- 😆 Layout & CSS System：とても理解しやすい、書き方はTailwindCSSと似ている
- ✨ デフォルトIcon：独自
- 🌏 国際化：対応



## Vuestic UI

[公式サイト](https://vuestic.dev/)

比較的に新しいUIフレームワークです、独自のデザインでLayout & CSS Systemもしっかりしています。



##### まとめ

- 👽一言：期待できるUIフレームワーク
- 😀 メリット：レスポンシブ、独自デザイン
- 🤔 デメリット：サポート、ほしいコンポーネントがない可能性があり、安定性問題
- 🚩 おすすめシーン：個人プロジェクト



##### こだわり

- 😆 Breakpoint：コンポーネント、レイアウト両方対応
- 😆 Layout & CSS System：普段のCSSと似ている、理解しやすい。場合によってCSSを書く必要
- ✨ デフォルトIcon：自由
- 🌏 国際化：対応





## Naive UI

[公式サイト](https://www.naiveui.com/en-US/os-theme)

Evan Youさんがおすすめして、最初の頃に個人で開発したUIフレームワークです。一部のコンポーネントで凄いこだわりがあって、使いやすいです。



##### まとめ

- 👽 一言：Evan Youさんのおすすめ
- 😀 メリット：独自のデザイン、コンポーネントが豊富、こだわり設計あり
- 🤔 デメリット：サポート、レスポンシブに向いていない、参考資料が少ない
- 🚩 おすすめシーン：PCサイト側の管理サイト、フォームサイト



##### こだわり

- 😐 Breakpoint：コンポーネントのみ対応（指定容器のみ）
- 😐 Layout & CSS System：独自のシステム、学習が必要。余計なCSSを書く必要
- ✨ デフォルトIcon：自由
- 🌏 国際化：対応



## Vant UI

[公式サイト](https://vant-ui.github.io/vant/v4/#/en-US)

スマートフォンに向けのUIフレームワークですが、ライブラリでPCに対応可能です。デザインはIOSスタイルと似ています。



##### まとめ

- 👽 一言：スマートフォン向けの王者
- 😀 メリット：生まれた時からスマートフォンに優しい、コンポーネントが豊富
- 🤔 デメリット：PCに厳しい、参考資料が少ない
- 🚩 おすすめシーン：スマートフォンサイト



##### こだわり

- 😐 Layout & CSS System：独自のシステム、学習が必要
- ✨ デフォルトIcon：独自
- 🌏 国際化：対応



## Daisy UI

[公式サイト](https://daisyui.com/docs/install/?lang=jp)

TailwindCSSのUIコンポーネントライブラリです。TailwindCSSについてはあとで詳しく紹介します。



##### まとめ

- 👽 一言：TailwindCSSと相性がいい
- 😀 メリット：独自のデザイン、レスポンシブ、カスタマイズ性高い、汎用性高い
- 🤔 デメリット：サポート、TailwindCSSへの理解が必要、自分でコンポーネトのJS/TSを書くことが必要
- 🚩 おすすめシーン：デザイン要求の高いプロジェクト



##### こだわり

- 😆 Breakpoint：TailwindCSSなので、対応
- 😆 Layout & CSS System：TailwindCSSなので、対応
- ✨ デフォルトIcon：Heroicons
- 🌏 国際化：なし



## Equal

[公式サイト](https://quatrochan.github.io/Equal/)

この記事で一番無名のUIフレームワークですが、独自のデザインでコンポーネントがきれいで紹介になりました。UIフレームワークというより、単純なUIコンポーネントライブラリです。



##### まとめ

- 👽 一言：目立たないですが、美しい
- 😀 メリット：独自のデザイン、ソースコードが勉強しやすい
- 🤔 デメリット：サポート、安定性問題、コンポーネント少ない、レスポンシブ対応していない
- 🚩 おすすめシーン：個人プロジェクト



##### こだわり

- 😐 Breakpoint：なし
- 😐 Layout & CSS System：なし
- ✨ デフォルトIcon：Material Icons
- 🌏 国際化：なし



##  Bulma

[公式サイト](https://bulma.io/)

JavaScriptなら使えて、人気があるCSSフレームワークです。Layout & CSS Systemを提供している同時に少しUIコンポーネントもあります。



##### まとめ

- 👽 一言：クラス名が分かりやすい
- 😀 メリット：独自のデザイン、レスポンシブ、カスタマイズ性高い、汎用性高い、テストしやすい
- 🤔 デメリット：場合によって設定が複雑、クラス名が分かりやすい反面は長くて、覚えにくい
- 🚩 おすすめシーン：個人プロジェクト



##### こだわり

- 😆 Breakpoint：CSSフレームワークなので、対応
- 😆 Layout & CSS System：CSSフレームワークなので、対応
- ✨ デフォルトIcon：Material Icons、Font Awesome



## TailwindCSS

[公式サイト](https://tailwindcss.com/docs/installation)

個人的に一番好きなCSSフレームワークです。  
独自のデザインで、カスタマイズ性も高くて、デザインガイドラインの通りに実装することが可能です。JavaScriptなら使えて、インストールも簡単、デザイナーも開発者も最適なCSSフレームワークです。



##### まとめ

- 👽 一言：CSSフレームワークの王道
- 😀 メリット：独自のデザイン、レスポンシブ、カスタマイズ性高い、汎用性高い、テストしやすい
- 🤔 デメリット：CSSへの理解が必要、コード量が多くなる可能性がある
- 🚩 おすすめシーン：デザイン要求の高いプロジェクト



##### こだわり

- 😆 Breakpoint：CSSフレームワークなので、対応
- 😆 Layout & CSS System：CSSフレームワークなので、対応
- ✨ デフォルトIcon：Heroicons



##### コンポーネントライブラリ

TailwindCSSは単純なCSSフレームワークでコンポーネントを提供しないですが、別のコンポーネントライブラリを使えば簡単にサイトを構築することが可能です。

+ [Daisy UI](https://daisyui.com/docs/install/?lang=jp)
+ [Tailwind UI](https://tailwindui.com/components?ref=sidebar)
+ [Headless UI](https://headlessui.com/)
+ [Tailwind Elements](https://tailwind-elements.com/)



##### 関連ライブラリ

TailwindCSSの補足、似ているライブラリもあります。

+ [Twind](https://twind.dev/)
+ [WindiCSS](https://windicss.org/)
+ [UnoCSS](https://uno.antfu.me/)

