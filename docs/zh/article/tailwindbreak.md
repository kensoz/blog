---
lang: zh-CN
title: Tailwind断点工具
---

# TailwindCSS断点可视化工具

![](https://img.shields.io/badge/-TailwindCSS-9ca3af.svg?logo=tailwindcss&style=popout-square)  ![](https://img.shields.io/badge/-CSS-9ca3af.svg?logo=css3&style=popout-square)



📡 [掘金](https://juejin.cn/post/7176936538847232056)  [思否](https://segmentfault.com/a/1190000043080658)



## 环境

+ Chrome
+ TailwindCSS `3`



## Demo

用Vue.js实装，改变屏幕尺寸就能得到当前屏幕信息，建议使用[CodePen](https://codepen.io/kensoz/pen/QWrXmNv)查看

🌐 [CodePen](https://codepen.io/kensoz/pen/QWrXmNv)



## Code

Vue.js

```vue
<template>
	<div id="app">
		<main class="flex flex-col m-5">
			<div class="flex flex-row mb-3">
				<div>{{ width }} x {{ height }}</div>
				<button class="ml-5 font-bold" @click="lai()">Get Codepen Screen Size</button>
			</div>

			<div class="flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
				<div class="mr-5">
					base/xs =
					<span class="font-bold">~639px</span>
				</div>
				<ul class="list-disc list-inside">
					<li>iphone se ↑</li>
					<li>iphone 7 ↑</li>
					<li>iphone 12 pro ↑</li>
				</ul>
			</div>

			<div class="hidden sm:flex md:hidden lg:hidden xl:hidden 2xl:hidden">
				<div class="mr-5">
					sm(min-width:640px) =
					<span class="font-bold">640px~767px</span>
				</div>
				<ul class="list-disc list-inside">
					<li>iphone se ←</li>
					<li>iphone 7 ←</li>
				</ul>
			</div>

			<div class="hidden sm:hidden md:flex lg:hidden xl:hidden 2xl:hidden">
				<div class="mr-5">
					md(min-width:768px) =
					<span class="font-bold">768px~1023px</span>
				</div>
				<ul class="list-disc list-inside">
					<li>ipad mini ↑</li>
					<li>ipad ↑</li>
				</ul>
			</div>

			<div class="hidden sm:hidden md:hidden lg:flex xl:hidden 2xl:hidden">
				<div class="mr-5">
					lg(min-width:1024px) =
					<span class="font-bold">1024px~1279px</span>
				</div>
				<ul class="list-disc list-inside">
					<li>ipad mini ←</li>
					<li>ipad ←</li>
					<li>ipad pro ↑</li>
				</ul>
			</div>

			<div class="hidden sm:hidden md:hidden lg:hidden xl:flex 2xl:hidden">
				<div class="mr-5">
					xl(min-width:1280px) =
					<span class="font-bold">1280px~1535px</span>
				</div>
				<ul class="list-disc list-inside">
					<li>ipad pro ←</li>
					<li>laptop 1366x768 ↑</li>
				</ul>
			</div>

			<div class="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:flex">
				<div class="mr-5">
					2xl(min-width:1536px) =
					<span class="font-bold">1536px~</span>
				</div>
				<ul class="list-disc list-inside">
					<li>laptop　↑</li>
					<li>desktop　↑</li>
				</ul>
			</div>
		</main>
	</div>
</template>

<script setup>
import { ref } from "vue";
let width = ref(window.innerWidth);
let height = ref(window.innerHeight);
const lai = () => {
	width.value = window.innerWidth;
	height.value = window.innerHeight;
};
</script>
```

