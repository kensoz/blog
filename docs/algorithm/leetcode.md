---
lang: ja-JP
title: LeetCode
---

# LeetCode

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
メモとして自分の回答（JavaScript）を整理します。難易度の順番です。
:::



## EASY

### 01 Two Sum

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    
var len = nums.length;
    for (var i = 0; i < len - 1; i++) {
      for (var j = i + 1; j < len; j++) {
        if (nums[i] + nums[j] === target) {
          return [i, j];
        }
      }
    };
};
```



### 09 Palindrome Number

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
