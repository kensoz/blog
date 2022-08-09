---
lang: ja-JP
title: LeetCode-01
---

# Two Sum

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
LeetCode-01：2022-08-02
:::



## 1.心得

+ 初めてのLeetCodeで手の施しようがない
+ 直接的に回答を見た
+ 回答を見た：なるほど、二重ループか



## 2.解法

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

