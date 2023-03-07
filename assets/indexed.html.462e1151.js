import{_ as p,o,c,a as s,d as t,e,b as n,r as i}from"./app.a5ec93c6.js";const l={},u=e('<h1 id="\u7528indexeddb\u4FDD\u5B58\u5E76\u5BFC\u51FA\u524D\u7AEF\u65E5\u5FD7ts\u7248-\u9002\u7528\u539F\u751Fjs-vue\u548Creact" tabindex="-1"><a class="header-anchor" href="#\u7528indexeddb\u4FDD\u5B58\u5E76\u5BFC\u51FA\u524D\u7AEF\u65E5\u5FD7ts\u7248-\u9002\u7528\u539F\u751Fjs-vue\u548Creact" aria-hidden="true">#</a> \u7528IndexedDB\u4FDD\u5B58\u5E76\u5BFC\u51FA\u524D\u7AEF\u65E5\u5FD7TS\u7248\uFF0C\u9002\u7528\u539F\u751FJS\uFF0CVue\u548CReact</h1><p><img src="https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&amp;style=popout-square" alt=""> <img src="https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&amp;style=popout-square" alt=""> <img src="https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=Vue.js&amp;style=popout-square" alt=""> <img src="https://img.shields.io/badge/-React.js-9ca3af.svg?logo=react&amp;style=popout-square" alt=""></p>',2),r=n("\u{1F4E1} "),d={href:"https://segmentfault.com/a/1190000042440033",target:"_blank",rel:"noopener noreferrer"},k=n("\u601D\u5426"),v=n(" \xB7 "),m={href:"https://juejin.cn/post/7140169620928856077/",target:"_blank",rel:"noopener noreferrer"},b=n("\u6398\u91D1"),g=e(`<h2 id="\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883" aria-hidden="true">#</a> \u73AF\u5883</h2><ul><li>Windows 10</li><li>Node.js <code>v18.0.0</code></li><li>Yarn (\u7528<code>npm</code>\u6216<code>pnpm</code>\u4E5F\u6CA1\u95EE\u9898)</li><li>VS Code</li><li>Chrome</li></ul><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><ul><li>\u672C\u6559\u7A0B\u76F4\u63A5\u7ED9\u51FA\u65B9\u6CD5\uFF0C\u590D\u5236\u5373\u53EF\u7528\u3002\u9700\u8981\u4E00\u5B9A\u7684<code>indexedDB</code>\u7684\u57FA\u7840\u77E5\u8BC6</li><li>\u65B9\u6CD5\u4E2D\u5E76\u6CA1\u6709\u4F7F\u7528\u5F02\u6B65\uFF0C\u6839\u636E\u9700\u8981\u81EA\u884C\u6DFB\u52A0\u5373\u53EF</li><li>\u867D\u7136\u672C\u6559\u7A0B\u7ED9\u53EA\u51FA\u4E86<code>Vue</code>\u548C<code>React</code>\u4E24\u4E2AJS\u6846\u67B6\u7684\u4F8B\u5B50\uFF0C\u4F46\u662F\u5176\u4E2D\u51FD\u6570\u4E5F\u53EF\u4EE5\u76F4\u63A5\u7528\u4E8E\u539F\u751FTS\u548CJS</li></ul><h2 id="\u5B89\u88C5\u7B2C\u4E09\u65B9\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u7B2C\u4E09\u65B9\u5E93" aria-hidden="true">#</a> \u5B89\u88C5\u7B2C\u4E09\u65B9\u5E93</h2><ul><li><code>file-saver</code>\uFF1A\u5BFC\u51FA\u6587\u4EF6\u7528\uFF0C<code>@types/file-saver</code>\u662F\u4ED6\u7684\u7C7B\u578B\u5E93</li><li><code>dayjs</code>\uFF1A\u65F6\u95F4\u5E93\uFF0C\u53EF\u4EE5\u6839\u636E\u4E2A\u4EBA\u559C\u597D\u9009\u62E9\u5176\u4ED6\u65F6\u95F4\u5E93</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> -D file-saver @types/file-saver dayjs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vue-js\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#vue-js\u7248\u672C" aria-hidden="true">#</a> Vue.js\u7248\u672C</h2><p><strong>App.vue</strong></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">// \u5BFC\u5165\u7B2C\u4E09\u65B9\u5E93</span>
<span class="token keyword">import</span> dayjs <span class="token keyword">from</span> <span class="token string">&quot;dayjs&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> saveAs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;file-saver&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49\u5E38\u91CF</span>
<span class="token keyword">const</span> <span class="token literal-property property">dataBaseVer</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// \u7248\u672C</span>
<span class="token keyword">const</span> <span class="token literal-property property">dataBaseName</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&quot;MyIndexedDB&quot;</span><span class="token punctuation">;</span> <span class="token comment">// db\u540D</span>
<span class="token keyword">const</span> <span class="token literal-property property">dataBaseStore</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&quot;MyStore&quot;</span><span class="token punctuation">;</span> <span class="token comment">// store\u540D</span>
<span class="token keyword">const</span> <span class="token literal-property property">dataBaseKeyPath</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">&quot;key&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u4E3Bkey</span>
<span class="token keyword">const</span> <span class="token literal-property property">dataBaseLimit</span><span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span> <span class="token comment">// \u6570\u636E\u6761\u6570\u9650\u5236</span>
<span class="token keyword">const</span> <span class="token literal-property property">filename</span><span class="token operator">:</span> string <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">log_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;YYYYMMDD&quot;</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.txt</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span> <span class="token comment">// \u5BFC\u51FA\u7684log\u6587\u4EF6\u540D</span>

<span class="token comment">// \u521B\u5EFAindexedDB</span>
<span class="token keyword">const</span> createIndexedDB <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">indexed</span><span class="token operator">:</span> IDBOpenDBRequest <span class="token operator">=</span> indexedDB<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>dataBaseName<span class="token punctuation">,</span> dataBaseVer<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7B2C\u4E00\u6B21\u6267\u884C\uFF0C\u56E0\u4E3A\u6CA1\u6709\u7248\u672C\uFF0C\u6240\u4EE5\u4F1A\u89E6\u53D1onupgradeneeded\u4E8B\u4EF6\uFF0C\u6B64\u65F6\u65B0\u5EFAstore\u5E76\u8FFD\u52A0\u4E3Bkey</span>
  indexed<span class="token punctuation">.</span>onupgradeneeded <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> IDBVersionChangeEvent<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">db</span><span class="token operator">:</span> IDBDatabase <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> IDBOpenDBRequest<span class="token punctuation">)</span><span class="token punctuation">.</span>result<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>db<span class="token punctuation">.</span>objectStoreNames<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>dataBaseStore<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      db<span class="token punctuation">.</span><span class="token function">createObjectStore</span><span class="token punctuation">(</span>dataBaseStore<span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">keyPath</span><span class="token operator">:</span> dataBaseKeyPath<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u521B\u5EFA\u5931\u8D25</span>
  indexed<span class="token punctuation">.</span>onerror <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Indexed Start Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u6DFB\u52A0log</span>
<span class="token keyword">const</span> addLog <span class="token operator">=</span> <span class="token punctuation">(</span>log<span class="token operator">:</span> string<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u83B7\u53D6log\u65F6\u95F4\u6233</span>
  <span class="token keyword">const</span> time <span class="token operator">=</span> <span class="token function">dayjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;YYYY-MM-DD-HH:mm:ss:SSS&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> random <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> timeStamp <span class="token operator">=</span> time <span class="token operator">+</span> <span class="token string">&quot;_&quot;</span> <span class="token operator">+</span> random <span class="token operator">+</span> <span class="token string">&quot;Z&quot;</span><span class="token punctuation">;</span>

  <span class="token comment">// \u6253\u5F00db</span>
  <span class="token keyword">const</span> <span class="token literal-property property">indexed</span><span class="token operator">:</span> IDBOpenDBRequest <span class="token operator">=</span> indexedDB<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>dataBaseName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  indexed<span class="token punctuation">.</span>onsuccess <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">db</span><span class="token operator">:</span> IDBDatabase <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> IDBOpenDBRequest<span class="token punctuation">)</span><span class="token punctuation">.</span>result<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token literal-property property">trans</span><span class="token operator">:</span> IDBTransaction <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span>dataBaseStore<span class="token punctuation">,</span> <span class="token string">&quot;readwrite&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token literal-property property">store</span><span class="token operator">:</span> IDBObjectStore <span class="token operator">=</span> trans<span class="token punctuation">.</span><span class="token function">objectStore</span><span class="token punctuation">(</span>dataBaseStore<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token literal-property property">count</span><span class="token operator">:</span> IDBRequest<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span> <span class="token operator">=</span> store<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8BA1\u7B97\u8BB0\u5F55\u7684\u6570\u91CF\uFF0C\u6DFB\u52A0\u524D\u5148\u68C0\u67E5\u662F\u5426\u8D85\u8FC7\u9650\u5236</span>
    count<span class="token punctuation">.</span>onsuccess <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4EE5\u4E3B\u952Elog\u4E3Akey\uFF0C\u628A\u65F6\u95F4\u6233\u548Clog\u4F5C\u4E3Avalue\uFF0C\u63D2\u5165\u6570\u636E\u5E93</span>
      store<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token punctuation">[</span>dataBaseKeyPath<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>timeStamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">] : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>log<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token comment">// \u6CA1\u8D85\u8FC7\u5C31\u6DFB\u52A0</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span>result<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> dataBaseLimit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u6CA1\u8D85\u8FC7\u5C31\u5220\u9664\u6700\u8001\u7684\u4E00\u6761</span>
        store<span class="token punctuation">.</span><span class="token function">openCursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>onsuccess <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> <span class="token literal-property property">cursor</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> IDBRequest<span class="token punctuation">)</span><span class="token punctuation">.</span>result<span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            cursor<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8BA1\u7B97\u8BB0\u5F55\u7684\u6570\u91CF\u5931\u8D25</span>
    count<span class="token punctuation">.</span>onerror <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Count Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// db\u6253\u5F00\u5931\u8D25</span>
  indexed<span class="token punctuation">.</span>onerror <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Indexed Open Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u8BFB\u53D6log</span>
<span class="token keyword">const</span> readDBandExport <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token literal-property property">tmp</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// \u6253\u5F00db</span>
  <span class="token keyword">const</span> <span class="token literal-property property">indexed</span><span class="token operator">:</span> IDBOpenDBRequest <span class="token operator">=</span> indexedDB<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>dataBaseName<span class="token punctuation">)</span><span class="token punctuation">;</span>
  indexed<span class="token punctuation">.</span>onsuccess <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token literal-property property">db</span><span class="token operator">:</span> IDBDatabase <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> IDBOpenDBRequest<span class="token punctuation">)</span><span class="token punctuation">.</span>result<span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token literal-property property">trans</span><span class="token operator">:</span> IDBTransaction <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">transaction</span><span class="token punctuation">(</span>dataBaseStore<span class="token punctuation">,</span> <span class="token string">&quot;readonly&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token literal-property property">store</span><span class="token operator">:</span> IDBObjectStore <span class="token operator">=</span> trans<span class="token punctuation">.</span><span class="token function">objectStore</span><span class="token punctuation">(</span>dataBaseStore<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u904D\u5386\u6570\u636E</span>
    store<span class="token punctuation">.</span><span class="token function">openCursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>onsuccess <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token literal-property property">cursor</span><span class="token operator">:</span> any <span class="token operator">=</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token keyword">as</span> IDBRequest<span class="token punctuation">)</span><span class="token punctuation">.</span>result<span class="token punctuation">;</span>
      <span class="token comment">// \u5982\u679C\u904D\u5386\u9879\u6709\u6570\u636E\u5C31\u653E\u5165tmp\uFF0C\u7136\u540E\u7EE7\u7EED</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        tmp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cursor<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        tmp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cursor<span class="token punctuation">.</span><span class="token function">continue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5982\u679C\u904D\u5386\u9879\u6CA1\u6709\u6570\u636E\uFF0C\u8BF4\u660E\u904D\u5386\u7ED3\u675F\uFF0C\u8FD9\u65F6\u65B0\u5EFAblob\u5BF9\u8C61</span>
        <span class="token keyword">const</span> <span class="token literal-property property">blob</span><span class="token operator">:</span> Blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;text/plain;charset=utf-8&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// \u5BFC\u51FA\u6587\u4EF6</span>
        <span class="token function">saveAs</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span> filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// \u904D\u5386\u6570\u636E\u5931\u8D25</span>
    store<span class="token punctuation">.</span><span class="token function">openCursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>onerror <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;OpenCursor Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// db\u6253\u5F00\u5931\u8D25</span>
  indexed<span class="token punctuation">.</span>onerror <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Indexed Open Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u5220\u9664\u6570\u636E\u5E93</span>
<span class="token keyword">const</span> deleteIndexedDB <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">indexed</span><span class="token operator">:</span> IDBOpenDBRequest <span class="token operator">=</span> indexedDB<span class="token punctuation">.</span><span class="token function">deleteDatabase</span><span class="token punctuation">(</span>dataBaseName<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5220\u9664\u6210\u529F</span>
  indexed<span class="token punctuation">.</span>onsuccess <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Delete Success&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5220\u9664\u5931\u8D25</span>
  indexed<span class="token punctuation">.</span>onerror <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter"><span class="token keyword">void</span></span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Delete Error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u8C03\u7528</span>
<span class="token function">createIndexedDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6D4B\u8BD5</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-js\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#react-js\u7248\u672C" aria-hidden="true">#</a> React.js\u7248\u672C</h2><p><strong>App.tsx</strong></p><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>// \u5BFC\u5165\u7B2C\u4E09\u65B9\u5E93
import dayjs from &quot;dayjs&quot;;
import { saveAs } from &quot;file-saver&quot;;

function App() {
  // \u5B9A\u4E49\u5E38\u91CF
  const dataBaseVer: number = 1; // \u7248\u672C
  const dataBaseName: string = &quot;MyIndexedDB&quot;; // db\u540D
  const dataBaseStore: string = &quot;MyStore&quot;; // store\u540D
  const dataBaseKeyPath: string = &quot;key&quot;; // \u4E3Bkey
  const dataBaseLimit: number = 10000; // \u6570\u636E\u6761\u6570\u9650\u5236
  const filename: string = \`log_\${dayjs().format(&quot;YYYYMMDD&quot;)}.txt\`; // \u5BFC\u51FA\u7684log\u6587\u4EF6\u540D

  // \u521B\u5EFAindexedDB
  const createIndexedDB = (): void =&gt; {
    const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName, dataBaseVer);

    // \u7B2C\u4E00\u6B21\u6267\u884C\uFF0C\u56E0\u4E3A\u6CA1\u6709\u7248\u672C\uFF0C\u6240\u4EE5\u4F1A\u89E6\u53D1onupgradeneeded\u4E8B\u4EF6\uFF0C\u6B64\u65F6\u65B0\u5EFAstore\u5E76\u8FFD\u52A0\u4E3Bkey
    indexed.onupgradeneeded = (event: IDBVersionChangeEvent): void =&gt; {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(dataBaseStore)) {
        db.createObjectStore(dataBaseStore, {
          keyPath: dataBaseKeyPath,
        });
      }
    };

    // \u521B\u5EFA\u5931\u8D25
    indexed.onerror = (): void =&gt; {
      console.log(&quot;Indexed Start Error&quot;);
    };
  };

  // \u6DFB\u52A0log
  const addLog = (log: string): void =&gt; {
    // \u83B7\u53D6log\u65F6\u95F4\u6233
    const time = dayjs().format(&quot;YYYY-MM-DD-HH:mm:ss:SSS&quot;);
    const random = Math.ceil(Math.random() * 999);
    const timeStamp = time + &quot;_&quot; + random + &quot;Z&quot;;

    // \u6253\u5F00db
    const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName);
    indexed.onsuccess = (event: Event): void =&gt; {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      const trans: IDBTransaction = db.transaction(dataBaseStore, &quot;readwrite&quot;);
      const store: IDBObjectStore = trans.objectStore(dataBaseStore);
      const count: IDBRequest&lt;number&gt; = store.count();

      // \u8BA1\u7B97\u8BB0\u5F55\u7684\u6570\u91CF\uFF0C\u6DFB\u52A0\u524D\u5148\u68C0\u67E5\u662F\u5426\u8D85\u8FC7\u9650\u5236
      count.onsuccess = (): void =&gt; {
        // \u4EE5\u4E3B\u952Elog\u4E3Akey\uFF0C\u628A\u65F6\u95F4\u6233\u548Clog\u4F5C\u4E3Avalue\uFF0C\u63D2\u5165\u6570\u636E\u5E93
        store.put({ [dataBaseKeyPath]: \`[\${timeStamp}] : \${log}\` });
         
        // \u6CA1\u8D85\u8FC7\u5C31\u6DFB\u52A0
        if (Number(count.result) &lt;= dataBaseLimit) {
          return;
        } else {
          // \u6CA1\u8D85\u8FC7\u5C31\u5220\u9664\u6700\u8001\u7684\u4E00\u6761
          store.openCursor().onsuccess = (event: Event): void =&gt; {
            const cursor: any = (event.target as IDBRequest).result;
            if (cursor) {
              cursor.delete();
            }
          };
        }
      };

      // \u8BA1\u7B97\u8BB0\u5F55\u7684\u6570\u91CF\u5931\u8D25
      count.onerror = (): void =&gt; {
        console.log(&quot;Count Error&quot;);
      };
    };

    // db\u6253\u5F00\u5931\u8D25
    indexed.onerror = (): void =&gt; {
      console.log(&quot;Indexed Open Error&quot;);
    };
  };

  // \u8BFB\u53D6log
  const readDBandExport = (): void =&gt; {
    let tmp: string[] = [];

    // \u6253\u5F00db
    const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName);
    indexed.onsuccess = (event: Event): void =&gt; {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      const trans: IDBTransaction = db.transaction(dataBaseStore, &quot;readonly&quot;);
      const store: IDBObjectStore = trans.objectStore(dataBaseStore);

      // \u904D\u5386\u6570\u636E
      store.openCursor().onsuccess = (event: Event): void =&gt; {
        const cursor: any = (event.target as IDBRequest).result;
        // \u5982\u679C\u904D\u5386\u9879\u6709\u6570\u636E\u5C31\u653E\u5165tmp\uFF0C\u7136\u540E\u7EE7\u7EED
        if (cursor) {
          tmp.push(cursor.key);
          tmp.push(&quot;\\r\\n&quot;);
          cursor.continue();
        } else {
          // \u5982\u679C\u904D\u5386\u9879\u6CA1\u6709\u6570\u636E\uFF0C\u8BF4\u660E\u904D\u5386\u7ED3\u675F\uFF0C\u8FD9\u65F6\u65B0\u5EFAblob\u5BF9\u8C61
          const blob: Blob = new Blob(tmp, {
            type: &quot;text/plain;charset=utf-8&quot;,
          });

          // \u5BFC\u51FA\u6587\u4EF6
          saveAs(blob, filename);
        }
      };

      // \u904D\u5386\u6570\u636E\u5931\u8D25
      store.openCursor().onerror = (): void =&gt; {
        console.log(&quot;OpenCursor Error&quot;);
      };
    };

    // db\u6253\u5F00\u5931\u8D25
    indexed.onerror = (): void =&gt; {
      console.log(&quot;Indexed Open Error&quot;);
    };
  };

  // \u5220\u9664\u6570\u636E\u5E93
  const deleteIndexedDB = (): void =&gt; {
    const indexed: IDBOpenDBRequest = indexedDB.deleteDatabase(dataBaseName);

    // \u5220\u9664\u6210\u529F
    indexed.onsuccess = (): void =&gt; {
      console.log(&quot;Delete Success&quot;);
    };

    // \u5220\u9664\u5931\u8D25
    indexed.onerror = (): void =&gt; {
      console.log(&quot;Delete Error&quot;);
    };
  };

  // \u8C03\u7528
  createIndexedDB();
  // \u6D4B\u8BD5
  addLog(&quot;\u30C6\u30B9\u30C8&quot;);

  return (
    &lt;main&gt;
      &lt;h1&gt;React.js&lt;/h1&gt;
      &lt;button onClick={() =&gt; {addLog(&quot;\u30DC\u30BF\u30F3\u304B\u3089\u306E\u30C6\u30B9\u30C8&quot;);}}&gt;
          addLog
      &lt;/button&gt;
      &lt;button onClick={readDBandExport}&gt;readDBandExport&lt;/button&gt;
      &lt;button onClick={deleteIndexedDB}&gt;deleteIndexedDB&lt;/button&gt;
    &lt;/main&gt;
  );
}

export default App;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9A8C\u8BC1-\u4EE5vue-js\u4E3A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u9A8C\u8BC1-\u4EE5vue-js\u4E3A\u4F8B" aria-hidden="true">#</a> \u9A8C\u8BC1\uFF08\u4EE5Vue.js\u4E3A\u4F8B\uFF09</h2><p>\u542F\u52A8\u9879\u76EE\u540E\uFF0C\u53D1\u73B0\u6570\u636E\u5E93\u5DF2\u7ECF\u5EFA\u7ACB</p><p><img src="https://s2.loli.net/2022/09/06/dU24CK7rM6zEl8t.jpg" alt="1.jpg"></p><p>\u70B9\u51FB<code>addLog</code>\u6DFB\u52A0\u6D4B\u8BD5\u6570\u636E\uFF0C\u7136\u540E\u6309<code>readDBandExport</code>\u5BFC\u51FA</p><p><img src="https://s2.loli.net/2022/09/06/CINbnsZBGaTAQUO.jpg" alt="2.jpg"></p><p>\u67E5\u770B\u5BFC\u51FA\u7684\u6587\u4EF6\uFF0C\u6210\u529F</p><p><img src="https://s2.loli.net/2022/09/06/NzgMXYF3d57Bvfn.jpg" alt="3.jpg"></p><h2 id="\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u6700\u540E" aria-hidden="true">#</a> \u6700\u540E</h2><p>\u5982\u679C\u9700\u8981\u7ED3\u5408\u6355\u83B7<code>console.log</code>\u4F7F\u7528\uFF0C\u8BF7\u4F7F\u7528\u4E0B\u9762\u7684\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// log\u6355\u83B7</span>
<span class="token keyword">const</span> <span class="token function-variable function">catchConsoleLog</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span>oldLog <span class="token operator">=</span> console<span class="token punctuation">.</span>log<span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function-variable function">log</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">log</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6253\u5370\u6355\u83B7\u7684log</span>
    console<span class="token punctuation">.</span><span class="token function">oldLog</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">addLog</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// \u4F7F\u7528</span>
<span class="token function">catchConsoleLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function y(B,q){const a=i("ExternalLinkIcon");return o(),c("div",null,[u,s("p",null,[r,s("a",d,[k,t(a)]),v,s("a",m,[b,t(a)])]),g])}var D=p(l,[["render",y],["__file","indexed.html.vue"]]);export{D as default};
