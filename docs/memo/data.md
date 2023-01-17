---
lang: ja-JP
title: コーディングテスト中のデータ構造
---

# コーディングテスト中のデータ構造

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



📡 [Qiita](https://qiita.com/kensoz/items/9f9c827f1985babf585e) · [Juejin](https://juejin.cn/post/7189536127416533029/)



## 一、ハッシュテーブル

#### 1.配列Array

```js
const arr = [1, 2, 3]
```

#### 2.集合Set

```js
const set = new Set([1, 2, 3]);
```

#### 3.写像Map

```js
const map = new Map([
  ['name', 'renhou'],
  ['title', 'Author']
]);
```



## 二、スタック

```js
function Stack(){
    // スタック
    this.items = [];
    // 追加
    Stack.prototype.push = function(element){
       this.items.push(element);
    }
    // 削除
    Stack.prototype.pop = function(){
        return this.items.pop();
    }
    // 取得
    Stack.prototype.peek = function(){
        return this.items[this.items.length-1];
    }
}

// 使用
const stack = new Stack();
```



## 三、キュー

```js
function Queue() {
	// キュー
	this.dataStore = [];
	// 追加
	Queue.prototype.enqueue = function (element) {
		this.dataStore.push(element);
	};
	// 削除
	Queue.prototype.dequeue = function () {
		this.dataStore.shift();
	};
	// 取得
	Queue.prototype.theFront = function () {
		return this.dataStore[0];
	};
}

// 使用
const queue = new Queue();
```



## 四、連結リスト

```js
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const makeList = (protoArr) => {
  let list = new ListNode(protoArr[0]);
  let pre = list;
  for (let i = 1; i < protoArr.length; i++) {
    pre.next = new ListNode(protoArr[i]);
    pre = pre.next;
  }
  return list;
};

// 使用
const list = makeList([1, 2, 3, 4, 5, 6])
```



## 五、二分木

```js
function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

const tree = (arr) => {
	if (!arr || arr.length === 0) return null;

	let root = new TreeNode(arr.shift());
	let nodeQueue = [root];

	while (arr.length > 0) {
		let node = nodeQueue.shift();
		if (arr.length === 0 || node === undefined) break;
    
		const leftArr = arr.shift();
		if (leftArr !== null) {
			let left = new TreeNode(leftArr);
			node.left = left;
			nodeQueue.push(left);
		}


		if (arr.length === 0) break;

		const rightArr = arr.shift();
		if (rightArr !== null) {
			let right = new TreeNode(rightArr);
			node.right = right;
			nodeQueue.push(right);
		}
	}

	return root;
};

// 使用
tree([1, 2, 3, 4, 5, 6, 7, 8, 9])
```

