---
lang: ja-JP
title: LeetCode
---

# LeetCode

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
メモとして自分の回答を整理します。  
メモしやすいため、一部のコメントは中国語です。
:::



## メモ

- `return`解答、入力の処理が特に必要ない
- `return`しなくてそのまま解答の問題もあり



## Medium

### 151.Reverse Words in a String

```js
var reverseWords = function (s) {
	const arr = s
		.split(" ")
		.filter((e) => e !== "")
		.map((e) => e.trim());
	return arr.reverse().join(" ");
};
```



## EASY

### 01. Two Sum

ハッシュテーブル（`map写像`）

```js
var twoSum = function(nums, target) {
  const map = new Map()
  for(let i = 0; i < nums.length; i++){
    if(map.has(target - nums[i])){
      return [map.get(target - nums[i]), i]
    }
    map.set(nums[i] , i)
  }
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

### 21.Merge Two Sorted Lists（連結リスト学習）

配列方法

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

### 27.Remove Element

```js
var removeElement = function (nums, val) {
  // 得到筛选后的符合要求的数组，从单纯的数组移除元素来说到这就ok了
  const arr = nums.filter((i) => {
    return i !== val;
  });
  // 输入的nums数组，全他娘的给暴力清空
  nums.splice(0);
  // 得到新的数组，添加到nums数组的开头，注意这个方法必须是会改变原数组的方法才有效
  // 系统在判定时会看这个nums数组
  nums.unshift(...arr);
  // 返回数组长度
  return nums.length;
};
```

### 35. Search Insert Position

```javascript
var searchInsert = function (nums, target) {
  if (!nums.includes(target)) {
    nums.push(target);
    nums.sort((a, b) => a - b);
  }

  return nums.findIndex((i) => i === target);
};
```

### 58.Length of Last Word

```js
var lengthOfLastWord = function (s) {
  const str = s.trim().split(" ");
  return str[str.length - 1].length;
};
```

### 59.Plus One

```js
var plusOne = function(digits) {
  const num = BigInt(digits.join("")) + 1n;
  const res = num.toString().split("");
  return res;
};
```

### 67.Add Binary

```js
var addBinary = function (a, b) {
  // 比较两个字符串的长度，将较短的那个前面补足 0
  if (a.length < b.length) {
    a = "0".repeat(b.length - a.length) + a;
  } else {
    b = "0".repeat(a.length - b.length) + b;
  }

  // 将两个字符串转为倒序数组
  a = a.split("").reverse();
  b = b.split("").reverse();

  // 将字符串中的数据两两相加，并加上上一个位置的进位
  let sum = 0;
  let carry = 0;
  let res = [];
  a.forEach((item, i) => {
    sum = Number(item) + Number(b[i]) + carry;
    if (sum > 1) {
      res.push(sum % 2);
      carry = parseInt(sum / 2);
    } else {
      res.push(sum);
      carry = 0;
    }
  });

  // 若最后一个进位大于0，则加入结果中
  if (carry > 0) {
    res.push(carry);
  }

  // 将求得的结果倒序，并转为字符串
  return res.reverse().join("");
};
```

### 69.Sqrt(x)

a.標準ライブラリ

```js
var mySqrt = function (x) {
    return Math.floor(Math.sqrt(x))
};
```

b.二分探索

```js
var mySqrt = function (x) {
  // 思路：一旦mid在调整后仍然取值不变，就返回mid。用mid2判断
  // 注意这里用的是值来查
  // 因为这个题是取整的，而不是要求与n最接近的整数，所以mid那块用的是floor而不是ceil。
  // 最后,这个解法的bug是n=1时会返回0，所以再处理一下这个特殊输入值就行了。
  if (x === 1) {
    return 1;
  }
  let left = 0;
  let right = x;
  let mid;
  while (1) {
    mid = Math.floor((left + right) / 2);
    if (mid ** 2 === x) {
      return mid;
    } else if (mid ** 2 > x) {
      right = mid;
    } else {
      left = mid;
    }
    mid2 = Math.floor((left + right) / 2);
    if (mid === mid2) {
      return mid;
    }
  }
};
```

### 70.Climbing Stairs

a.フィボナッチ数一般項/斐波那契数列通项公式

```js
var climbStairs = function(n) {
const sqrt_5 = Math.sqrt(5);
const fn = Math.pow((1 + sqrt_5) / 2, n + 1) - Math.pow((1 - sqrt_5) / 2,　n + 1);
return Math.round(fn / sqrt_5)
};
```

b.フィボナッチ数漸化式/斐波那契数列递推公式

```js
var climbStairs = function(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
};
```

### 704.Binary Search(二分探索学習)

a.標準ライブラリ

```js
var search = function(nums, target) {
  return nums.indexOf(target)
};
```

b.二分探索

```js
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
    
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};
```

### 367.Valid Perfect Square(二分探索学習)

a.標準ライブラリ

```js
var isPerfectSquare = function(num) {
    return Number.isInteger(Math.sqrt(num))
};
```

b.二分探索

```js
var isPerfectSquare = function (num) {
  let left = 0;
  let right = num;

  while (left <= right) {
    let mid = left + ((right - left) >> 1);

    if (mid * mid > num) {
      right = mid - 1;
    } else if (mid * mid < num) {
      left = mid + 1;
    } else {
      return true;
    }
  }

  return false;
};
```

### 977.Squares of a Sorted Array(ダブルポインタ)

a.標準ライブラリ

```js
var sortedSquares = function(nums) {
  const res = nums.map((e)=> e*e)
  return res.sort((a,b)=> a-b)
};
```

b.ダブルポインタ

```js
var sortedSquares = function(nums) {
    let n = nums.length;
    let res = new Array(n).fill(0);
    let i = 0;
    let j = n - 1; 
    let k = n - 1;
    while (i <= j) {
        let left = nums[i] * nums[i],
            right = nums[j] * nums[j];
        if (left < right) {
            res[k] = right;
            k--;
            j--;
        } else {
            res[k] = left;
            k--;
            i++;
        }
    }
    return res;
};
```

### 203.Remove Linked List Elements（連結リスト学習）

a.配列方法

```js
var removeElements = function(head, val) {
// 先判断链表是不是空
if (head === null) return null;

// 把链表转换为数组
let arr = [];
while (head !== null) {
  arr.push(head.val);
  head = head.next;
}

// 数组筛选，注意这里要要判断一下都是一样数字的情况
const lai = arr.filter((e) => e !== val);
if (lai.length === 0) return null;

// 把数组转换为链表
let LinkedList = new ListNode(lai[0]);
let pre = LinkedList;
for (let i = 1; i < lai.length; i++) {
  pre.next = new ListNode(lai[i]);
  pre = pre.next;
}

return LinkedList;
};
```

b.直接的に連結リストを操作

```js
var removeElements = function (head, val) {
  // 虚拟头节点法
  // 插入头节点
  const ret = new ListNode(0, head);

  // 获取当前节点
  let cur = ret;

  // 遍历链表
  while (cur.next) {
    if (cur.next.val === val) {
      // 删除条件节点
      cur.next = cur.next.next;
      continue;
    }
    // 更新当前节点
    cur = cur.next;
  }

  // 返回虚拟节点的排除头节点的部分
  return ret.next;
};
```

### 206.Reverse Linked List（連結リスト学習）

配列方法

```js
var reverseList = function (head) {
  if (head === null) {
    return null;
  }

  const arr = [];
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }

  const lai = arr.reverse();

  let LinkedList = new ListNode(arr[0]);
  let pre = LinkedList;
  for (let i = 1; i < arr.length; i++) {
    pre.next = new ListNode(arr[i]);
    pre = pre.next;
  }

  return LinkedList;
};
```

### 160.Intersection of Two Linked Lists（連結リスト学習）

`set集合`方法

```js
var getIntersectionNode = function (headA, headB) {
  const set = new Set();

  while (headA) {
    set.add(headA);
    headA = headA.next;
  }

  while (headB) {
    if (set.has(headB)) return headB;
    headB = headB.next;
  }

  return null;
};
```

### 242.Valid Anagram

```js
var isAnagram = function (s, t) {
  return [...s].sort().join("") === [...t].sort().join("");
};
```

### 349.Intersection of Two Arrays

```js
var intersection = function (nums1, nums2) {
	let arr = [];
	for (let i = 0; i < nums1.length; i++) {
		if (nums2.includes(nums1[i])) {
			arr.push(nums1[i]);
		}
	}

	return [...new Set(arr)];
};
```

### 202.Happy Number

```js
var isHappy = function (n) {
    // 要点就是这个，如果重复了就说明会陷入无限循环，所以需要记录一下每次计算的总和
    // 这道题之所以被分类为哈希，就是因为可以用set来记录，set可以判断是否重复，不过都一样
	let match = [];
	const lai = (num) => {
		const arr = num.toString().split("").map(Number);
		let count = 0;
		for (let i = 0; i < arr.length; i++) {
			count += arr[i] ** 2;
		}

		if (count === 1) {
			return true;
		} else {
			if (!match.includes(count)) {
				match.push(count);
				return lai(count);
			} else {
				return false;
			}
		}
	};

	return lai(n);
};

```

### 383.Ransom Note

```js
var canConstruct = function (ransomNote, magazine) {
	const ran = ransomNote.split("");
	const maga = magazine.split("");

	let arr = [];
	for (let i = 0; i < ran.length; i++) {
		if (maga.includes(ran[i])) {
			arr.push(ran[i]);
			// 这里是关键，为了避免重复，要删除已经判定完的字母
			maga.splice(
				maga.findIndex((n) => n === ran[i]),
				1
			);
		}
	}

	return arr.join("") === ransomNote ? true : false;
};
```

### 344.Reverse String

a.標準ライブラリ

```js
// Do not return anything, modify s in-place instead.
var reverseString = function(s) {
 　s.reverse()
};
```

b.二分探索

```js
// Do not return anything, modify s in-place instead.
var reverseString = function(s) {
    let l = -1, r = s.length;
    // 注意这里把语句写在条件里了，可以，也可以写到外面
    while(++l < --r) [s[l], s[r]] = [s[r], s[l]];
};
```

### 541.Reverse String II

```js
var reverseStr = function (s, k) {
	const len = s.length;
	let resArr = s.split("");
	for (let i = 0; i < len; i += 2 * k) {
		let l = i - 1,
			r = i + k > len ? len : i + k;
		while (++l < --r) [resArr[l], resArr[r]] = [resArr[r], resArr[l]];
	}
	return resArr.join("");
};
```

### HZFE.Offer 05

```js
var replaceSpace = function(s) {
  return s.replaceAll(' ','%20')
};
```

### HZFE.Offer 58 

```js
var reverseLeftWords = function (s, n) {
	let tmp = [];
	for (let i = 0; i < n; i++) {
		tmp.push(s[i]);
	}
	const old = s.split("").slice(n).join("");
	return old + tmp.join("");
};
```

### 459.Repeated Substring Pattern

```js
var repeatedSubstringPattern = function (s) {
    // 精髓就是相加
	const ss = s + s;
	const lai = ss.slice(1, ss.length - 1);
	return lai.search(s) >= 0 ? true : false;
};
```

### 232.Implement Queue using Stacks

```js
// 使用两个数组的栈方法（push, pop） 实现队列
var MyQueue = function () {
	this.stackIn = []; // IN栈,数据进入的栈
	this.stackOut = []; // OUT栈,数据出去的栈
};

// ，添加数据，压入IN栈
MyQueue.prototype.push = function (x) {
	this.stackIn.push(x);
};

// 清除数据，在OUT栈清除
MyQueue.prototype.pop = function () {
	// 先判断OUT栈有没有东西，有东西直接删除
	const size = this.stackOut.length;
	if (size) {
		return this.stackOut.pop();
	}

	// 没有就向OUT栈添加IN栈数据，注意要倒着添加
	while (this.stackIn.length) {
		// 这地方妙，添加的同时删除IN栈，添加的都是删除pop方法的返回值
		this.stackOut.push(this.stackIn.pop());
	}
	// 在OUT栈清除
	return this.stackOut.pop();
};

// 查询队列
MyQueue.prototype.peek = function () {
	// 直接pop取得返回值，操作的是OUT栈
	const res = this.pop();
	// 把删除的给加回来，操作的是OUT栈
	this.stackOut.push(res);
	return res;
};

// 查询队列是否为空
MyQueue.prototype.empty = function () {
	// 需要两个都为空
	return !this.stackIn.length && !this.stackOut.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
```

### 225.Implement Stack using Queues

```js
// 使用一个队列实现
// 使用数组（push, shift）模拟队列
var MyStack = function () {
	this.queue = [];
};

// 进入队列
MyStack.prototype.push = function (x) {
	this.queue.push(x);
};

// 关键，栈是先入后出，队列是先进先出
// 把先进去的队列的东西取出来，塞回队列，暴露最后一个然后弹出
MyStack.prototype.pop = function () {
	let size = this.queue.length;
	while (size-- > 1) {
		this.queue.push(this.queue.shift());
	}
	return this.queue.shift();
};

// 重复一遍pop然后取值
MyStack.prototype.top = function () {
	const x = this.pop();
	this.queue.push(x);
	return x;
};

// 查看是否为空
MyStack.prototype.empty = function () {
	return !this.queue.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
```

