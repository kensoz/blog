---
lang: ja-JP
title: LeetCode-09
---

# Palindrome Number

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
LeetCode-09：2022-08-08
:::



## 1.私の解法

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



## 2.回答を見た後の改善

+ 自分の解決で長すぎて、いらないステップがたくさんあります

```js
/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
    let str = x.toString()
    const pre = Math.floor(str.length / 2)
    // 負の数、0～10は自動で判断
    for(let i = 0; i < pre; i++){
        if(str[i] != str[str.length-i-1]) return false
    }
    return true
};
```

