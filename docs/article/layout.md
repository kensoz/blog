---
lang: ja-JP
title: Tailwindのレイアウト
---



# デモ付！コピペ可！未経験大歓迎！Flex、GridによるTailwindCSSの基本レイアウト



```css
/* <script src="https://cdn.tailwindcss.com"></script> */
html,
body {
	min-height: 100vh;
}
```



📡  [Qiita]()



## 環境

+ **TailwindCSS** 3
+ Chrome



## はじめに

#### 考え方

本記事では**TailwindCSS**によって具体的なサイズ（`100%,100px,100rem`など）を指定しなくて、自動幅調整を指定します。



#### ベースHTML

とてもきれいなスタイルを追加（レイアウトによって変動、必須ではない）

```html
<!--index.html--> 
　<body class="font-bold text-gray-700">
    <div class="bg-cyan-100 pl-2">header</div>
    <div class="bg-yellow-100 pl-2">content</div>
    <div class="bg-purple-100 pl-2">footer</div>
  </body>
```



#### ベースCSS

`html,body`要素の高さを指定

```css
/*main.css*/
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    html,body {
        /*ニーズによって指定、ここはフル画面*/
        @apply min-h-screen;
    }
}
```

**CodePen**を使う場合

```css
html,
body {
	min-height: 100vh;
}
```



## 1カラム

#### Flex

🌐 [demo](https://codepen.io/kensoz/pen/rNvbego)

```html
  <body class="font-bold text-gray-700 flex flex-col">
    <div class="bg-cyan-100 pl-2">header</div>
    <div class="bg-yellow-100 pl-2 flex-grow">content</div>
    <div class="bg-purple-100 pl-2">footer</div>
  </body>
```



#### Grid

🌐 [demo](https://codepen.io/kensoz/pen/rNvgKOm)

```html
  <body class="font-bold text-gray-700 grid grid-rows-[auto_1fr_auto]">
    <div class="bg-cyan-100 pl-2">header</div>
    <div class="bg-yellow-100 pl-2">content</div>
    <div class="bg-purple-100 pl-2">footer</div>
  </body>
```



## 2カラム

#### Flex

🌐 [demo](https://codepen.io/kensoz/pen/bGMyKPg)

```html
  <body class="font-bold text-gray-700 flex flex-col">
    <div class="bg-cyan-100 pl-2">header</div>
    <div class="flex-grow flex">
      <div class="bg-rose-100 px-2">navi</div>
      <div class="bg-yellow-100 pl-2 flex-grow">content</div>
    </div>
    <div class="bg-purple-100 pl-2">footer</div>
  </body>
```



#### Grid

🌐 [demo](https://codepen.io/kensoz/pen/bGMyKEG)

```html
  <body class="font-bold text-gray-700 grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr]">
    <div class="bg-cyan-100 pl-2 col-span-full">header</div>
    <div class="bg-rose-100 px-2">navi</div>
    <div class="bg-yellow-100 pl-2">content</div>
    <div class="bg-purple-100 pl-2 col-span-full">footer</div>
  </body>
```



## 2カラム（変種）

#### Flex

🌐 demo

#### Grid

🌐 demo



## 2カラム（独立ナビ）

#### Flex

🌐 demo

#### Grid

🌐 demo



## 3カラム/聖杯レイアウト

#### Flex

🌐 [demo](https://codepen.io/kensoz/pen/GRdaBjq)

```html
  <body class="font-bold text-gray-700 flex flex-col">
    <div class="bg-cyan-100 pl-2">header</div>
    <div class="flex-grow flex">
      <div class="bg-rose-100 px-2">navi</div>
      <div class="bg-yellow-100 pl-2 flex-grow">content</div>
      <div class="bg-rose-100 px-2">navi</div>
    </div>
    <div class="bg-purple-100 pl-2">footer</div>
  </body>
```



#### Grid

🌐 [demo](https://codepen.io/kensoz/pen/yLjWqaj)

```html
  <body class="font-bold text-gray-700 grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr_auto]">
    <div class="bg-cyan-100 pl-2 col-span-full">header</div>
    <div class="bg-rose-100 px-2">navi</div>
    <div class="bg-yellow-100 pl-2">content</div>
    <div class="bg-rose-100 px-2">navi</div>
    <div class="bg-purple-100 pl-2 col-span-full">footer</div>
  </body>
```



## カード

カードのサイズは：

Flex

🌐 demo

Grid

🌐 demo



## タイルレイアウト

Flex

🌐 demo

Grid

🌐 demo

