import{_ as p,o as e,c as l,a as n,d as c,e as s,b as a,r as o}from"./app.a5ec93c6.js";const i={},u=s('<h1 id="\u7EAFcss\u8F6E\u64AD" tabindex="-1"><a class="header-anchor" href="#\u7EAFcss\u8F6E\u64AD" aria-hidden="true">#</a> \u7EAFCSS\u8F6E\u64AD</h1><p><img src="https://img.shields.io/badge/-HTML-9ca3af.svg?logo=html5&amp;style=popout-square" alt=""> <img src="https://img.shields.io/badge/-CSS-9ca3af.svg?logo=css3&amp;style=popout-square" alt=""></p><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2>',3),r=a("\u{1F310} "),d={href:"https://codepen.io/kensoz/pen/VwBwRMw",target:"_blank",rel:"noopener noreferrer"},k=a("live demo"),v=s(`<p>HTML</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>carousel<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://source.unsplash.com/random/1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://source.unsplash.com/random/2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://source.unsplash.com/random/3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CSS</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">#carousel</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
	<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
	<span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
	<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#carousel img</span> <span class="token punctuation">{</span>
	<span class="token property">width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token selector">#carousel &gt; ul</span> <span class="token punctuation">{</span>
	<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span> 
	<span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token selector">#carousel &gt; ul,
#carousel &gt; ul &gt; li</span> <span class="token punctuation">{</span>
	<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#carousel &gt; ul</span> <span class="token punctuation">{</span>
	<span class="token property">animation</span><span class="token punctuation">:</span> move 5s ease 1s infinite alternate<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token selector">#carousel &gt; ul:hover</span> <span class="token punctuation">{</span>
	<span class="token property">animation-play-state</span><span class="token punctuation">:</span> paused<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@keyframes</span> move</span> <span class="token punctuation">{</span>
	<span class="token selector">0%,
	20%</span> <span class="token punctuation">{</span>
		<span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">40%,
	60%</span> <span class="token punctuation">{</span>
		<span class="token property">left</span><span class="token punctuation">:</span> -500px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token selector">80%,
	100%</span> <span class="token punctuation">{</span>
		<span class="token property">left</span><span class="token punctuation">:</span> -1000px<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function m(g,b){const t=o("ExternalLinkIcon");return e(),l("div",null,[u,n("p",null,[r,n("a",d,[k,c(t)])]),v])}var _=p(i,[["render",m],["__file","carousel.html.vue"]]);export{_ as default};
