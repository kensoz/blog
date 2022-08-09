---
lang: zh-CN
title: LeetCode-01
---

# Two Sum

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
LeetCode-01：2022-08-02
:::



## 1.心得

+ 第一次搞算法无从下手
+ 直接看了答案
+ 本以为算法的解答都是优雅，原来是用了两次循环，



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

