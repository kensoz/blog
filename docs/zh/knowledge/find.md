---
lang: zh-CN
title: JS查找
---

# JS查找总结

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
常用Javascript，Typescript查找方法总结
:::



🌐 [live demo](https://codepen.io/kensoz/pen/poWmKXK)



## 1.表查找

```js
const statusText = (num) => {
    return ["tom", "jack", "lucy", "lily"][num];
}

statusText(1)
// "tom"
```



## 2.映射表1

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



## 3.映射表2（查找并带入参数）

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

