---
lang: zh-CN
title: 数组值有无
---

# 数组中有某值就删除没有就加入
![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
常用操作了，在[思否](https://segmentfault.com/a/1190000042263065)也投了稿。
:::



### 代码

```typescript
const arr = [1,2,3,4]
const x = 5

// 用indexOf()方法判断
const index = arr.indexOf(x);
// index < 0: 没有，所以追加
// index >= 0: 有，所以删除
index < 0 ? arr.push(x) : arr.splice(index, 1)

console.log(arr)
// [1,2,3,4,5]
```
