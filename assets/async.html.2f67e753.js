import{_ as p,o,c,a as n,d as e,e as a,b as s,r as i}from"./app.a5ec93c6.js";const l={},u=a('<h1 id="js\u975E\u540C\u671F\u95A2\u6570\u306E\u5B9F\u884C\u9806\u756A" tabindex="-1"><a class="header-anchor" href="#js\u975E\u540C\u671F\u95A2\u6570\u306E\u5B9F\u884C\u9806\u756A" aria-hidden="true">#</a> JS\u975E\u540C\u671F\u95A2\u6570\u306E\u5B9F\u884C\u9806\u756A</h1><p><img src="https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&amp;style=popout-square" alt=""> <img src="https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&amp;style=popout-square" alt=""></p><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2>',3),r=s("\u{1F310} "),k={href:"https://codepen.io/kensoz/pen/QWgMMJN",target:"_blank",rel:"noopener noreferrer"},d=s("live demo"),m=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1.new\u306E\u66F8\u304D\u65B9</span>
<span class="token comment">// \u4E8C\u3064\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306F\u56FA\u5B9A\u3067\u3001\u6210\u529F\u306E\u6642\u306Fresolve \u5931\u6557\u306E\u6642\u306Freject</span>
<span class="token comment">// \u305D\u306E\u4E8C\u3064\u306E\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u5F79\u306F\u7D50\u679C\u3092\u8FD4\u3059\u3001\u6210\u529F\u304B\u5931\u6557\u306E\u6642\u306B\u3084\u308A\u305F\u3044\u3053\u3068\u306F\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u30E1\u30BD\u30C3\u30C9\u4E2D\u3067\u66F8\u304F</span>

<span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>	
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span> <span class="token comment">// \u3084\u308A\u305F\u3044\u3053\u3068\u3092\u66F8\u304F\u3001axios\u30EA\u30AF\u30A8\u30B9\u30C8\u306A\u3069</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u6210\u529F\u306E\u6642</span>
  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B8C\u4E86&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u5931\u6557\u306E\u6642\uFF08\u672C\u30B5\u30F3\u30D7\u30EB\u306F\u5931\u6557\u3057\u306A\u3044\u8A2D\u5B9A\uFF09</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token comment">// \u975E\u540C\u671F\u306A\u306E\u3067\u3001\u30A4\u30D9\u30F3\u30C8\u30D5\u30ED\u30FC\u306E\u4ED6\u306E\u95A2\u6570\u306F\u5148\u306B\u5B9F\u884C</span>

<span class="token comment">//promise\u306E\u5229\u7528\u3002\u6210\u529F\u306E\u6642\u306Fthen\u3092\u4F7F\u3046\u3001\u5931\u6557\u306E\u6642\u306Fcatch\u3092\u4F7F\u3046\u3001</span>
<span class="token comment">// catch\u306F\u7701\u7565\u53EF\u80FD\u3002finally\u306F\u3069\u3093\u306A\u72B6\u6CC1\u3067\u3082\u5FC5\u305A\u5B9F\u884C</span>
promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;ok:&quot;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> 
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;no:&quot;</span> <span class="token operator">+</span>error<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;finally&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 
<span class="token comment">// \u975E\u540C\u671F\u306A\u306E\u3067\u3001\u30A4\u30D9\u30F3\u30C8\u30D5\u30ED\u30FC\u306E\u4ED6\u306E\u95A2\u6570\u306F\u5148\u306B\u5B9F\u884C</span>

<span class="token comment">// \u5B9F\u884C\u306E\u9806\u756A</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// &quot;ok:a&quot;</span>
<span class="token comment">// &quot;finally&quot;</span>

<span class="token comment">// 2.\u95A2\u6570\u306E\u66F8\u304D\u65B9</span>
<span class="token keyword">function</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token parameter">ms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> ms<span class="token punctuation">,</span> <span class="token string">&#39;done&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5229\u7528</span>
<span class="token function">timeout</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;done&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="async-await" tabindex="-1"><a class="header-anchor" href="#async-await" aria-hidden="true">#</a> Async&amp;Await</h2><h6 id="sample-1" tabindex="-1"><a class="header-anchor" href="#sample-1" aria-hidden="true">#</a> Sample.1</h6>`,3),v=s("\u{1F310} "),b={href:"https://codepen.io/kensoz/pen/GREvONv",target:"_blank",rel:"noopener noreferrer"},f=s("live demo"),g=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// await\u306B\u7D9A\u304F\u95A2\u6570\u307E\u305F\u306F\u5024\u304Cpromise\u3067\u306A\u3044\u5834\u5408\u306F\u3001\u3059\u3050\u306B\u5B9F\u884C</span>
<span class="token keyword">function</span> <span class="token function">getSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;res&quot;</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span>

<span class="token comment">// await\u306E\u5F8C\u306Bpromise\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u304C\u7D9A\u304F\u5834\u5408\u3001async\u95A2\u6570\u306E\u5B9F\u884C\u3092\u505C\u6B62\u3057\u3001promise\u306E\u5B9F\u884C\u3092\u5F85\u6A5F</span>
<span class="token keyword">function</span> <span class="token function">testAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;hello async&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 

<span class="token comment">// \u5229\u7528</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> v1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> v2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">testAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> v1 <span class="token operator">+</span> v2
<span class="token punctuation">}</span>

<span class="token comment">// promise\u307F\u305F\u3044\u306Athen\u3067\u7D50\u679C\u3092\u51E6\u7406</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
<span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// \u975E\u540C\u671Fasync\u304C\u3042\u308A\u307E\u3059\u306E\u3067\u3001\u5148\u306B\u5B9F\u884C</span>

<span class="token comment">// \u5B9F\u884C\u306E\u9806\u756A</span>
<span class="token comment">// 2</span>
<span class="token comment">// &quot;res&quot; &quot;hello async&quot;</span>
<span class="token comment">// 1</span>
<span class="token comment">// &quot;reshello async&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="sample-2" tabindex="-1"><a class="header-anchor" href="#sample-2" aria-hidden="true">#</a> Sample.2</h6>`,2),h=s("\u{1F310} "),y={href:"https://codepen.io/kensoz/pen/QWqMzZP",target:"_blank",rel:"noopener noreferrer"},q=s("live demo"),_=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// start!</span>

<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">const</span> <span class="token function-variable function">c1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  num <span class="token operator">=</span> e
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;c1&#39;</span> <span class="token operator">+</span> num<span class="token punctuation">)</span> 
\u3000<span class="token comment">// await\u306F\u5B9F\u884C\u3055\u308C\u305F</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">f1</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;f1-1&#39;</span> <span class="token operator">+</span> num<span class="token punctuation">)</span> 
  <span class="token comment">// await\u3092\u5B9F\u884C\u3059\u308B\u524D\u306B\u5B9F\u884C</span>
  
  <span class="token keyword">await</span> <span class="token function">c1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;f1-2&#39;</span><span class="token punctuation">)</span>
 
  <span class="token keyword">await</span> <span class="token function">c1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;f1-3&#39;</span><span class="token punctuation">)</span>
	
  num <span class="token operator">=</span> <span class="token number">2</span>	
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;f1-4&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;before async&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// async\u3092\u5B9F\u884C\u3059\u308B\u524D\u306B\u5B9F\u884C</span>

<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u5B9F\u884C\u306E\u9806\u756A</span>
<span class="token comment">// &quot;start&quot;</span>
<span class="token comment">// &quot;before async&quot;</span>
<span class="token comment">// &quot;f1-10&quot;</span>
<span class="token comment">// &quot;c11&quot;</span>
<span class="token comment">// 1</span>
<span class="token comment">// &quot;end&quot;</span>
<span class="token comment">// 1</span>
<span class="token comment">// &quot;f1-2&quot;</span>
<span class="token comment">// &quot;c11&quot;</span>
<span class="token comment">// 1</span>
<span class="token comment">// &quot;f1-3&quot;</span>
<span class="token comment">// 2</span>
<span class="token comment">// &quot;f1-4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function w(j,x){const t=i("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[r,n("a",k,[d,e(t)])]),m,n("p",null,[v,n("a",b,[f,e(t)])]),g,n("p",null,[h,n("a",y,[q,e(t)])]),_])}var S=p(l,[["render",w],["__file","async.html.vue"]]);export{S as default};
