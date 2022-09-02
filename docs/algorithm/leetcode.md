---
lang: ja-JP
title: LeetCode
---

# LeetCode

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
メモとして自分の回答を整理します。難易度の順番です。  
メモしやすいため、一部のコメントは中国語です。
:::



## メモ

- `return`解答、入力の処理が特に必要ない



## EASY

### 01. Two Sum

```js
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

### 09. Palindrome Number

```js
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

### 13. Roman to Integer

```js
var romanToInt = function (s) {
  // 又叫map又叫obj
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // 答案容器
  let res = 0;

  // for循环
  // 注意点：从左边开始比较
  for (let i = 0; i < s.length; i++) {
    if (i + 1 === s.length) {
      // 当这个罗马数字的长度是单数时最后需要将其加算
      res += obj[s[i]];
    } else if (obj[s[i]] >= obj[s[i + 1]]) {
      // 计算，如果左边大于等于右边，直接把左边赋值给答案，然后进入下一次循环
      res += obj[s[i]];
    } else {
      // 计算，如果左边小于右边，就用右边减去左边，然后跳过下一次循环
      res += obj[s[i + 1]] - obj[s[i]];
      i++;
    }
  }

  return res;
};
```

### 14. Longest Common Prefix

```js
var longestCommonPrefix = function (strs) {
  // 暴力解法
  let res = "";
  // 先循环第一个词，里面有几个字母就循环几次
  // 因为公共的前缀，所以肯定第一个词里面会有
  for (let i = 0; i < strs[0].length; i++) {
    // 每一个字母分别与其他单词的那个位置的（i）字母比较
    for (let j = 1; j < strs.length; j++) {
      // 如果一旦不一样就结束整个两个for循环
      if (strs[j][i] !== strs[0][i]) {
        return res;
      }
    }
    // 如果一个字母的位置一样，那么就给结果写入这个位置的字母，进入下次循环
    res += strs[0][i];
  }
  return res;
};
```

### 20. Valid Parentheses

```js
var isValid = function(s) {
  // 先定义括号
  const left = ["(", "[", "{"];
  const couple = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  // 使用栈方法，这是这次的重点
  let index = 0;
  let stack = [];

  // 遍历数组
  while (index < s.length) {
    if (left.includes(s[index])) {
      // 遇到左括号则压入栈中
      stack.push(s[index]);
    } else {
      // 遇到右括号则查表判断是否与栈顶的左括号匹配
      if (s[index] === couple.get(stack[stack.length - 1])) {
        // 匹配则弹出栈顶括号，就是把栈里面的对应左括号删除
        stack.pop();
      } else {
        // 不匹配则可直接判断表达式不合法
        return false;
      }
    }
    index++;
  }

  // 循环执行完，没有被return就会来到这
  // 如果栈这个时候是空的那就ok返回true如果不是肯定是哪里出错了返回false
  return stack.length === 0;
};
```

### 21.Merge Two Sorted Lists

```js
var mergeTwoLists = function (list1, list2) {
  // 两个都是Null直接返回Null
  // 如果链表啥都没有就是head指向了null，返回null
  if (list1 === null && list2 === null) return null;

  // 将链表转换为数组
  const arr = [];
  while (list1 !== null) {
    arr.push(list1.val);
    list1 = list1.next;
  }
  while (list2 !== null) {
    arr.push(list2.val);
    list2 = list2.next;
  }

  // 排序
  arr.sort((a, b) => a - b);

  // 将数组转换为链表
  let LinkedList = new ListNode(arr[0]);
  let pre = LinkedList;
  for (let i = 1; i < arr.length; i++) {
    pre.next = new ListNode(arr[i]);
    pre = pre.next;
  }
  return LinkedList;
};
```

### 26.Remove Duplicates from Sorted Array

```js
var removeDuplicates = function (nums) {
  // 得到新的没有重复的数组，从单纯的数组去重来说到这就ok了
  const newArr = [...new Set(nums)];
  // 输入的nums数组，全他娘的给暴力清空
  nums.splice(0);
  // 得到新的数组，添加到nums数组的开头，注意这个方法必须是会改变原数组的方法才有效
  // 系统在判定时会看这个nums数组
  nums.unshift(...newArr);
  // 返回新数组长度
  return nums.length;
};
```

