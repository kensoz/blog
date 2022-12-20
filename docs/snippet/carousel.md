---
lang: ja-JP
title: CSSカルーセル
---

# CSSカルーセル

![](https://img.shields.io/badge/-HTML-9ca3af.svg?logo=html5&style=popout-square)  ![](https://img.shields.io/badge/-CSS-9ca3af.svg?logo=css3&style=popout-square)



## コード

🌐 [live demo](https://codepen.io/kensoz/pen/VwBwRMw)

HTML

```html
<!-- カルーセル -->
<div id="carousel">
	<ul>
		<li>
			<img src="https://source.unsplash.com/random/1">
		</li>
		<li>
			<img src="https://source.unsplash.com/random/2">
		</li>
		<li>
			<img src="https://source.unsplash.com/random/3">
		</li>
	</ul>
</div>
```

CSS

```css
#carousel {
	width: 500px;
	height: 200px;
	position: relative;
	overflow: hidden;
}

#carousel img {
	width: 500px; 
}

#carousel > ul {
	display: flex; 
	position: absolute; 
}

#carousel > ul,
#carousel > ul > li {
	padding: 0;
	margin: 0;
	list-style: none;
}

#carousel > ul {
	animation: move 5s ease 1s infinite alternate; 
}

#carousel > ul:hover {
	animation-play-state: paused; 
}

@keyframes move {
	0%,
	20% {
		left: 0;
	}
	40%,
	60% {
		left: -500px;
	}
	80%,
	100% {
		left: -1000px;
	}
}
```


