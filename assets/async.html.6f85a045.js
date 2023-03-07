import{_ as p,o,c,a as n,d as e,e as a,b as s,r as i}from"./app.a5ec93c6.js";const l={},u=a('<h1 id="js\u5F02\u6B65\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#js\u5F02\u6B65\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a> JS\u5F02\u6B65\u51FD\u6570\u7684\u6267\u884C\u987A\u5E8F</h1><p><img src="https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&amp;style=popout-square" alt=""> <img src="https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&amp;style=popout-square" alt=""></p><h2 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h2>',3),r=s("\u{1F310} "),k={href:"https://codepen.io/kensoz/pen/QWgMMJN",target:"_blank",rel:"noopener noreferrer"},d=s("live demo"),m=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1.new\u5199\u6CD5</span>
<span class="token comment">// \u5176\u4E2D\u4E24\u4E2A\u53C2\u6570\u662F\u56FA\u5B9A\u7684\uFF0C\u4E00\u4E2A\u662F\u6210\u529Fresolve \u4E00\u4E2A\u662F\u5931\u8D25reject</span>
<span class="token comment">// \u4E5F\u53EF\u4EE5\u5B9A\u4E49\u7A7A\u7684\u5982let p = Promise.resolve();</span>
<span class="token comment">// \u8FD9\u4E24\u4E2A\u53C2\u6570\u7684\u7528\u9014\u4E0D\u662F\u53C2\u4E0E\u5230\u5904\u7406\u800C\u662F\u628A\u7ED3\u679C\u8FD4\u56DE\u51FA\u53BB\uFF0C\u6CA1\u9519\u6700\u540E\u8FD0\u884C\u7684\u7ED3\u679C\u8981\u586B\u5728\u8FD9\u4E24\u4E2A\u51FD\u6570\u4E2D</span>
<span class="token comment">// \u5982\u4E0B\uFF0Cresolve\u628A\u8BA1\u7B97\u7ED3\u679Ca\u8FD4\u56DE\u4E86\u51FA\u53BB\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u7701\u7565reject,\u4F46\u662F\u51FA\u9519\u7684\u8BDD\u4F1A\u5728\u4E0B\u9762\u8D70catch</span>

<span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>	
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span> <span class="token comment">// \u4F60\u8981\u505A\u7684\u5904\u7406\u5C31\u5199\u5728\u8FD9\uFF0Caxios\u4EC0\u4E48\u7684</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u6210\u529F\u7ED3\u679C\u653E\u5230resolve\u91CC\uFF0C\u8FD9\u5C31\u662F\u51FD\u6570\u7684\u8FD4\u56DE\u503C</span>
  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B8C\u4E86&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u5931\u8D25\u7ED3\u679C\u653E\u5230reject\u91CC\uFF0C\u8FD9\u5C31\u662F\u51FD\u6570\u7684\u8FD4\u56DE\u503C</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> 
<span class="token comment">// \u56E0\u4E3A\u662F\u5F02\u6B65\u51FD\u6570\uFF0C\u6240\u4EE5\u4E8B\u4EF6\u6D41\u4E2D\u7684\u5176\u4ED6\u51FD\u6570\u4F1A\u5148\u6267\u884C</span>

<span class="token comment">// \u4E0B\u9762\u662F\u4F7F\u7528promise\u51FD\u6570\uFF0C\u901A\u8FC7then\u65B9\u6CD5\u6765\u63A5\u6536\u6210\u529F\u7684\u8FD4\u56DE\u503C\uFF0C\u901A\u8FC7catch\u65B9\u6CD5\u6765\u63A5\u6536\u5931\u8D25\u7684\u8FD4\u56DE\u503C</span>
<span class="token comment">// catch\u53EF\u4EE5\u7701\u7565\u3002finally\u51FD\u6570\u662F\u65E0\u8BBA\u4EC0\u4E48\u7ED3\u679C\u90FD\u4F1A\u6267\u884C</span>
promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token parameter">value</span> <span class="token operator">=&gt;</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;ok:&quot;</span> <span class="token operator">+</span> value<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span> <span class="token parameter">error</span> <span class="token operator">=&gt;</span> 
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;no:&quot;</span> <span class="token operator">+</span>error<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;finally&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> 
<span class="token comment">// \u56E0\u4E3A\u662F\u5F02\u6B65\u51FD\u6570\uFF0C\u6240\u4EE5\u4E8B\u4EF6\u6D41\u4E2D\u7684\u5176\u4ED6\u51FD\u6570\u4F1A\u5148\u6267\u884C</span>

<span class="token comment">// \u6267\u884C\u7684\u987A\u5E8F</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// &quot;ok:a&quot;</span>
<span class="token comment">// &quot;finally&quot;</span>

<span class="token comment">// 2.\u51FD\u6570\u5199\u6CD5\uFF0Cpromise\u51FD\u6570\u4F5C\u4E3A\u533F\u540D\u51FD\u6570\u7528\u7BAD\u5934\u51FD\u6570\u7684\u5F62\u5F0F\u6765\u5199</span>
<span class="token keyword">function</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token parameter">ms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8FD9\u91CC\u7684\u5B9A\u65F6\u5668\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3Aresolve\u51FD\u6570\uFF0C\u7B2C\u4E8C\u4E2A\u4E3A\u65F6\u95F4\uFF0C\u7B2C\u4E09\u4E2A\u4E3A\u4F20\u5165resolve\u7684\u53C2\u6570\u6216\u503C\uFF0C\u4E5F\u662F\u8FD4\u56DE\u503C</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> ms<span class="token punctuation">,</span> <span class="token string">&#39;done&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8C03\u7528</span>
<span class="token function">timeout</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// &quot;done&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="async-await" tabindex="-1"><a class="header-anchor" href="#async-await" aria-hidden="true">#</a> Async&amp;Await</h2><h6 id="sample-1" tabindex="-1"><a class="header-anchor" href="#sample-1" aria-hidden="true">#</a> Sample.1</h6>`,3),v=s("\u{1F310} "),b={href:"https://codepen.io/kensoz/pen/GREvONv",target:"_blank",rel:"noopener noreferrer"},f=s("live demo"),g=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// async\u662F\u4EC0\u4E48\u610F\u601D\uFF1F\u53EF\u4EE5\u7406\u89E3\u4E3A\u58F0\u660E\u4E86\u4E00\u4E2A\u5F02\u6B65\u533A\u57DF\uFF0C\u6574\u4F53\u7684\u8FD4\u56DE\u503C\u662F\u4E00\u4E2Apromise\u5BF9\u8C61</span>
<span class="token comment">// await\u662F\u4EC0\u4E48\u610F\u601D\uFF1Fasync\u6240\u8981\u6267\u884C\u7684\u4E1C\u897F</span>

<span class="token comment">// \u5982\u679Cawait\u540E\u9762\u7684\u51FD\u6570\u6216\u503C\u4E0D\u662Fpromise\uFF0C\u90A3\u4E48\u4ED6\u5C31\u4F1A\u7ACB\u5373\u6267\u884C</span>
<span class="token keyword">function</span> <span class="token function">getSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&quot;res&quot;</span><span class="token punctuation">;</span> <span class="token comment">//\u4E00\u4E2A\u666E\u901A\u7684\u51FD\u6570\uFF0C\u4F1A\u7ACB\u5373\u6267\u884C</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5982\u679Cawait\u540E\u9762\u662F\u4E00\u4E2Apromise\u5BF9\u8C61\uFF0C\u90A3\u4E48\u4ED6\u5C31\u4F1A\u505C\u6B62async\u51FD\u6570\u7684\u6267\u884C\uFF0C\u7B49\u8FD9\u4E2Apromise\u6267\u884C\u4E4B\u540E</span>
<span class="token keyword">function</span> <span class="token function">testAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&quot;hello async&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token punctuation">}</span> 

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> v1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> v2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">testAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u56E0\u4E3Aasync\u51FD\u6570\u5185\u6709promise\u5BF9\u8C61\u9700\u8981\u6267\u884C\uFF0C\u6240\u4EE5\u4ED6\u540E\u6267\u884C</span>
	<span class="token keyword">return</span> v1 <span class="token operator">+</span> v2 <span class="token comment">// \u53EF\u4EE5async\u51FD\u6570\u5185\u5904\u7406\u4E00\u4E9B\u64CD\u4F5C\u5E76\u8D4B\u503C\uFF0C\u4E5F\u53EF\u4EE5\u628A\u7ED3\u679Creturn\u51FA\u53BB\uFF0C\u6CE8\u610F\u4ED6\u4F1A\u53D8\u6210promise\u5BF9\u8C61</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5982\u679Casync\u51FD\u6570\u6709\u8FD4\u56DE\u503C\uFF0C\u90A3\u4E48\u5C31\u7528then\u6765\u63A5\u6536\uFF0C\u5C31\u50CFpromise\u4E00\u6837\u5904\u7406</span>
<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
<span class="token parameter">res</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u56E0\u4E3Aasync\u51FD\u6570\u5185\u6709promise\u5BF9\u8C61\u9700\u8981\u6267\u884C\uFF0C\u6240\u4EE5\u4ED6\u5148\u6267\u884C</span>

<span class="token comment">// \u6267\u884C\u7684\u987A\u5E8F</span>
<span class="token comment">// 2</span>
<span class="token comment">// &quot;res&quot; &quot;hello async&quot;</span>
<span class="token comment">// 1</span>
<span class="token comment">// &quot;reshello async&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="sample-2" tabindex="-1"><a class="header-anchor" href="#sample-2" aria-hidden="true">#</a> Sample.2</h6>`,2),h=s("\u{1F310} "),y={href:"https://codepen.io/kensoz/pen/QWqMzZP",target:"_blank",rel:"noopener noreferrer"},q=s("live demo"),_=a(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;start&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u5F00\u59CB</span>

<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">const</span> <span class="token function-variable function">c1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  num <span class="token operator">=</span> e
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;c1&#39;</span> <span class="token operator">+</span> num<span class="token punctuation">)</span> 
  <span class="token comment">// \u6267\u884Cawait</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">f1</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;f1-1&#39;</span> <span class="token operator">+</span> num<span class="token punctuation">)</span> 
  <span class="token comment">// \u8FDB\u5165\u5185\u90E8\u6839\u636E\u987A\u5E8F\uFF0C\u5148\u6267\u884C</span>
  
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
<span class="token comment">// \u8C03\u7528\u524D\u7684\u80AF\u5B9A\u5148\u51FA\u73B0</span>

<span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> 
<span class="token comment">// \u89E6\u53D1await\u540E\uFF0Casync\u8FDB\u5165\u6B7B\u533A\uFF0C\u5916\u90E8\u51FD\u6570\u5148\u6267\u884C</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u6267\u884C\u7684\u987A\u5E8F</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function w(j,x){const t=i("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[r,n("a",k,[d,e(t)])]),m,n("p",null,[v,n("a",b,[f,e(t)])]),g,n("p",null,[h,n("a",y,[q,e(t)])]),_])}var P=p(l,[["render",w],["__file","async.html.vue"]]);export{P as default};
