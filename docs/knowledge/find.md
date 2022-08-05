---
lang: ja-JP
title: JSの検索
---

# JSの検索整理

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
常用Javascript，Typescriptの検索メソッド整理
:::



🌐 [live demo](https://codepen.io/kensoz/pen/poWmKXK)



## 1.配列/ルックアップテーブル検索

```js
const statusText = (num) => {
    return ["tom", "jack", "lucy", "lily"][num];
}

statusText(1)
// "tom"
```



## 2.Map/辞書検索その1

```js
const statusText2 = (num) => {
    const table = {
        "abc": "tom",
        "cdf": "jack",
        "xyz": "lucy"
    };
    return table[num];
}

statusText2("xyz")
// "lucy"
```



## 3.Map/辞書検索その2(検索と計算)

```js
const statusText3 = (() => {
    const table = {
        "abc": "tom",
        "cdf": "jack",
        "xyz": function (e) {
					return e + 1
				}
    };
    return e => table[e];
})();

statusText3("abc")
// "tom"
statusText3("xyz")(6)
// 7
```

