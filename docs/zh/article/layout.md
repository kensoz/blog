---
lang: zh-CN
title: Tailwind布局
---



# TailwindCSS的基本布局Demo



📡 [掘金](https://juejin.cn/post/7156463594924670990/)



## 环境

+ **TailwindCSS** 3
+ Chrome



## 开始

#### 思路

- 基本的思路就是让元素自己撑满空间
- 以**Flex**和**Grid**布局为中心



#### HTML模板

```html
<!--index.html--> 
　<body class="font-bold text-gray-700">
    <div class="bg-cyan-100 pl-2">header</div>
    <div class="bg-yellow-100 pl-2">content</div>
    <div class="bg-purple-100 pl-2">footer</div>
  </body>
```



#### CSS模板

```css
/*main.css*/
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    html,body {
        @apply min-h-screen;
    }
}
```



## 1列

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



## 2列

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



## 2列（变种）

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



## 2列（长导航）

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



## 3列/圣杯

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



## 卡片

#### Flex

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



## 瀑布

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

