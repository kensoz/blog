import{_ as e,o,c as p,a as s,d as t,b as n,e as c,r as i}from"./app.a5ec93c6.js";const l={},u=s("h1",{id:"vitest\u306B\u3088\u3063\u3066vue\u30B3\u30F3\u30DB\u309A\u30FC\u30CD\u30F3\u30C8\u4E2D\u306Eaxios\u3092\u30C6\u30B9\u30C8",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#vitest\u306B\u3088\u3063\u3066vue\u30B3\u30F3\u30DB\u309A\u30FC\u30CD\u30F3\u30C8\u4E2D\u306Eaxios\u3092\u30C6\u30B9\u30C8","aria-hidden":"true"},"#"),n(" Vitest\u306B\u3088\u3063\u3066Vue\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u4E2D\u306EAxios\u3092\u30C6\u30B9\u30C8")],-1),r=s("p",null,[s("img",{src:"https://img.shields.io/badge/-Vite-9ca3af.svg?logo=vite&style=popout-square",alt:""}),n(),s("img",{src:"https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=vue.js&style=popout-square",alt:""})],-1),d=n("\u{1F4E1} "),k={href:"https://qiita.com/kensoz/items/cd5bcd644d8ac3fd6774",target:"_blank",rel:"noopener noreferrer"},v=n("Qiita"),m=s("h2",{id:"_1-vitest\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-vitest\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB","aria-hidden":"true"},"#"),n(" 1.Vitest\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB")],-1),h={href:"https://vitest.dev/guide/#adding-vitest-to-your-project",target:"_blank",rel:"noopener noreferrer"},b=n("\u516C\u5F0F\u30B5\u30A4\u30C8"),_=n("\u306B\u53C2\u7167"),g=c(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D vitest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>vue-test-utils</code>\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u306A\u3051\u308C\u3070\u3001\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D @vue/test-utils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528" aria-hidden="true">#</a> 2.\u4F7F\u7528</h2><p>\u30C6\u30B9\u30C8\u30D5\u30A1\u30A4\u30EB\u306B\u3066<br> \u4F8B\u3048\u3070\u3001\u30C6\u30B9\u30C8\u3057\u305F\u3044Vue\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092<code>mounted</code>\u3059\u308B\u3068<code>/api/v1/test</code>\u306B<code>post</code>\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u3057\u307E\u3059</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> test<span class="token punctuation">,</span> expect<span class="token punctuation">,</span> vi <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitest&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> mount <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/test-utils&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;@/components/Components.vue&#39;</span>

<span class="token comment">// \u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u30EC\u30B9\u30DD\u30F3\u30B9\u3001\u30E2\u30C3\u30AF\u30C7\u30FC\u30BF</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span> message<span class="token operator">:</span> <span class="token string">&#39;data\u53D6\u5F97\u6210\u529F&#39;</span> <span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// axios\u3092\u76E3\u8996\u3057\u3066\u3001\u30EC\u30B9\u30DD\u30F3\u30B9\u306E\u30E2\u30C3\u30AF\u30C7\u30FC\u30BF\u3092\u8A2D\u5B9A</span>
    <span class="token keyword">const</span> spyPost <span class="token operator">=</span> <span class="token keyword">await</span> vi<span class="token punctuation">.</span><span class="token function">spyOn</span><span class="token punctuation">(</span>axios<span class="token punctuation">,</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mockResolvedValue</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token comment">// \u30C6\u30B9\u30C8\u3057\u305F\u3044Vue\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u4F7F\u3046</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">mount</span><span class="token punctuation">(</span>Components\uFF09
    <span class="token comment">// \u30EA\u30AF\u30A8\u30B9\u30C8\u30D1\u30E9\u30E1\u30FC\u30BF\u306E\u30E2\u30C3\u30AF\u30C7\u30FC\u30BF                      </span>
    <span class="token keyword">const</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">}</span>
    <span class="token comment">// post\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u30E2\u30C3\u30AF\u3057\u3066\u691C\u8A3C</span>
    <span class="token function">expect</span><span class="token punctuation">(</span>axios<span class="token punctuation">.</span>post<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token string">&#39;/api/v1/test&#39;</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span>
    <span class="token comment">// \u30EA\u30AF\u30A8\u30B9\u30C8\u306E\u30EC\u30B9\u30DD\u30F3\u30B9\u3092\u691C\u8A3C</span>
    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>res <span class="token operator">=&gt;</span> res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token comment">// axios\u76E3\u8996\u3092\u30AF\u30EA\u30A2</span>
    spyPost<span class="token punctuation">.</span><span class="token function">mockRestore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function f(y,x){const a=i("ExternalLinkIcon");return o(),p("div",null,[u,r,s("p",null,[d,s("a",k,[v,t(a)])]),m,s("p",null,[s("a",h,[b,t(a)]),_]),g])}var V=e(l,[["render",f],["__file","vitest.html.vue"]]);export{V as default};
