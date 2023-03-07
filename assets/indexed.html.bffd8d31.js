import{_ as p,o,c,a as n,d as e,e as a,b as s,r as i}from"./app.a5ec93c6.js";const l={},u=a('<h1 id="typescript-indexeddb\u3066\u3099\u30ED\u30AF\u3099\u3092\u4FDD\u5B58\u3068\u51FA\u529B\u3002js-ts\u3001vue\u3068react\u306B\u9069\u7528\u3059\u308B" tabindex="-1"><a class="header-anchor" href="#typescript-indexeddb\u3066\u3099\u30ED\u30AF\u3099\u3092\u4FDD\u5B58\u3068\u51FA\u529B\u3002js-ts\u3001vue\u3068react\u306B\u9069\u7528\u3059\u308B" aria-hidden="true">#</a> [TypeScript]IndexedDB\u3067\u30ED\u30B0\u3092\u4FDD\u5B58\u3068\u51FA\u529B\u3002JS/TS\u3001Vue\u3068React\u306B\u9069\u7528\u3059\u308B</h1><p><img src="https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&amp;style=popout-square" alt=""> <img src="https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&amp;style=popout-square" alt=""> <img src="https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=Vue.js&amp;style=popout-square" alt=""> <img src="https://img.shields.io/badge/-React.js-9ca3af.svg?logo=react&amp;style=popout-square" alt=""></p>',2),r=s("\u{1F4E1} "),d={href:"https://qiita.com/kensoz/items/5b0d56e3988730a939f1",target:"_blank",rel:"noopener noreferrer"},k=s("Qiita"),v=a('<h2 id="\u74B0\u5883" tabindex="-1"><a class="header-anchor" href="#\u74B0\u5883" aria-hidden="true">#</a> \u74B0\u5883</h2><ul><li>Windows 10</li><li>Node.js <code>v18.0.0</code></li><li>Yarn (<code>npm</code>\u307E\u305F\u306F<code>pnpm</code>\u3082\u69CB\u3044\u307E\u305B\u3093)</li><li>VS Code</li><li>Chrome</li></ul><h2 id="\u521D\u3081\u306B" tabindex="-1"><a class="header-anchor" href="#\u521D\u3081\u306B" aria-hidden="true">#</a> \u521D\u3081\u306B</h2>',3),m=s("\u3042\u308B\u7A0B\u5EA6\u306E"),b=n("code",null,"indexedDB",-1),g=s("\u57FA\u790E\u77E5\u8B58\u304C\u5FC5\u8981\u3001\u5B66\u7FD2\uFF1A"),y={href:"https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API",target:"_blank",rel:"noopener noreferrer"},B=s("LINK"),q=n("li",null,[s("\u975E\u540C\u671F\u51E6\u7406\uFF08"),n("code",null,"Promise"),s("\u306A\u3069\uFF09\u3092\u4F7F\u3063\u3066\u3044\u306A\u3044\u306E\u3067\u3001\u30CB\u30FC\u30BA\u306B\u3088\u3063\u3066\u8FFD\u52A0\u3057\u3066\u304F\u3060\u3055\u3044")],-1),h=n("li",null,[s("\u672C\u8A18\u4E8B\u3067"),n("code",null,"Vue"),s("\u3068"),n("code",null,"React"),s("\u306EJS\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3092\u30B5\u30F3\u30D7\u30EB\u3068\u3057\u3066\u66F8\u3044\u305F\u304C\u3001JS\u307E\u305F\u306FTS\u30D7\u30ED\u30B0\u30E9\u30E0\u306B\u3082\u4F7F\u3048\u308B")],-1),D=a(`<h2 id="\u30CF\u309A\u30C3\u30B1\u30FC\u30B7\u3099\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" tabindex="-1"><a class="header-anchor" href="#\u30CF\u309A\u30C3\u30B1\u30FC\u30B7\u3099\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" aria-hidden="true">#</a> \u30D1\u30C3\u30B1\u30FC\u30B8\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB</h2><ul><li><code>file-saver</code>\uFF1A\u30D5\u30A1\u30A4\u30EB\u51FA\u529B\u7528\u3001<code>@types/file-saver</code>\u306F\u305D\u306E\u30BF\u30A4\u30D7\u30E9\u30A4\u30D6\u30E9\u30EA</li><li><code>dayjs</code>\uFF1A\u6642\u9593\u30E9\u30A4\u30D6\u30E9\u30EA\u3001\u304A\u597D\u304D\u306A\u30E9\u30A4\u30D6\u30E9\u30EA\u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D file-saver @types/file-saver dayjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vue-js\u7248" tabindex="-1"><a class="header-anchor" href="#vue-js\u7248" aria-hidden="true">#</a> Vue.js\u7248</h2><p><strong>App.vue</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u30D1\u30C3\u30B1\u30FC\u30B8\u30A4\u30F3\u30DD\u30FC\u30C8</span>
<span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">&quot;dayjs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> saveAs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;file-saver&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u30B3\u30F3\u30D5\u30A3\u30B0\u8A2D\u5B9A</span>
<span class="token keyword">const</span> <span class="token literal-property property">dataBaseVer</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u30D0\u30FC\u30B8\u30E7\u30F3</span>
<span class="token keyword">const</span> <span class="token literal-property property">dataBaseName</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&quot;MyIndexedDB&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u540D\u79F0</span>
<span class="token keyword">const</span> <span class="token literal-property property">dataBaseStore</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&quot;MyStore&quot;</span><span class="token punctuation">;</span> <span class="token comment">// store\u540D\u79F0</span>
<span class="token keyword">const</span> <span class="token literal-property property">dataBaseKeyPath</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&quot;key&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u4E3B\u30AD\u30FC</span>
<span class="token keyword">const</span> <span class="token literal-property property">dataBaseLimit</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span> <span class="token comment">// \u30B5\u30A4\u30BA\u306E\u5236\u9650</span>
<span class="token keyword">const</span> <span class="token literal-property property">filename</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">log_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;YYYYMMDD&quot;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.txt</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span> <span class="token comment">// \u51FA\u529B\u3055\u308C\u305Flog\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u79F0</span>

<span class="token comment">// indexedDB\u4F5C\u6210</span>
<span class="token keyword">const</span> createIndexedDB <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">indexed</span><span class="token operator">:</span> IDBOpenDBRequest <span class="token operator">=</span> indexedDB<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>dataBaseName<span class="token punctuation">,</span> dataBaseVer<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u521D\u3081\u3066\u5B9F\u884C\u3059\u308B\u5834\u5408\u306F\u3001\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u306A\u3044\u306E\u3067\u3001onupgradeneeded\u30A4\u30D9\u30F3\u30C8\u3067store\u3068\u4E3B\u30AD\u30FC\u3092\u8FFD\u52A0</span>
  indexed<span class="token punctuation">.</span>onupgradeneeded <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IDBVersionChangeEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">db</span><span class="token operator">:</span> IDBDatabase <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> IDBOpenDBRequest<span class="token punctuation">)</span><span class="token punctuation">.</span>result<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>db<span class="token punctuation">.</span>objectStoreNames<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>dataBaseStore<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      db<span class="token punctuation">.</span><span class="token function">createObjectStore</span><span class="token punctuation">(</span>dataBaseStore<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">keyPath</span><span class="token operator">:</span> dataBaseKeyPath<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u4F5C\u6210\u5931\u6557</span>
  indexed<span class="token punctuation">.</span>onerror <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Indexed Start Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// log\u8FFD\u52A0</span>
<span class="token keyword">const</span> addLog <span class="token operator">=</span> <span class="token punctuation">(</span>log<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u4F5C\u6210</span>
  <span class="token keyword">const</span> time <span class="token operator">=</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;YYYY-MM-DD-HH:mm:ss:SSS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> timeStamp <span class="token operator">=</span> time <span class="token operator">+</span> <span class="token string">&quot;_&quot;</span> <span class="token operator">+</span> random <span class="token operator">+</span> <span class="token string">&quot;Z&quot;</span><span class="token punctuation">;</span>

  <span class="token comment">// \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u8D77\u52D5</span>
  <span class="token keyword">const</span> <span class="token literal-property property">indexed</span><span class="token operator">:</span> IDBOpenDBRequest <span class="token operator">=</span> indexedDB<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>dataBaseName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  indexed<span class="token punctuation">.</span>onsuccess <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">db</span><span class="token operator">:</span> IDBDatabase <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> IDBOpenDBRequest<span class="token punctuation">)</span><span class="token punctuation">.</span>result<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token literal-property property">trans</span><span class="token operator">:</span> IDBTransaction <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span>dataBaseStore<span class="token punctuation">,</span> <span class="token string">&quot;readwrite&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token literal-property property">store</span><span class="token operator">:</span> IDBObjectStore <span class="token operator">=</span> trans<span class="token punctuation">.</span><span class="token function">objectStore</span><span class="token punctuation">(</span>dataBaseStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token literal-property property">count</span><span class="token operator">:</span> IDBRequest<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span> <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u30C7\u30FC\u30BF\u306E\u6570\u3092\u6570\u3048\u3001\u8FFD\u52A0\u3059\u308B\u524D\u306B\u5236\u9650\u3092\u78BA\u8A8D</span>
    count<span class="token punctuation">.</span>onsuccess <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      store<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token punctuation">[</span>dataBaseKeyPath<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>timeStamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">] : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>log<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>result<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> dataBaseLimit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8D85\u3048\u306A\u3044\u5834\u5408\u8FFD\u52A0\u3060\u3051</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8D85\u3048\u308B\u5834\u5408\u306F\u4E00\u756A\u53E4\u3044\u30C7\u30FC\u30BF\u304B\u3089\u524A\u9664</span>
        store<span class="token punctuation">.</span><span class="token function">openCursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>onsuccess <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token literal-property property">cursor</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> IDBRequest<span class="token punctuation">)</span><span class="token punctuation">.</span>result<span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cursor<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// \u30C7\u30FC\u30BF\u306E\u6570\u3092\u6570\u3048\u5931\u8D25</span>
    count<span class="token punctuation">.</span>onerror <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Count Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u8D77\u52D5\u5931\u6557</span>
  indexed<span class="token punctuation">.</span>onerror <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Indexed Open Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// log\u8AAD\u307F\u53D6\u308A</span>
<span class="token keyword">const</span> readDBandExport <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token literal-property property">tmp</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u8D77\u52D5</span>
  <span class="token keyword">const</span> <span class="token literal-property property">indexed</span><span class="token operator">:</span> IDBOpenDBRequest <span class="token operator">=</span> indexedDB<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>dataBaseName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  indexed<span class="token punctuation">.</span>onsuccess <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">db</span><span class="token operator">:</span> IDBDatabase <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> IDBOpenDBRequest<span class="token punctuation">)</span><span class="token punctuation">.</span>result<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token literal-property property">trans</span><span class="token operator">:</span> IDBTransaction <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span>dataBaseStore<span class="token punctuation">,</span> <span class="token string">&quot;readonly&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token literal-property property">store</span><span class="token operator">:</span> IDBObjectStore <span class="token operator">=</span> trans<span class="token punctuation">.</span><span class="token function">objectStore</span><span class="token punctuation">(</span>dataBaseStore<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u30C7\u30FC\u30BF\u3092\u30EB\u30FC\u30D7</span>
    store<span class="token punctuation">.</span><span class="token function">openCursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>onsuccess <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">cursor</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> IDBRequest<span class="token punctuation">)</span><span class="token punctuation">.</span>result<span class="token punctuation">;</span>
      <span class="token comment">// \u30C7\u30FC\u30BF\u304C\u3042\u308C\u3070\u3001tmp\u306B\u8FFD\u52A0\u3001\u30EB\u30FC\u30D7\u3092\u3084\u308A\u7D9A\u304F</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tmp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cursor<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        tmp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cursor<span class="token punctuation">.</span><span class="token function">continue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u30C7\u30FC\u30BF\u304C\u306A\u3051\u308C\u3070\u3001\u30EB\u30FC\u30D7\u304C\u5B8C\u4E86\u3002Blob\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210</span>
        <span class="token keyword">const</span> <span class="token literal-property property">blob</span><span class="token operator">:</span> Blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;text/plain;charset=utf-8&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u51FA\u529B</span>
        <span class="token function">saveAs</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// \u30C7\u30FC\u30BF\u3092\u30EB\u30FC\u30D7\u5931\u6557</span>
    store<span class="token punctuation">.</span><span class="token function">openCursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>onerror <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;OpenCursor Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u8D77\u52D5\u5931\u6557</span>
  indexed<span class="token punctuation">.</span>onerror <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Indexed Open Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u524A\u9664</span>
<span class="token keyword">const</span> deleteIndexedDB <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">indexed</span><span class="token operator">:</span> IDBOpenDBRequest <span class="token operator">=</span> indexedDB<span class="token punctuation">.</span><span class="token function">deleteDatabase</span><span class="token punctuation">(</span>dataBaseName<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u524A\u9664\u6210\u529F</span>
  indexed<span class="token punctuation">.</span>onsuccess <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Delete Success&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u524A\u9664\u5931\u6557</span>
  indexed<span class="token punctuation">.</span>onerror <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Delete Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528</span>
<span class="token function">createIndexedDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u30C6\u30B9\u30C8</span>
<span class="token function">addLog</span><span class="token punctuation">(</span><span class="token string">&quot;\u30C6\u30B9\u30C8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Vue.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addLog(<span class="token punctuation">&#39;</span>\u30DC\u30BF\u30F3\u304B\u3089\u306E\u30C6\u30B9\u30C8<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>addLog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>readDBandExport<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>readDBandExport<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deleteIndexedDB<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>deleteIndexedDB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-js\u7248" tabindex="-1"><a class="header-anchor" href="#react-js\u7248" aria-hidden="true">#</a> React.js\u7248</h2><p><strong>App.tsx</strong></p><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// \u30D1\u30C3\u30B1\u30FC\u30B8\u30A4\u30F3\u30DD\u30FC\u30C8
import dayjs from &quot;dayjs&quot;;
import { saveAs } from &quot;file-saver&quot;;

function App() {
  // \u30B3\u30F3\u30D5\u30A3\u30B0\u8A2D\u5B9A
  const dataBaseVer: number = 1; // \u30D0\u30FC\u30B8\u30E7\u30F3
  const dataBaseName: string = &quot;MyIndexedDB&quot;; // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u540D\u79F0
  const dataBaseStore: string = &quot;MyStore&quot;; // store\u540D\u79F0
  const dataBaseKeyPath: string = &quot;key&quot;; // \u4E3B\u30AD\u30FC
  const dataBaseLimit: number = 10000; // \u30B5\u30A4\u30BA\u306E\u5236\u9650
  const filename: string = \`log_\${dayjs().format(&quot;YYYYMMDD&quot;)}.txt\`; // \u51FA\u529B\u3055\u308C\u305Flog\u30D5\u30A1\u30A4\u30EB\u306E\u540D\u79F0

  // indexedDB\u4F5C\u6210
  const createIndexedDB = (): void =&gt; {
    const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName, dataBaseVer);

    // \u521D\u3081\u3066\u5B9F\u884C\u3059\u308B\u5834\u5408\u306F\u3001\u30D0\u30FC\u30B8\u30E7\u30F3\u304C\u306A\u3044\u306E\u3067\u3001onupgradeneeded\u30A4\u30D9\u30F3\u30C8\u3067store\u3068\u4E3B\u30AD\u30FC\u3092\u8FFD\u52A0
    indexed.onupgradeneeded = (event: IDBVersionChangeEvent): void =&gt; {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(dataBaseStore)) {
        db.createObjectStore(dataBaseStore, {
          keyPath: dataBaseKeyPath,
        });
      }
    };

    // \u4F5C\u6210\u5931\u6557
    indexed.onerror = (): void =&gt; {
      console.log(&quot;Indexed Start Error&quot;);
    };
  };

  // log\u8FFD\u52A0
  const addLog = (log: string): void =&gt; {
    // \u30BF\u30A4\u30E0\u30B9\u30BF\u30F3\u30D7\u4F5C\u6210
    const time = dayjs().format(&quot;YYYY-MM-DD-HH:mm:ss:SSS&quot;);
    const random = Math.ceil(Math.random() * 999);
    const timeStamp = time + &quot;_&quot; + random + &quot;Z&quot;;

    // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u8D77\u52D5
    const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName);
    indexed.onsuccess = (event: Event): void =&gt; {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      const trans: IDBTransaction = db.transaction(dataBaseStore, &quot;readwrite&quot;);
      const store: IDBObjectStore = trans.objectStore(dataBaseStore);
      const count: IDBRequest&lt;number&gt; = store.count();

      // \u30C7\u30FC\u30BF\u306E\u6570\u3092\u6570\u3048\u3001\u8FFD\u52A0\u3059\u308B\u524D\u306B\u5236\u9650\u3092\u78BA\u8A8D
      count.onsuccess = (): void =&gt; {
        store.put({ [dataBaseKeyPath]: \`[\${timeStamp}] : \${log}\` });

        if (Number(count.result) &lt;= dataBaseLimit) {
          // \u8D85\u3048\u306A\u3044\u5834\u5408\u8FFD\u52A0\u3060\u3051
          return;
        } else {
          // \u8D85\u3048\u308B\u5834\u5408\u306F\u4E00\u756A\u53E4\u3044\u30C7\u30FC\u30BF\u304B\u3089\u524A\u9664
          store.openCursor().onsuccess = (event: Event): void =&gt; {
            const cursor: any = (event.target as IDBRequest).result;
            if (cursor) {
              cursor.delete();
            }
          };
        }
      };

      // \u30C7\u30FC\u30BF\u306E\u6570\u3092\u6570\u3048\u5931\u8D25
      count.onerror = (): void =&gt; {
        console.log(&quot;Count Error&quot;);
      };
    };

    // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u8D77\u52D5\u5931\u6557
    indexed.onerror = (): void =&gt; {
      console.log(&quot;Indexed Open Error&quot;);
    };
  };

  // log\u8AAD\u307F\u53D6\u308A
  const readDBandExport = (): void =&gt; {
    let tmp: string[] = [];

    // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u8D77\u52D5
    const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName);
    indexed.onsuccess = (event: Event): void =&gt; {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      const trans: IDBTransaction = db.transaction(dataBaseStore, &quot;readonly&quot;);
      const store: IDBObjectStore = trans.objectStore(dataBaseStore);

      // \u30C7\u30FC\u30BF\u3092\u30EB\u30FC\u30D7
      store.openCursor().onsuccess = (event: Event): void =&gt; {
        const cursor: any = (event.target as IDBRequest).result;
        // \u30C7\u30FC\u30BF\u304C\u3042\u308C\u3070\u3001tmp\u306B\u8FFD\u52A0\u3001\u30EB\u30FC\u30D7\u3092\u3084\u308A\u7D9A\u304F
        if (cursor) {
          tmp.push(cursor.key);
          tmp.push(&quot;\\r\\n&quot;);
          cursor.continue();
        } else {
          // \u30C7\u30FC\u30BF\u304C\u306A\u3051\u308C\u3070\u3001\u30EB\u30FC\u30D7\u304C\u5B8C\u4E86\u3002Blob\u30AA\u30D6\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210
          const blob: Blob = new Blob(tmp, {
            type: &quot;text/plain;charset=utf-8&quot;,
          });

          // \u51FA\u529B
          saveAs(blob, filename);
        }
      };

      // \u30C7\u30FC\u30BF\u3092\u30EB\u30FC\u30D7\u5931\u6557
      store.openCursor().onerror = (): void =&gt; {
        console.log(&quot;OpenCursor Error&quot;);
      };
    };

    // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u3092\u8D77\u52D5\u5931\u6557
    indexed.onerror = (): void =&gt; {
      console.log(&quot;Indexed Open Error&quot;);
    };
  };

  // \u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u524A\u9664
  const deleteIndexedDB = (): void =&gt; {
    const indexed: IDBOpenDBRequest = indexedDB.deleteDatabase(dataBaseName);

    // \u524A\u9664\u6210\u529F
    indexed.onsuccess = (): void =&gt; {
      console.log(&quot;Delete Success&quot;);
    };

    // \u524A\u9664\u5931\u6557
    indexed.onerror = (): void =&gt; {
      console.log(&quot;Delete Error&quot;);
    };
  };

  // \u4F7F\u7528
  createIndexedDB();
  // \u30C6\u30B9\u30C8
  addLog(&quot;\u30C6\u30B9\u30C8&quot;);

  return (
    &lt;main&gt;
      &lt;h1&gt;React.js&lt;/h1&gt;
      &lt;button onClick={() =&gt; {addLog(&quot;\u30DC\u30BF\u30F3\u304B\u3089\u306E\u30C6\u30B9\u30C8&quot;)}}&gt;
        addLog
      &lt;/button&gt;
      &lt;button onClick={readDBandExport}&gt;readDBandExport&lt;/button&gt;
      &lt;button onClick={deleteIndexedDB}&gt;deleteIndexedDB&lt;/button&gt;
    &lt;/main&gt;
  );
}

export default App;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u691C\u8A3C-vue-js\u7248\u3066\u3099" tabindex="-1"><a class="header-anchor" href="#\u691C\u8A3C-vue-js\u7248\u3066\u3099" aria-hidden="true">#</a> \u691C\u8A3C\uFF08Vue.js\u7248\u3067\uFF09</h2><p>\u8D77\u52D5\u3001\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9\u304C\u4F5C\u6210\u3055\u308C\u305F</p><p><img src="https://s2.loli.net/2022/09/06/dU24CK7rM6zEl8t.jpg" alt="1.jpg"></p><p><code>addLog</code>\u3092\u63A8\u3057\u3066\u30C6\u30B9\u30C8\u30C7\u30FC\u30BF\u3092\u4F5C\u6210\u3057\u3066\u3001<code>readDBandExport</code>\u3067\u30ED\u30B0\u3092\u51FA\u529B</p><p><img src="https://s2.loli.net/2022/09/06/CINbnsZBGaTAQUO.jpg" alt="2.jpg"></p><p>\u51FA\u529B\u3055\u308C\u305F\u30D5\u30A1\u30A4\u30EB\u306E\u4E2D\u8EAB\u3092\u78BA\u8A8D\u3001\u6210\u529F</p><p><img src="https://s2.loli.net/2022/09/06/NzgMXYF3d57Bvfn.jpg" alt="3.jpg"></p><h2 id="\u6700\u5F8C" tabindex="-1"><a class="header-anchor" href="#\u6700\u5F8C" aria-hidden="true">#</a> \u6700\u5F8C</h2><p><code>console.log</code>\u306E\u30C7\u30FC\u30BF\u3092\u30AD\u30E3\u30C3\u30C1\u3057\u3066\u3001\u51FA\u529B\u3057\u305F\u3044\u5834\u5408\u306F\u2193\u306E\u95A2\u6570\u3092\u4F7F\u3063\u3066\u304F\u3060\u3055\u3044</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// log\u30AD\u30E3\u30C3\u30C1</span>
<span class="token keyword">const</span> <span class="token function-variable function">catchConsoleLog</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span>oldLog <span class="token operator">=</span> console<span class="token punctuation">.</span>log<span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">log</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">oldLog</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">addLog</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528</span>
<span class="token function">catchConsoleLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function f(x,w){const t=i("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[r,n("a",d,[k,e(t)])]),v,n("ul",null,[n("li",null,[m,b,g,n("a",y,[B,e(t)])]),q,h]),D])}var j=p(l,[["render",f],["__file","indexed.html.vue"]]);export{j as default};
