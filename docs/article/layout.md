---
lang: ja-JP
title: Tailwindのレイアウト
---



# デモ付！コピペ可！未経験大歓迎！FlexとGridによるTailwindCSSの基本レイアウトサンプル



📡  [Qiita](https://qiita.com/kensoz/items/8ad254d3294792ae6073)



## 環境

+ **TailwindCSS** 3
+ Chrome



## はじめに

#### 基本的に

- 具体的なサイズ（`100%,100px,100rem`など）を指定しなくて、自動幅調整を指定
- **Flex**と**Grid**を中心



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
/* <script src="https://cdn.tailwindcss.com"></script> */
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

🌐 [demo](https://codepen.io/kensoz/pen/wvjLJgX)

```html
  <body class="font-bold text-gray-700 flex flex-col">
    <div class="bg-cyan-100 pl-2">header</div>
    <div class="flex-grow flex">
      <div class="bg-rose-100 px-2">navi</div>
      <div class="flex flex-col flex-grow">
        <div class="bg-yellow-100 pl-2 flex-grow">content</div>
        <div class="bg-purple-100 pl-2">footer</div>
      </div>
    </div>
  </body>
```



#### Grid

🌐 [demo](https://codepen.io/kensoz/pen/VwxJpzW)

```html
  <body class="font-bold text-gray-700 grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr]">
    <div class="bg-cyan-100 pl-2 col-span-full">header</div>
    <div class="bg-rose-100 px-2 row-span-2">navi</div>
    <div class="bg-yellow-100 pl-2">content</div>
    <div class="bg-purple-100 pl-2">footer</div>
  </body>
```



## 2カラム（フルナビ）

#### Flex

🌐 [demo](https://codepen.io/kensoz/pen/rNvEyyN)

```html
  <body class="font-bold text-gray-700 flex">
    <div class="bg-rose-100 px-2">navi</div>
    <div class="flex-grow flex flex-col">
      <div class="bg-cyan-100 pl-2">header</div>
      <div class="bg-yellow-100 pl-2 flex-grow">content</div>
      <div class="bg-purple-100 pl-2">footer</div>
    </div>
  </body>
```



#### Grid

🌐 [demo](https://codepen.io/kensoz/pen/yLjdMXW)

```html
  <body class="font-bold text-gray-700 grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr]">
    <div class="bg-rose-100 px-2 row-span-3">navi</div>
    <div class="bg-cyan-100 pl-2">header</div>
    <div class="bg-yellow-100 pl-2">content</div>
    <div class="bg-purple-100 pl-2">footer</div>
  </body>
```



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

#### Flex

まずはカードの`	flex-basis:25%；magrin:0.5rem`を指定しています

🌐 [demo](https://codepen.io/kensoz/pen/xxjodqp)

```html
  <body class="font-bold text-gray-700 flex flex-wrap">
    <div class="bg-cyan-100 pl-2 m-2 basis-[calc(25%-1rem)]">card</div>
    <div class="bg-cyan-100 pl-2 m-2 basis-[calc(25%-1rem)]">card</div>
    <div class="bg-cyan-100 pl-2 m-2 basis-[calc(25%-1rem)]">card</div>
    <div class="bg-cyan-100 pl-2 m-2 basis-[calc(25%-1rem)]">card</div>
    <div class="bg-cyan-100 pl-2 m-2 basis-[calc(25%-1rem)]">card</div>
    <div class="bg-cyan-100 pl-2 m-2 basis-[calc(25%-1rem)]">card</div>
    <div class="bg-cyan-100 pl-2 m-2 basis-[calc(25%-1rem)]">card</div>
    <div class="bg-cyan-100 pl-2 m-2 basis-[calc(25%-1rem)]">card</div>
    <div class="bg-cyan-100 pl-2 m-2 basis-[calc(25%-1rem)]">card</div>
  </body>
```



#### Grid

🌐 [demo](https://codepen.io/kensoz/pen/MWGMmmb)

```html
  <body class="font-bold text-gray-700 grid grid-cols-4 gap-4 p-2">
    <div class="bg-cyan-100 pl-2">card</div>
    <div class="bg-cyan-100 pl-2">card</div>
    <div class="bg-cyan-100 pl-2">card</div>
    <div class="bg-cyan-100 pl-2">card</div>
    <div class="bg-cyan-100 pl-2">card</div>
    <div class="bg-cyan-100 pl-2">card</div>
    <div class="bg-cyan-100 pl-2">card</div>
    <div class="bg-cyan-100 pl-2">card</div>
    <div class="bg-cyan-100 pl-2">card</div>
  </body>
```



## タイルレイアウト

#### Columns

🌐 [demo](https://codepen.io/kensoz/pen/MWGMmVp)

```html
  <div class="columns-4">
    <img class="mb-4" src="https://source.unsplash.com/random/1" />
    <img class="mb-4" src="https://source.unsplash.com/random/2" />
    <img class="mb-4" src="https://source.unsplash.com/random/3" />
    <img class="mb-4" src="https://source.unsplash.com/random/4" />
    <img class="mb-4" src="https://source.unsplash.com/random/5" />
    <img class="mb-4" src="https://source.unsplash.com/random/6" />
    <img class="mb-4" src="https://source.unsplash.com/random/7" />
    <img class="mb-4" src="https://source.unsplash.com/random/8" />
    <img class="mb-4" src="https://source.unsplash.com/random/9" />
  </div>
```


