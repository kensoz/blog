---
lang: ja-JP
title: UI紹介と比較（Vue）
---

# Vue3のUIフレームワーク紹介と比較

![](https://img.shields.io/badge/-Nuxt.js-9ca3af.svg?logo=nuxt.js&style=popout-square)  ![](https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=vue.js&style=popout-square)



📡  [Qiita](https://qiita.com/kensoz/items/6839fd47548f3609cb69)



## 初めに

広い意味のUIフレームワーク（ライブラリ）は大きく三つの種類があると思います。

- 1️⃣ ボタンなどのコンポーネントしかない、単純なUIコンポーネントライブラリ。区別はページのレイアウトはCSSを自分で書く必要。例：**Equal**
- 2️⃣ UIコンポーネントを加えて、Layout & CSS SystemもついているUIフレームワーク。区別は基本的に、ページのレイアウトはCSSを自分で書く必要はない。例：**PrimeVue**  
  但し、独自のLayout Systemか、独自のCSS Systemを採用している場合、一部のCSSを自分で書く必要なUIフレームワークもある。例：**Naive UI**
- 3️⃣ CSSフレームワーク、区別はUIコンポーネトを提供しない、Layout & CSS Systemだけを提供する。例：**TailwindCSS**



## UIフレームワークリスト

🚧：開発中　✅：できる　❌：できない


|                 | Vue 3 | Nuxt 3* | 種類 | Breakpoint | 日本語公式 | TS   | MIT  | star  |
| :-------------- | :---: | :-----: | :--: | :--------: | :--------: | ---- | :--: | :---: |
| Vuetify 3       |   ✅   |    ✅    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   |  35k  |
| Quasar          |   ✅   |    ✅    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   | 21.8k |
| Element+        |   ✅   |    ✅    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   | 16.7k |
| Ant Vue         |   ✅   |    ✅    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   |  17k  |
| PrimeVue        |   ✅   |    ✅    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   | 2.7k  |
| Vuestic UI      |   ✅   |    ✅    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   | 1.6k  |
| Naive UI        |   ✅   |    ✅    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   |  10k  |
| Vant UI         |   ✅   |    ✅    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   |  20k  |
| Bootstrap-vue   |   ❌   |    ❌    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   |  14k  |
| Bootstrap-vue 3 |   🚧   |    🚧    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   |  511  |
| Oruga           |   ✅   |    ✅    |  1️⃣   |     ❌      |     ❌      | ✅    |  ✅   |  824  |
| BalmUI          |   ✅   |    ❌    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   |  404  |
| Daisy UI        |   ✅   |    ✅    |  2️⃣   |     ✅      |     ✅      | ✅    |  ✅   | 13.5k |
| Buefy           |   ❌   |    ❌    |  2️⃣   |     ✅      |     ❌      | ✅    |  ✅   | 9.3k  |
| Equal           |   ✅   |    ❌    |  1️⃣   |     ❌      |     ❌      | ✅    |  ✅   |  830  |
| Bulma           |   ✅   |    ✅    |  3️⃣   |     ✅      |     ❌      | ✅    |  ✅   | 45.9k |
| TailwindCSS     |   ✅   |    ✅    |  3️⃣   |     ✅      |     ❌      | ✅    |  ✅   | 59.7k |

*`Nuxt.js 3`で使う場合、一部のUIフレームワークは外部ライブラリが必要

## 結論

+ なんでもいい、早めに成果物をみたい：**Quasar**　**Element+**
+ レスポンシブサイトを構築したい：**Quasar**
+ 高度なカスタマイズができるUIフレームワークを使いたい：**TailwindCSS**　**PrimeVue**
+ スマートフォンサイトだけを構築したい：**Vant**
+ `IOS`、`Android`、`EXE`アプリを作りたい：**Quasar** 



##### 補足

+ **Vuetify 3**はリリースしたばかりなので、結論に含まれていません
+ クロスプラットフォームについて本記事は特に話しません
+ SEOに気になれば、`Nuxt.js`がおすすめです。SPAアプリは生まれた時からSEOに弱いです
+ 🔰 学習の初心者へ：  
    **Vuetify 2**がおすすめです。参考資料が多くて、**Vuetify 2**の場合は[公式サイト](https://vuetifyjs.com/ja/)で日本語のドキュメントもありますので、勉強しやすいと思います。また、**Vuetify 3**がリリースされましたので、APIが似ている**Vuetify 2**を勉強する価値があると思います。
+ GitHubのstarは参考まで：  
  例えば、`10k`starの**Naive UI**は中国で人気がありますが、日本で使う人があまりいないです。Evan Youさんのおすすめですが、日本で**Naive UI**を使えば、参考資料が少なくて、自分で問題を解決する覚悟が必要です
+ **Bootstrap-vue**と**Buefy**について：  
  `Vue3`に対応していないですが、日本で人気があるフレームワークので、参考のためリストに追加しました。残念ですが、**Buefy**については作者から`Vue3`への対応はしません。**Bootstrap**については詳しく下の**Bootstrap-vue 3**を確認してください



## こだわり

個人的なことですが、UIフレームワークに対して、Layout & CSS SystemとBreakpointの使いやすさは一番重視なポイントだと思います。そのため、この記事でUIフレームワークのLayout & CSS SystemとBreakpointについて特別に確認します。さらに、デフォルト✨Iconと🌏国際化（日本語化）についても紹介します。



##### Layout & CSS Systemの使いやすさとは

一般的に、UIフレームワークは独自のLayout & CSS Systemを使っています。その独自のシステムは理解しやすくて、余計なCSSを書く必要はないのが使いやすいLayout & CSS Systemだと思います。

```vuejs
<!-- Naive UI -->
<!--paddingはCSS感覚で自分で書く必要、API(n-layoutなど)の勉強と理解も必要 😐 -->
<n-layout has-sider>
   <n-layout-sider content-style="padding-top: 24px;">
   …
   </n-layout-sider>
</n-layout>
    
<!--Quasar -->
<!--見れば大体分かる、padding-topはサイズのsm、CSSを書く必要もない 😆 -->
<div class="q-pt-sm">…</div>
```



##### Breakpointの使いやすさとは

簡単に言うと、容器（`div`かコンポーネント）のBreakpointだけではなく、容器の`padding`、`margin`、`gutter`でもBreakpointでレスポンシブ対応できるのが使いやすいBreakpointだと思います。つまり、Layout SystemのBreakpointのことです。

```html
<!-- Element+ -->
<!-- コンポーネントのBreakpointがありますが、
paddingなどは使えないので、paddingのCSSクラスpaddingの@mediaを書かないと 😐 -->
<el-col :md="4" :lg="3" class="padding">
   <div>…</div>
</el-col>

<!-- PrimeVue -->
<!-- paddingまでのBreakpointがありますので、余計なCSSを書く必要はない 😆 -->
<div class="lg:col-12 md:col-6 lg:p-8 md:p-6">…</div>
```



##### ご注意！

BreakpointもLayout & CSS Systemも、良いUIフレームワークの判断基準ではありません。  
一番ニーズに対応できて、問題が解決できるUIフレームワークが一番良いUIフレームワークではないかと思います。



## Vuetify 3

[公式サイト](https://next.vuetifyjs.com/en/)

##### コメント

日本で一番人気がある`Vue.js` UIフレームワークです。  
2022年11月1日、**Vuetify 3**がリリースされました。Googleのマテリアルデザインを採用して、レスポンシブ対応、SASSでカスタマイズ、RTLなどの機能もあって、様々なニーズに対応できる素晴らしいフレームワークです。  
但し、現時点（2022年11月）の公式ドキュメントを見ると、**Vuetify 2**には約 70 個のコンポーネントがありますが、**Vuetify 3 **には常用で基本的なコンポーネントしかなくて、コンポーネントのリストは最小限です。コンポーネントが充実とは言えないでしょう。



##### バージョンについて
- Vuetify 2：`Vue.js 2`
- Vuetify 3：`Vue.js 3`



##### まとめ

- 👽 一言：王道
- 😀 メリット：レスポンシブ、一番人気、長期サポート、テストしやすい
- 🤔 デメリット：基本コンポーネントしかない、人気で似ているサイトが多い
- 🚩 おすすめシーン：ECサイト、管理サイト、フォームサイト



##### こだわり

- 😆 Breakpoint：コンポーネント、レイアウト両方対応
- 😆 Layout & CSS System：普段のCSSと似ている、理解しやすい
- ✨ デフォルトIcon：Material Icons、Font Awesome
- 🌏 国際化：対応



## Quasar

[公式サイト](https://quasar.dev/)

##### コメント

本来は**Vuetify**代替品として使用すると思いますが、実際は**Vuetify**に負けない実力を持っています。  
同じくGoogleのマテリアルデザインを採用しています。コンポーネントがすごく多いことで、基本的に**Quasar**を使えば、UIコンポーネントを自分で書く必要がなくなります。**Quasar CLI**を使えば簡単に`IOS`、`Android`、`EXE`アプリが作成できます。現時点一番おすすめUIフレームワークです。



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
中国のVue開発者になる必須条件のような**Element**は中国で凄い人気があります。独自のデザインでGoogleのマテリアルデザインと区別できて、新鮮な気持ちを与えることができます。ちなみに、**Element**の中国語意味は「饿了么」です。

##### バージョンについて
- Element：`Vue.js 2`
- Element+：`Vue.js 3`



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

もう一つAlibabaグループが開発して、`React.js`の人気UIフレームワーク**Ant Design React**の`Vue.js`版です。  
**Ant Design React**の経験があれば、**Ant Design Vue**をすぐに始めることができます。独自のデザインで、コンポーネントが豊富なUIフレームワークです。



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

##### コメント

あまり有名ではないですが、おすすめしたいUIフレームワークです。  
`Vue.js`版をはじめ、`React.js`版と`Angular.js`版もありますので、スタイルが統一しやすいです。   
UIコンポーネントとLayout & CSS Systemと見た目のスタイル（テーマ）を分けて分離されています。これによって高度的なカスタマイズデザインによって独自のデザインが実現できます。現時点の公式テーマ：**Bootstrap**、**Material Design**、**Fluent UI**、**Tailwind**など。

##### 使用
- **PrimeVue**のUIコンポーネント：[公式サイト](https://www.primefaces.org/primevue/)
- **PrimeVue**のLayout & CSS System（使い方は**TailwindCSS**と似ている）：[Primeflex](https://www.primefaces.org/primeflex/)
- **PrimeVue**のテーマ：[公式サイト](https://www.primefaces.org/designer/primevue)

##### まとめ

- 👽 一言：素晴らしいテーマシステム
- 😀 メリット：レスポンシブ、デザイナーに優しい、カスタマイズ性が高い、コンポーネントが豊富、比較的にテストしやすい
- 🤔 デメリット：コンセプトへの理解が必要、SCSSでのカスタマイズが有料、CSSでのカスタマイズががやや面倒、コンポーネントが一部で固定なスタイルを使用
- 🚩 おすすめシーン：ECサイト、管理サイト、フォームサイト



##### こだわり

- 😆 Breakpoint：コンポーネント、レイアウト両方対応
- 😆 Layout & CSS System：とても理解しやすい、書き方はTailwindCSSと似ている
- ✨ デフォルトIcon：独自
- 🌏 国際化：対応



## Vuestic UI

[公式サイト](https://vuestic.dev/)

##### コメント

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

##### コメント

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

##### コメント

スマートフォンに向けのUIフレームワークです。ライブラリでPCに対応可能で、デザインはIOSスタイルと似ています。



##### まとめ

- 👽 一言：スマートフォン向けの王者
- 😀 メリット：生まれた時からスマートフォンに優しい、コンポーネントが豊富
- 🤔 デメリット：PCに厳しい、参考資料が少ない
- 🚩 おすすめシーン：スマートフォンサイト



##### こだわり

- 😐 Layout & CSS System：独自のシステム、学習が必要
- ✨ デフォルトIcon：独自
- 🌏 国際化：対応


## BootstrapVue 3

[公式サイト](https://cdmoro.github.io/bootstrap-vue-3/)

##### コメント

**BootstrapVue**に基づいて開発した`Vue.js 3`用のUIフレームワークで、現時点は🚧alpha版です。**BootstrapVue**の公式アップデートではないですが、使い方は同じで、経験があれば特に学習する必要がないです。  
どうしても**BootstrapVue**を使いたい場合は**PrimeVue**の[Bootstrapテーマ](https://www.primefaces.org/primevue/theming)がおすすめです。（外部ライブラリによって**Bootstrap-vue**を`Vue3`で使うことが可能ですが、設定が面倒であまりおすすめしません）



##### まとめ

- 👽 一言：**BootstrapVue「3」**
- 😀 メリット：レスポンシブ対応、コンポーネントが多い、（**Bootstrap**）参考資料がたくさんある
- 🤔 デメリット：現時点開発中、安定性問題、サポート
- 🚩 おすすめシーン：ECサイト、管理サイト、フォームサイト



##### こだわり

- 😆 Breakpoint：**Bootstrap**なので、対応
- 😆 Layout & CSS System：**Bootstrap**なので、対応
- ✨ デフォルトIcon：Bootstrap Icon
- 🌏 国際化：対応



##### その他Vue3対応できるBootstrapのUIフレームワーク

+ [Bootstrap Vue](https://coreui.io/bootstrap-vue/)

## Oruga

[公式サイト](https://oruga.io/)

##### コメント

単純なUIコンポーネントライブラリです。**Buefy**の作者のプロジェクトです。  
**PrimeVue**みたい、UIコンポーネントとLayout & CSS Systemと見た目のスタイル（テーマ）を分けて分離されていますが、公式のLayout & CSS Systemが現時点でないことで、`CSS/SASS`を書く必要があります。公式テーマはあります：**Bootstrap**、**Material Design**、**Bulma**、**Tailwind**



##### まとめ

- 👽 一言：**PrimeVue**の無料版下位互換
- 😀 メリット：デザイナーに優しい、カスタマイズ性が高い、コンポーネントが純粋
- 🤔 デメリット：コンセプトへの理解が必要、`CSS/SASS`を書く必要、コンポーネントが少ない
- 🚩 おすすめシーン：管理サイト、フォームサイト



##### こだわり

- 😐 Breakpoint：なし、但し一部のコンポーネントはあり
- 😐 Layout & CSS System：なし
- ✨ デフォルトIcon：Material Icons　FontAwesome
- 🌏 国際化：なし


## BalmUI

[公式サイト](https://material.balmjs.com/)

##### コメント

マテリアルデザインを採用したUIフレームワークです。よく勘違いかもしれませんが、**Bulma**とは関係ないです。



##### まとめ

- 👽 一言：少数派
- 😀 メリット：マテリアルデザイン、比較的にコンポーネントが多い
- 🤔 デメリット：参考資料が少ない、サポート、安定性問題
- 🚩 おすすめシーン：管理サイト、フォームサイト



##### こだわり

- 😐 Breakpoint：コンポーネントのみ対応
- 😐 Layout & CSS System：独自のシステム
- ✨ デフォルトIcon：Material Icons
- 🌏 国際化：対応
- 

## Daisy UI

[公式サイト](https://daisyui.com/docs/install/?lang=jp)

##### コメント

**TailwindCSS**のUIコンポーネントライブラリです。**TailwindCSS**についてはあとで詳しく紹介します。



##### まとめ

- 👽 一言：**TailwindCSS**と相性がいい
- 😀 メリット：独自のデザイン、レスポンシブ、カスタマイズ性高い、汎用性高い
- 🤔 デメリット：サポート、**TailwindCSS**への理解が必要、自分でコンポーネトのJS/TSを書くことが必要
- 🚩 おすすめシーン：デザイン要求の高いプロジェクト



##### こだわり

- 😆 Breakpoint：**TailwindCSS**なので、対応
- 😆 Layout & CSS System：**TailwindCSS**なので、対応
- ✨ デフォルトIcon：Heroicons
- 🌏 国際化：なし



## Equal

[公式サイト](https://quatrochan.github.io/Equal/)

##### コメント

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

##### コメント

`HTML`なら使えて、人気があるCSSフレームワークです。Layout & CSS Systemを提供している同時に少しUIコンポーネントもあります。



##### まとめ

- 👽 一言：クラス名が分かりやすい
- 😀 メリット：独自のデザイン、レスポンシブ、カスタマイズ性高い、汎用性高い、テストしやすい
- 🤔 デメリット：サポート、場合によって設定が複雑、クラス名が分かりやすい反面は長くて、覚えにくい
- 🚩 おすすめシーン：個人プロジェクト



##### こだわり

- 😆 Breakpoint：CSSフレームワークなので、対応
- 😆 Layout & CSS System：CSSフレームワークなので、対応
- ✨ デフォルトIcon：Material Icons、Font Awesome



## TailwindCSS

[公式サイト](https://tailwindcss.com/docs/installation)

##### コメント

個人的に一番好きなCSSフレームワークです。  
独自のデザインで、カスタマイズ性も高くて、デザインガイドラインの通りに実装することが可能です。`HTML`なら使えて、インストールも簡単、デザイナーも開発者も最適なCSSフレームワークです。



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

**TailwindCSS**は純粋なCSSフレームワークでコンポーネントを提供しないですが、外部コンポーネントライブラリを使えば簡単にサイトを構築することが可能です。

+ [Daisy UI](https://daisyui.com/docs/install/?lang=jp)
+ [Tailwind UI](https://tailwindui.com/components?ref=sidebar)
+ [Headless UI](https://headlessui.com/)
+ [Tailwind Elements](https://tailwind-elements.com/)
+ [Tailwind Toolbox](https://tailwindtoolbox.com/starter-templates)（ツール収集）
+ [VueTailwind](https://www.vue-tailwind.com/)（`Vue.js 2`のみ対応）



##### 関連ライブラリ

**TailwindCSS**の補足、似ているライブラリもあります。

+ [Twind](https://twind.dev/)
+ [WindiCSS](https://windicss.org/)
+ [UnoCSS](https://uno.antfu.me/)
