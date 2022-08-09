---
lang: zh-CN
title: LeetCode-09
---

# Palindrome Number

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
LeetCode-09：2022-08-08
:::



## 1.我的解法

```js
/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  let flg = false;
  let str = x.toString();

  if (str[0] === "-") {
    return false;
  } else if (str.length < 2) {
    return true;
  } else {
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
      if (str[i] === str[str.length - 1 - i]) {
        flg = true;
      } else {
        flg = false;
        break;
      }
    }

    return flg;
  }
};
```



## 2.看了答案后改进

+ 自己的答案太多不需要的判断

```js
/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    let str = x.toString()
    const pre = Math.floor(str.length / 2)
    for(let i = 0; i < pre; i++){
        if(str[i] != str[str.length-i-1]) return false
    }
    return true
};
```

