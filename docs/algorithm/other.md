---
lang: ja-JP
title: その他のサイト
---

# その他のコーディングテストサイト

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



## Codility

- [URL](https://app.codility.com/programmers/lessons/1-iterations/)
- `return`解答、入力の処理が特に必要ない
- **Node.js**: `v14` ES6対応可能



### LESSONS.2 Arrays -CyclicRotation

```js
function solution(A, K) {
  // 千万别忘了境界值
  if (K === 0 || A.length === 0) return A;

  while (K--) {
    A.unshift(A.pop());
  }
  return A;
}
```



## HackerRank

- [URL](https://www.hackerrank.com/dashboard)
- 題名の関数で`return`解答、入力の処理が特に必要ない、`main`関数でシステム判定
- **CSS**、**React**の問題あり



### Prepare - Easy.Solve Me First

```js
function solveMeFirst(a, b) {
  return a + b
}
```

### Prepare - Easy.Simple Array Sum

```js
function simpleArraySum(ar) {
  return ar.reduce((prev, curr) => prev + curr);
}
```

### New Year Chaos

[LINK](https://www.hackerrank.com/challenges/new-year-chaos/problem)

```typescript
function minimumBribes(q: number[]): void {
	let bribes: number = 0;

	for (let i = q.length - 1; i >= 0; i--) {
		const originalPosition: number = q[i] - 1;

		if (originalPosition - i > 2) {
			console.log("Too chaotic");
			return;
		}

		for (let j = Math.max(0, originalPosition - 1); j < i; j++) {
			if (q[j] > q[i]) {
				bribes++;
			}
		}
	}

	console.log(bribes);
}
```



## Codewars

- [URL](https://www.codewars.com/)
- `return`解答、入力の処理が特に必要ない
- **Node.js**: `v14` ES6対応可能



### Practice - Gravity-Flip

```js
const flip = (d, a) => {
  if (d === "R") return a.sort((a, b) => a - b);
  if (d === "L") return a.sort((a, b) => b - a);
};
```

### Practice - Check same case

```js
function sameCase(a, b) {
  const AZ = /[A-Z]/;
  const az = /[a-z]/;
  const STR = /[A-Za-z]/;

  if (!STR.test(a) || !STR.test(b)) return -1;
  if (AZ.test(a) && AZ.test(b)) return 1;
  if (az.test(a) && az.test(b)) return 1;
  return 0;
}
```

