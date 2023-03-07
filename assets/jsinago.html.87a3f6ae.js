import{_ as n,o as s,c as a,e as t}from"./app.a5ec93c6.js";const e={},p=t(`<h1 id="\u30B3\u30FC\u30C6\u3099\u30A3\u30F3\u30AF\u3099\u30C6\u30B9\u30C8\u4E2D\u306Ejs" tabindex="-1"><a class="header-anchor" href="#\u30B3\u30FC\u30C6\u3099\u30A3\u30F3\u30AF\u3099\u30C6\u30B9\u30C8\u4E2D\u306Ejs" aria-hidden="true">#</a> \u30B3\u30FC\u30C7\u30A3\u30F3\u30B0\u30C6\u30B9\u30C8\u4E2D\u306EJS</h1><p><img src="https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&amp;style=popout-square" alt=""> <img src="https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&amp;style=popout-square" alt=""></p><h2 id="\u8A08\u7B97" tabindex="-1"><a class="header-anchor" href="#\u8A08\u7B97" aria-hidden="true">#</a> \u8A08\u7B97</h2><h4 id="_1-\u5947\u5076\u691C\u67FB" tabindex="-1"><a class="header-anchor" href="#_1-\u5947\u5076\u691C\u67FB" aria-hidden="true">#</a> 1.\u5947\u5076\u691C\u67FB</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// even 0</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// odd 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u51AA\u4E57" tabindex="-1"><a class="header-anchor" href="#_2-\u51AA\u4E57" aria-hidden="true">#</a> 2.\u51AA\u4E57</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token operator">**</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 8</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-\u5E73\u65B9\u6839" tabindex="-1"><a class="header-anchor" href="#_3-\u5E73\u65B9\u6839" aria-hidden="true">#</a> 3.\u5E73\u65B9\u6839</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-\u5224\u5B9A\u6574\u6570" tabindex="-1"><a class="header-anchor" href="#_4-\u5224\u5B9A\u6574\u6570" aria-hidden="true">#</a> 4.\u5224\u5B9A\u6574\u6570</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token number">1.2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-\u5E73\u5747\u5024" tabindex="-1"><a class="header-anchor" href="#_5-\u5E73\u5747\u5024" aria-hidden="true">#</a> 5.\u5E73\u5747\u5024</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ava <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y<span class="token punctuation">)</span> <span class="token operator">/</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ava<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-\u7D2F\u52A0" tabindex="-1"><a class="header-anchor" href="#_6-\u7D2F\u52A0" aria-hidden="true">#</a> 6.\u7D2F\u52A0</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sum <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">+</span> y<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-\u6574\u6570\u5024\u3092\u53D6\u308B" tabindex="-1"><a class="header-anchor" href="#_7-\u6574\u6570\u5024\u3092\u53D6\u308B" aria-hidden="true">#</a> 7.\u6574\u6570\u5024\u3092\u53D6\u308B</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>\u3000\u3000<span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_8-\u5929\u4E95\u95A2\u6570" tabindex="-1"><a class="header-anchor" href="#_8-\u5929\u4E95\u95A2\u6570" aria-hidden="true">#</a> 8.\u5929\u4E95\u95A2\u6570</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>\u3000\u3000<span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_9-\u5E8A\u95A2\u6570" tabindex="-1"><a class="header-anchor" href="#_9-\u5E8A\u95A2\u6570" aria-hidden="true">#</a> 9.\u5E8A\u95A2\u6570</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>\u3000\u3000<span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_10-\u56DB\u6368\u4E94\u5165" tabindex="-1"><a class="header-anchor" href="#_10-\u56DB\u6368\u4E94\u5165" aria-hidden="true">#</a> 10.\u56DB\u6368\u4E94\u5165</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span>\u3000\u3000<span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_11-\u5270\u4F59" tabindex="-1"><a class="header-anchor" href="#_11-\u5270\u4F59" aria-hidden="true">#</a> 11.\u5270\u4F59</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">6</span><span class="token operator">%</span><span class="token number">4</span>\u3000\u3000<span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_12-\u56DB\u6368\u4E94\u5165-\u56FA\u5B9A\u5C0F\u6570\u70B9" tabindex="-1"><a class="header-anchor" href="#_12-\u56DB\u6368\u4E94\u5165-\u56FA\u5B9A\u5C0F\u6570\u70B9" aria-hidden="true">#</a> 12.\u56DB\u6368\u4E94\u5165&amp;\u56FA\u5B9A\u5C0F\u6570\u70B9</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> num <span class="token operator">=</span><span class="token number">2.446242342</span><span class="token punctuation">;</span>
num <span class="token operator">=</span> num<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u8F93\u51FA\u7ED3\u679C\u4E3A 2.45</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_13-\u7EDD\u5BF9\u503C" tabindex="-1"><a class="header-anchor" href="#_13-\u7EDD\u5BF9\u503C" aria-hidden="true">#</a> 13.\u7EDD\u5BF9\u503C</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6587\u5B57\u5217" tabindex="-1"><a class="header-anchor" href="#\u6587\u5B57\u5217" aria-hidden="true">#</a> \u6587\u5B57\u5217</h2><h4 id="_1-\u6587\u5B57\u5217\u2192\u914D\u5217" tabindex="-1"><a class="header-anchor" href="#_1-\u6587\u5B57\u5217\u2192\u914D\u5217" aria-hidden="true">#</a> 1.\u6587\u5B57\u5217\u2192\u914D\u5217</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token string">&quot;MCMXCIV&quot;</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;M&quot;,&quot;C&quot;,&quot;M&quot;,&quot;X&quot;,&quot;C&quot;,&quot;I&quot;,&quot;V&quot;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u30D5\u3099\u30E9\u30F3\u30AF\u524A\u9664" tabindex="-1"><a class="header-anchor" href="#_2-\u30D5\u3099\u30E9\u30F3\u30AF\u524A\u9664" aria-hidden="true">#</a> 2.\u30D6\u30E9\u30F3\u30AF\u524A\u9664</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;M CMXCI V&quot;</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\s*</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;MCMXCIV&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-\u5927\u6587\u5B57\u5C0F\u6587\u5B57" tabindex="-1"><a class="header-anchor" href="#_3-\u5927\u6587\u5B57\u5C0F\u6587\u5B57" aria-hidden="true">#</a> 3.\u5927\u6587\u5B57\u5C0F\u6587\u5B57</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;sTR&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;STR&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;str&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-\u6587\u5B57\u5217\u691C\u7D22" tabindex="-1"><a class="header-anchor" href="#_4-\u6587\u5B57\u5217\u691C\u7D22" aria-hidden="true">#</a> 4.\u6587\u5B57\u5217\u691C\u7D22</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;MCMXCIV&quot;</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&quot;MC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-\u30B9\u30CD\u30FC\u30AF\u30B1\u30FC\u30B9\u2192\u30AD\u30E3\u30E1\u30EB\u30B1\u30FC\u30B9" tabindex="-1"><a class="header-anchor" href="#_5-\u30B9\u30CD\u30FC\u30AF\u30B1\u30FC\u30B9\u2192\u30AD\u30E3\u30E1\u30EB\u30B1\u30FC\u30B9" aria-hidden="true">#</a> 5.\u30B9\u30CD\u30FC\u30AF\u30B1\u30FC\u30B9\u2192\u30AD\u30E3\u30E1\u30EB\u30B1\u30FC\u30B9</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">camelize</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">-(\\w)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>c <span class="token operator">?</span> c<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">camelize</span><span class="token punctuation">(</span><span class="token string">&quot;as-d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &quot;asD&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-\u30AD\u30E3\u30E1\u30EB\u30B1\u30FC\u30B9\u2192\u30B9\u30CD\u30FC\u30AF\u30B1\u30FC\u30B9" tabindex="-1"><a class="header-anchor" href="#_6-\u30AD\u30E3\u30E1\u30EB\u30B1\u30FC\u30B9\u2192\u30B9\u30CD\u30FC\u30AF\u30B1\u30FC\u30B9" aria-hidden="true">#</a> 6.\u30AD\u30E3\u30E1\u30EB\u30B1\u30FC\u30B9\u2192\u30B9\u30CD\u30FC\u30AF\u30B1\u30FC\u30B9</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">hyphenate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\B([A-Z])</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>reg<span class="token punctuation">,</span> <span class="token string">&quot;-$1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">hyphenate</span><span class="token punctuation">(</span><span class="token string">&quot;asD&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;as-d&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-\u6587\u5B57\u5217\u306E\u6700\u521D\u306E\u6587\u5B57\u3092\u5927\u6587\u5B57\u306B\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#_7-\u6587\u5B57\u5217\u306E\u6700\u521D\u306E\u6587\u5B57\u3092\u5927\u6587\u5B57\u306B\u3059\u308B" aria-hidden="true">#</a> 7.\u6587\u5B57\u5217\u306E\u6700\u521D\u306E\u6587\u5B57\u3092\u5927\u6587\u5B57\u306B\u3059\u308B</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">big</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">big</span><span class="token punctuation">(</span><span class="token string">&quot;asd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;Asd&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-\u53CD\u8EE2" tabindex="-1"><a class="header-anchor" href="#_8-\u53CD\u8EE2" aria-hidden="true">#</a> 8.\u53CD\u8EE2</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">&quot;lai&quot;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// &quot;ial&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u5217" tabindex="-1"><a class="header-anchor" href="#\u914D\u5217" aria-hidden="true">#</a> \u914D\u5217</h2><h4 id="_1-\u53CD\u8EE2" tabindex="-1"><a class="header-anchor" href="#_1-\u53CD\u8EE2" aria-hidden="true">#</a> 1.\u53CD\u8EE2</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [3,2,1]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u914D\u5217\u3092\u7D50\u5408\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u5217\u3092\u7D50\u5408\u3059\u308B" aria-hidden="true">#</a> 2.\u914D\u5217\u3092\u7D50\u5408\u3059\u308B</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">,</span> <span class="token operator">...</span>arr2<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [1,2,3,4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-\u91CD\u8907\u6392\u9664" tabindex="-1"><a class="header-anchor" href="#_3-\u91CD\u8907\u6392\u9664" aria-hidden="true">#</a> 3.\u91CD\u8907\u6392\u9664</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> newArr <span class="token operator">=</span> <span class="token punctuation">[</span> <span class="token operator">...</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>newArr<span class="token punctuation">)</span> <span class="token comment">// [1,2,3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-\u5024\u304B\u30991\u306E\u9577\u3055n\u306E\u914D\u5217\u3092\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#_4-\u5024\u304B\u30991\u306E\u9577\u3055n\u306E\u914D\u5217\u3092\u751F\u6210" aria-hidden="true">#</a> 4.\u5024\u304C1\u306E\u9577\u3055n\u306E\u914D\u5217\u3092\u751F\u6210</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-\u914D\u5217\u306E\u5024\u306E\u30A4\u30B3\u30FC\u30EB\u5224\u5B9A" tabindex="-1"><a class="header-anchor" href="#_5-\u914D\u5217\u306E\u5024\u306E\u30A4\u30B3\u30FC\u30EB\u5224\u5B9A" aria-hidden="true">#</a> 5.\u914D\u5217\u306E\u5024\u306E\u30A4\u30B3\u30FC\u30EB\u5224\u5B9A</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6B63\u898F\u8868\u73FE" tabindex="-1"><a class="header-anchor" href="#\u6B63\u898F\u8868\u73FE" aria-hidden="true">#</a> \u6B63\u898F\u8868\u73FE</h2><h4 id="_1-ng\u30EF\u30FC\u30EB\u30C8\u3099" tabindex="-1"><a class="header-anchor" href="#_1-ng\u30EF\u30FC\u30EB\u30C8\u3099" aria-hidden="true">#</a> 1.NG\u30EF\u30FC\u30EB\u30C9</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">NG</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;fuck&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;NG&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">const</span> lai <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lai<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;fuck&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>lai<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">&quot;NG&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,60),o=[p];function c(u,i){return s(),a("div",null,o)}var r=n(e,[["render",c],["__file","jsinago.html.vue"]]);export{r as default};
