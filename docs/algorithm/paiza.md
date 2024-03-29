---
lang: ja-JP
title: Paiza
---

# Paiza

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



## メモ

- Paizaの回答と違っている回答はあります、ここは最適解です
- `console.log(解答)`、入力の処理が必要
- 改行：`"\n"`
- 文字列転換：

  ```js
  const str = "2 3"
  console.log(str.split(" ")) // ["2","3"]
  console.log(str.split(" ").join("")) // "23"
  ```
  
- new input

  ```js
  const readFromStdin = async () => {
    let data = ''
    process.stdin.resume()
    process.stdin.setEncoding('utf8')
    for await (const chunk of process.stdin) {
      data += chunk
    }
    return data.split('\n')
  }
  
  const solution = (lines) => {
   // ここでコードを書いてください
  }
  
  readFromStdin().then(solution)
  ```



## Aランク

### A052:階段登り

```js
const n = Number(lines[0])
const arr = lines[1].split(" ").map(Number)
const A = arr[0];
const B = arr[1];

let dp = [];
for (let i = 1; i <= B; i++) {
  i % A === 0 ? dp.push(1) : dp.push(0);
  i === B && dp[B - 1]++;
}

for (let i = B; i < n; i++) {
  dp[i] = dp[i - A] + dp[i - B];
}

let res = dp.slice(0, n - 1);
console.log(res.filter((i) => i === 0).length);
```

### A066:連勤記録

```js
const n = Number(lines[0])
let arr = [];
for (let i = 1; i <= n; i++) {
	arr.push(Number(lines[i].split(" ")[0]));
	arr.push(Number(lines[i].split(" ")[1]));
}

let res = 0;
let start = arr.shift();
let end = arr.shift();

for (let i = 1; i < n; i++) {
	let a = arr.shift();
	let b = arr.shift();
	if (a < start) {
		start = a;
	}
	if (a <= end + 1) {
		end = Math.max(end, b);
	} else {
		res = end + 1 - start;
		start = a;
		end = b;
		res = Math.max(res, end + 1 - start);
	}
}
res = Math.max(res, end + 1 - start);
console.log(res);
```

### A051:板たおし

new input

```js
const solution = (lines) => {
  const [h, w] = lines[0].split(' ').map(Number)
  const s = []
  for (let i = 1; i <= h; i++) {
    s.push(lines[i].split(' ').map(Number))
  }

  const dp = Array.from({ length: h }, () => new Array(w).fill(0))
  for (let j = 0; j < w; j++) {
    dp[h - 1][j] = s[h - 1][j]
  }
  for (let i = h - 2; i >= 0; i--) {
    for (let j = 0; j < w; j++) {
      dp[i][j] = Math.max(
        j - 1 >= 0 ? dp[i + 1][j - 1] : 0,
        dp[i + 1][j],
        j + 1 < w ? dp[i + 1][j + 1] : 0
      ) + s[i][j]
    }
  }
  console.log(Math.max(...dp[0]))
}
```

### A059:金魚の美しさ

new input

```js
const solution = (lines) => {
  const [n, x] = lines[0].split(' ').map(Number)
  const fish = lines.slice(1).map(line => line.split(' ').map(Number))
  const dp = new Array(x + 1).fill(0)

  for (let i = 0; i < n; i++) {
    const [w, r] = fish[i]
    for (let j = x; j >= w; j--) {
      dp[j] = Math.max(dp[j], dp[j - w] + r)
    }
  }

  console.log(dp[x])
}
```



## Bランク

### B034:ロボットの歩行実験

```js
// 初期化
const x = Number(lines[0].split(" ")[0]);
const y = Number(lines[0].split(" ")[1]);
const lai = lines[1].split(" ");
const go = Number(lines[2]);
const W = "West";
const E = "East";
const N = "North";
const S = "South";
const NESW = [N, E, S, W];

// ロボット行為
class Behavior {
  constructor() {
    this._way = 0;
    this._move = 0;
  }

  turn(e) {
    switch (e) {
      case "R":
        this._way = (this._way + 1) % 4;
        return true;
      case "B":
        this._way = (this._way + 2) % 4;
        return true;
      case "L":
        this._way = (this._way + 3) % 4;
        return true;
      case "F":
        return true;
      default:
        return false;
    }
  }

  move(e) {
    switch (e) {
      case "R":
        this._move = (this._way + 1) % 4;
        return [this._move, NESW[this._move]];
      case "B":
        this._move = (this._way + 2) % 4;
        return [this._move, NESW[this._move]];
      case "L":
        this._move = (this._way + 3) % 4;
        return [this._move, NESW[this._move]];
      case "F":
        this._move = this._way % 4;
        return [this._move, NESW[this._move]];
      default:
        return false;
    }
  }
}

// ロボットクラス
class Robot extends Behavior {
  constructor(x, y, a) {
    super();
    this._x = x;
    this._y = y;
    this._arr = {
      F: a[0],
      R: a[1],
      B: a[2],
      L: a[3],
    };
  }

  // 省略可能 
  turn(e) {
    super.turn(e);
  }

  move(e) {
    switch (super.move(e)[1]) {
      case W:
        this._x -= this._arr[e];
        return true;
      case E:
        this._x += this._arr[e];
        return true;
      case N:
        this._y += this._arr[e];
        return true;
      case S:
        this._y -= this._arr[e];
        return true;
      default:
        return false;
    }
  }

  get laiX() {
    return this._x;
  }

  get laiY() {
    return this._y;
  }
}

// newロボット
const robot = new Robot(x, y, lai.map(Number));

// 移動
for (let i = 1; i <= go; i++) {
  lines[i + 2][0] === "m"
    ? robot.move(lines[i + 2][2])
    : robot.turn(lines[i + 2][2]);
}

// 結果
console.log(robot.laiX + " " + robot.laiY);
```

### B029:地価の予想

```js
const xy = {
  x: Number(lines[0].split(" ")[0]),
  y: Number(lines[0].split(" ")[1]),
};
const k = Number(lines[1]);
const N = Number(lines[2]);
const lai = new Array(N);
const distance = (p, xy) => {
  return Math.pow(Math.pow(p.x - xy.x, 2) + Math.pow(p.y - xy.y, 2), 0.5);
};

for (let i = 0; i < N; i++) {
  lai[i] = {
    x: Number(lines[3 + i].split(" ")[0]),
    y: Number(lines[3 + i].split(" ")[1]),
    price: Number(lines[3 + i].split(" ")[2]),
  };
}

lai.sort((a, b) => {
  return distance(a, xy) <= distance(b, xy) ? -1 : 1;
});

let total = 0;
for (let i = 0; i < k; i++) {
  total += lai[i].price;
}
console.log(Math.round(total / k));
```



## Cランク

### C102:行きたいライブのスケジュール

```js
const An = Number(lines[0]);
const Bn = Number(lines[An + 1]);
const Aarr = lines.slice(1, An + 1).map(Number);
const Barr = lines.slice(An + 2).map(Number);

let res = [];
let flg = true;
for (let i = 1; i <= 31; i++) {
  if (!Aarr.includes(i) && !Barr.includes(i)) {
    res.push("x");
  } else if (Aarr.includes(i) && !Barr.includes(i)) {
    res.push("A");
  } else if (!Aarr.includes(i) && Barr.includes(i)) {
    res.push("B");
  } else {
    res.push(flg ? "A" : "B");
    flg = !flg;
  }
}

console.log(res.join("\n"));
```

### C086:ハンドルネームの生成

```js
const reg = /a|e|i|o|u|A|E|I|O|U/ig
const lai = lines[0].replace(reg, "")
console.log(lai)
```

### C049:【ぱいじょ！コラボ問題】エレベーター

```js
const N = Number(lines[0])
let res = 0
let pre = 1
for (let i = 1; i <= N; i++) {
	const big = Number(lines[i]) > pre ? Number(lines[i]) : pre;
	const small = Number(lines[i]) > pre ? pre : Number(lines[i]);
	res = res + big - small
	pre = Number(lines[i]);
}
console.log(res);
```

### C013:嫌いな数字 

```js
let lai = lines[1];
let arr = [];

for (let i = 1; i <= lai; i++) {
  if (lines[i + 1].indexOf(lines[0]) < 0) arr.push(lines[i + 1]);
}

arr.length > 0 ? console.log(arr.join("\n")) : console.log("none");
```

### C016:Leet文字列 

```js
const arr = lines[0].split("");
const obj = {
  A: "4",
  E: "3",
  G: "6",
  I: "1",
  O: "0",
  S: "5",
  Z: "2",
};

arr.forEach((e, index, arr) => {
  arr[index] = obj[arr[index]] ? obj[arr[index]] : arr[index];
});

console.log(arr.join(""));
```

### C030:白にするか黒にするか

```js
let arr = [];
let lai = lines[0].split(" ").map(Number);

for (let i = 0; i < lai; i++) {
  let roopArr = lines[i + 1].split(" ");
  for (let j in roopArr) {
    roopArr[j] = roopArr[j];
  }
  arr[i] = roopArr;
}

for (let e in arr) {
  for (let c in arr[e]) {
    arr[e][c] >= 128 ? (arr[e][c] = 1) : (arr[e][c] = 0);
  }
}

for (let a in arr) {
  console.log(arr[a].join(" "));
}
```

### C084:【キャンペーン問題】枠で囲む

```js
const jiajia = Array(lines[0].length + 2).fill("+").join("")
const lai = "+" + lines[0]  + "+"
console.log(jiajia + "\n" + lai + "\n" + jiajia);
```

### C120:花のリース

```js
const N = Number(lines[0])
const A = lines[1]
const B = lines[2].split("")
let count = 0;

const lai = () => {
	count++;

    // Queueで解決
	const x = B.shift();
	B.push(x);

	if (B.join("") === A) {
		console.log("Yes");
		return;
	}

	if (count === N) {
		console.log("No");
		return;
	}
	
	return lai()
};

lai()
```

### C097:プレゼント応募企画の実施

```js
const arr = lines[0].split(" ").map(Number)
const res = Array(arr[0]).fill("");

for (let i = 1; i <= arr[0]; i++) {
	if (i % arr[1] === 0) {
		res[i - 1] = res[i - 1] + "A";
	}
	if (i % arr[2] === 0) {
		res[i - 1] = res[i - 1] + "B";
	}
	if (res[i - 1] === "") {
		res[i - 1] = "N";
	}
}

console.log(res.join("\n"));
```

### C115:渋滞の距離

```js
const config = lines[0].split(" ");
let res = 0;
for (let i = 1; i < Number(config[0]); i++) {
	if (Number(lines[i]) <= Number(config[1])) {
		res = res + Number(lines[i]);
	}
}

console.log(res);
```

### C121:レストランの人気メニュー

```js
const config = lines[0].split(" ").map(Number);
let conut = 0;
let kaluli = 0;
for (let i = 1; i < config[0]; i++) {
	const arr = lines[i].split(" ").map(Number);
	if (kaluli + arr[1] <= Number(config[1])) {
		kaluli = kaluli + arr[1];

		if (arr[0] <= 10) {
			conut++;
		}
	} else {
		break;
	}
}

console.log(conut < 10 ? conut : "Yes");
```

### C122:【2022年Xmas問題】プレゼントのセール

```js
let arr = [];
const [N, X, Y] = lines[0].split(" ").map(Number);
for (let i = 1; i <= N; i++) {
	arr.push(Number(lines[i]));
}

if (X <= N) arr.sort((a, b) => a - b).splice(0, Y);
console.log(arr.reduce((prev, curr) => prev + curr));
```

### C020:残り物の量

```js
const arr = lines[0].split(" ").map(Number)
const m = arr[0]
const p = arr[1]/100
const q = arr[2]/100
const tmp = m - m*p
console.log(tmp - tmp*q);
```

### C039:古代の数式

```js
const arr = lines[0].split("+");

let res = [];
let size = arr.length;
while (size--) {
	const tmp = arr[size].split("");
	for (let i = 0; i < tmp.length; i++) {
		if (tmp[i] === "<") {
			res.push(10);
		} else {
			res.push(1);
		}
	}
}

console.log(res.reduce((p, c) => p + c));
```

### C101:【2021年Xmas問題】ラッキーデイ

```js
const N = Number(lines[0])
const reg = new RegExp(N);

let year = 366;
let res = 0;
while (year--) {
  if (reg.test(year)) res++;
}

console.log(res);
```

### C052:ゲームの画面

```js
const arr = [lines[0].split(" "), lines[1].split(" ")].flat().map(Number)
const Y = arr[0]
const X = arr[1]
const dy = Math.abs(arr[2])
const dx = Math.abs(arr[3])
console.log((Y*dx) + (X*dy) - (dx*dy));
```

### C099:折り紙の貼り合わせ

```js
const [N, D] = lines[0].split(" ").map(Number)
let arr = []
for(let i = 1; i < N; i++){
    arr.push(Number(lines[i]))
}
const tmp = N*D - arr.reduce((x, y) => x + y)
console.log(tmp * D);
```

### C090:【40万人記念問題】黒電話

```js
const tel = lines[0].replaceAll("-", "").split("").map(Number);
let res = 0;
for (let i of tel) {
	res += i === 0 ? 24 : (i + 2) * 2;
}
console.log(res);
```

### C062:回転寿司のメロン

```js
const t = Number(lines[0]);
let res = 0;
for (let i = 1; i <= t; i++) {
  if (lines[i] === "melon") {
    res++;
    i += 10;
  }
}
console.log(res);
```

### C117:大量出店

```js
const [N, M] = lines[0].split(" ").map(Number);
const [A, B, C] = lines[1].split(" ").map(Number);
let res = 0;
for (let i = 2; i < N + 2; i++) {
  const tmp = Number(lines[i]);
  if (tmp * C - A - M * B < 0) {
    res++;
  }
}
console.log(res);
```

### C035:試験の合格判定

```js
const fuc = (e) => {
  const arr = e.split(" ");
  const total = arr.slice(1, 6).reduce((prev, curn) => prev - 0 + (curn - 0));

  if (total < 350) {
    return false;
  }

  switch (arr[0]) {
    case "s":
      return (
        arr.slice(2, 4).reduce((prev, curn) => prev - 0 + (curn - 0)) >= 160
      );
      break;

    case "l":
      return (
        arr.slice(4, 6).reduce((prev, curn) => prev - 0 + (curn - 0)) >= 160
      );
      break;

    default:
      break;
  }
};

const N = Number(lines[0]);
let res = 0;
for (let i = 1; i <= N; i++) {
  fuc(lines[i]) && res++;
}
console.log(res);
```

### C123:節分ロボット

```js
let age = [];
const N = Number(lines[0]);
for (let i = 1; i <= N; i++) {
  age.push(Number(lines[i]));
}

let bean = Array(N).fill(0);
let M = Number(lines[N + 1]);
let index = N + 2;
const lai = (arr) => {
  const [s, e, count] = arr.split(" ").map(Number);
  for (let i = 0; i < age.length; i++) {
    if (s - 1 <= i && e - 1 >= i) {
      bean[i] += count;
    }

    if (bean[i] > age[i]) {
      bean[i] = age[i];
    }
  }
};

while (M > 0) {
  lai(lines[index]);
  index++;
  M--;
}

console.log(bean.join("\n"));
```

### C021:暴風域にいますか？

这个很迷不知道为啥运行时错误，结果肯定没错，推测是因为while

```js
const [xc, yc, r_1, r_2] = lines[0].split(" ").map(Number);
let res = [];
let n = Number(lines[1]);
let index = n - 1;
while (n-- > 0) {
  const [x, y] = lines[index].split(" ").map(Number);
  index++;
  if (
    r_1 * r_1 <= (x - xc) * (x - xc) + (y - yc) * (y - yc) &&
    (x - xc) * (x - xc) + (y - yc) * (y - yc) <= r_2 * r_2
  ) {
    res.push("yes");
  } else {
    res.push("no");
  }
}

console.log(res.join("\n"));
```

### C112:時差ボケ

```js
const n = Number(lines[0]);
let res = [];
for (let i = 1; i <= n; i++) {
  const [s, f, b] = lines[i].split(" ").map(Number);
  res.push(s + f + (24 - b));
}

console.log(Math.min(...res) + "\n" + Math.max(...res));
```

### C096:夏休み

这题也坑了，应该固定一个人日程，然后让每个人的日程和他比较，傻逼了

```js
const n = Number(lines[0]);
let flg = [];

let k = 1;
for (let i = 2; i <= n; i++) {
  const arr1 = lines[i].split(" ").map(Number);
  const arr2 = lines[k].split(" ").map(Number);
  const start = [Math.min(...arr1), Math.min(...arr2)];
  const end = [Math.max(...arr1), Math.max(...arr2)];
  flg.push(Math.max(...start) <= Math.min(...end));
  k++;
}

const res = new Set(flg);
if (res.has(true) && res.size === 1) {
  console.log("OK");
} else {
  console.log("NG");
}
```

### C014:ボールが入る箱

```js
const [n, r] = lines[0].split(" ").map(Number);
const l = r * 2;
let res = [];
for (let i = 1; i <= n; i++) {
	const [a, b, c] = lines[i].split(" ").map(Number);
	if (a >= l && b >= l && c >= l) {
		res.push(i);
	}
}
console.log(res.join("\n"));
```

### C023:クジの当選番号

```js
const arr = lines[0].split(" ").map(Number);
const n = Number(lines[1]);
let res = [];
for (let i = 2; i <= n + 1; i++) {
	let count = 0;
	const tmp = lines[i].split(" ").map(Number);
	for (let j = 0; j < arr.length; j++) {
		if (tmp.includes(arr[j])) {
			count++;
		}
	}
	res.push(count);
}
console.log(res.join("\n"));
```

### C124:インターンへの応募
有点难度啊这题，有两个没整出来

```js
const n = Number(lines[0]);
let index = 1;
let count = 0;
let res = 0;
let arr = [];

for (let i = 1; i < lines.length; i++) {
  if (index === i && index < lines.length) {
    count = Number(lines[i]);
    index = index + count + 1;
    tmp = false;
  } else {
    let [s, e] = lines[i].split(" ").map(Number);
    if (!arr.includes(s) && !arr.includes(s + e - 1)) {
      while (e--) {
        arr.push(s);
        s++;
      }

      if (!tmp) {
        tmp = true;
        res++;
      }
    }
  }
}

console.log(res);
```

### C055:ログのフィルター

```js
let res = [];
let n = Number(lines[0]);
const reg = new RegExp(lines[1]);

let index = 2;
while (n--) {
	if (reg.test(lines[index])) res.push(lines[index]);
	index++;
}

console.log(res.length === 0 ? "None" : res.join("\n"));
```

### C056:テストの採点
```js
const [n, pass] = lines[0].split(" ").map(Number);
let res = [];
for (let i = 1; i <= n; i++) {
	const [s, b] = lines[i].split(" ").map(Number);
	let tmp = s - 5 * b >= 0 ? s - 5 * b : 0;
	tmp >= pass && res.push(i);
}
console.log(res.join("\n"));
```

### C075:ポイント払い


```js
let [cash, n] = lines[0].split(" ").map(Number);
let res = [];
let point = 0;

for (let i = 1; i <= n; i++) {
  const tmp = Number(lines[i]);

  if (point >= tmp) {
    point -= tmp;
  } else if (point < tmp && cash >= tmp) {
    cash -= tmp;
    point += 0.1 * tmp;
  }

  res.push(`${cash} ${point}`);
}

console.log(res.join("\n"));
```

### C114:しりとりの判定

```js
const n = Number(lines[0]);
let res = false;
let tmp = [];

for (let i = 1; i < n; i++) {
	const s = lines[i];
	const e = lines[i + 1];

	if (s[s.length - 1] === e[0]) {
		res = true;
	} else {
		res = false;
		tmp.push(s[s.length - 1], e[0]);
		break;
	}
}

res ? console.log("Yes") : console.log(tmp.join(" "));
```

### C017:ハイアンドロー・カードゲーム

```js
const [a, b] = lines[0].split(" ").map(Number)
const n = Number(lines[1])
let res = []

for (let i = 2; i <= n + 1; i++) {
	const [ak, bk] = lines[i].split(" ").map(Number);
	if (a > ak) {
		res.push("High");
	} else if (a < ak) {
		res.push("Low");
	} else {
		if (b < bk) {
			res.push("High");
		} else {
			res.push("Low");
		}
	}
}
  console.log(res.join("\n"));
```



## Dランク

### D229:どれだけ増えた

```js
console.log(Number(lines[0]) - 10);
```

### D053:トリック・オア・トリート

```javascript
 lines[0] == "candy" || lines[0] === "chocolate" ? console.log("Thanks!") : console.log("No!");
```

### D041:本棚選び

```js
const lai = lines[0].split(" ")
const res = lai[2] * lai[1] > lai[0] ? 'OK' : 'NG'
console.log(res);
```

### D054:11/11

```js
 const lai = lines[0];
 console.log(lai.length >= 11 ? "OK" : 11 - lai.length);
```

### D002:数の比較

```js
const a = (a, b) => {
  a != b ? console.log(Math.max(a, b)) : console.log("eq");
};

const arr = lines[0].split(" ");
a(parseInt(arr[0]), parseInt(arr[1]));
```

### D049:◯◯の秋

```js
console.log(lines[0].replace(/noaki$/,''))
```

### D037:花粉症でつらい

```js
const a = lines[0];
const b = lines[1];
console.log(Math.ceil(b/a));
```

### **D043**:天気の表示 

```js
const lai = lines[0];

lai >= 71
  ? console.log("rainy")
  : lai >= 31
  ? console.log("cloudy")
  : console.log("sunny");
```

### **D042**:行列

```js
const lai = lines.map((x) => {
  return x.split(" ")
});

console.log(lai[0][0] * lai[1][1] - lai[0][1] * lai[1][0]);
```

### **D039**:正三角形かどうか

```js
let flg = true;
for (let i = 1; i <= 2; i++) {
  if (lines[i] !== lines[i - 1]) flg = false;
}
console.log(flg ? "YES" : "NO");
```

### D048:台風の間隔 

```js
for (let i = 0; i <= lines.length - 2; i++) {
  console.log(lines[i + 1] - lines[i]);
}
```

### D047:メダリストの表示 

```js
const arr = ["Gold", "Silver", "Bronze"];
for (let i in arr) {
  console.log(arr[i] + " " + lines[i]);
}
```

### D220:【騎士と魔女コラボ問題】従業員の数

```js
console.log(Number(lines[0]) + Number(lines[1]));
```

### D219:犬猿の仲

```js
console.log(lines[0] === 'saru' ? 'No' : 'Yes');
```

### D162:【推しプロコラボ問題】お米の重さ

```js
console.log(lines[0]*150);
```

### D166:何日後になるか

```js
console.log(lines[0] * 7);
```

### D192:感嘆符の付与

```js
console.log(lines[0]+ "!");
```

### D032:充電時間

```js
console.log(100 - lines[0]);
```

### D151:お菓子のプレゼント

```js
  if(lines[0] === "chocolate"){
      console.log(Number(lines[1]) * 2);
  }else{
      console.log(Number(lines[1]) * 5);
  }
```

### D062:ひな祭り

```js
  　const arr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const lai = lines[0].split(" ");
    const one = arr.splice(0,lai[0]).join("");
    const two = arr.splice(0,lai[1]).join("");
    console.log(one + "\n" + two + "\n" + arr.join(""));
```

### D194:カロリーの計算

```js
 console.log(lines[0]*540);
```

### D174:栄養の摂取

```js
console.log(lines[0] * 1500);
```

### D210:年間の料金

```js
console.log(lines[0]*12);
```

### D200:【銀の弾丸コラボ問題】電気代の計算

```js
console.log(lines[0]*25*24);
```

### D012:絶対値を求めよ

```js
console.log(Math.abs(lines[0]));
```

### D031:分から秒へ

```js
console.log(lines[0]*60);
```

### D110:3つの数字

```js
const arr = lines[0].split(" ")
console.log(arr[0]*arr[1]*arr[2]);
```

### D038:試合の回数

```js
console.log(lines[0]*(lines[0]-1)/2);
```

### D008:奇数か偶数か

```js
console.log(lines[0]%2 === 0 ? "even" : "odd");
```

### D095:ジュースの分配

```js
console.log(parseInt(lines[0]/lines[1]))
```

### D109:ゾロ目の日付

```js
const arr = lines[0].split(" ").join("")
let tmp = arr[0]

for(let i = 1; i < arr.length; i++){
  if(arr[i] === tmp){
    tmp = arr[i]
  }else{
    tmp = 'No'
    console.log(tmp)
    break
  }
}

tmp !== "No" && console.log('Yes')
```

### D120:鉛筆の数

```js
console.log(lines[0]*12);
```

### D172:イヴの日付

```js
console.log(lines[0] - 1);
```

### D190:センチをミリに

```js
console.log(lines[0]*10);
```

### D164:区切りの良い日

```js
let res = "";
for (let i = 1; i <= 8; i++) {
  if (Math.pow(2, i) === Number(lines[0])) {
    console.log("OK");
    res = "";
    break;
  } else {
    res = "NG";
  }
}

res !== "" && console.log(res);
```

### D160:N合目の高さ

```js
console.log(lines[0]/10 * lines[1]);
```

### D217:キャラクターの名前

```js
console.log(lines[0].length);
```

### D218:【813の日2022】買い物

```js
console.log(lines[0] >= 1000 ? 'Yes' : 'No');
```

### D215:金庫のパスワード

```js
console.log(lines[0] === 'paiza' ? 'Yes' : 'No');
```

### D065:エラーコードの分類

```js
const lai = String(lines[0]);
if (lai[0] === "2") {
  console.log("ok");
} else if (lai[0] === "4") {
  console.log("error");
} else {
  console.log("unknown");
}
```

### D222:どちらが沢山食べたか

```js
  const res = Number(lines[0]) > Number(lines[1]) ? lines[0] : lines[1]
  console.log(res);
```

### D170:校庭マラソン

```js
console.log(lines[0]*lines[1]);
```

### D212:繋げた長さ

```js
console.log(lines[0]*10);
```

### D123:自動でチャージ

```js
const res = Number(lines[0]) >= 10000 ? Number(lines[0]) : Number(lines[0]) + 10000
console.log(res);
```

### D171:数当てゲーム

```js
  const p = lines[0].split(" ")
  const s = Number(lines[1])
  console.log(Number(p[0]) -s, Number(p[1]) -s );
```

### D091:花粉の予報

```js
const arr = lines[0].split(" ")
let res = 0
for(let i = 0; i < arr.length; i++){
   Number(arr[i]) <= 2 && res++
}
console.log(res)
```

### D045:通知票

```js
const obj = {5: 'A',3: 'C',2: 'D',4: 'B',1: 'E'};
console.log(obj[lines[0]]);
```

### D046:不思議なタマゴ

```js
const arr = lines[0].split(" ")
arr.sort((a, b) => a > b ? 1 : -1) 
console.log(arr[arr.length-1]);
```

### D209:数字探し

```js
const lai = lines[0]
let res = 0
for(let i = 0; i < lines[1].length; i++){
   lines[1][i] === lai && res++
}
console.log(res);
```

### D044:はじめまして

```js
const lai = lines[0].split(" ");
const obj = {"F":"Ms.","M":"Mr."};
console.log("Hi, " + obj[lai[1]] + " " + lai[0]);
```

### D051:衣替え

```js
const  arr  = lines[0].split(" ");
let count = 0;
for(let i in arr){
    arr[i]=="W" && count++;
    
}
count >= 5 ?  console.log("OK") : console.log("NG")
```

### D052:ピラミッドの作り方

```js
let res = 0;
for(let i = 1; i <= Number(lines[0]); i++){
   res+=i;
}
console.log(res);
```

### D199:お餅の個数

```js
console.log(lines[0]*lines[1]);
```

### D223:新しい呪文

```js
console.log(lines[0]+lines[1]);
```

### D106:割った余り

```js
console.log(lines[0]%lines[1]);
```

### D156:密度の計算

```js
console.log(lines[0]*lines[1]);
```

### D154:画面の構成

```js
console.log(lines[0]*lines[0]-lines[1]);
```

### D077:計算機の表示

```js
const arr = lines[0].split(" ")
console.log(Number(arr[0])*Number(arr[1]) > 9999 ? "NG" : Number(arr[0])*Number(arr[1]));
```

### D092:花見の準備

```js
const arr1 = lines[0].split(" ")
const arr2 = lines[1].split(" ")
if( Number(arr1[2])/(Number(arr1[0])*Number(arr1[1])) === Number(arr2[2])/(Number(arr2[0])*Number(arr2[1])) ){
  console.log("DRAW")
}else if(Number(arr1[2])/(Number(arr1[0])*Number(arr1[1])) > Number(arr2[2])/(Number(arr2[0])*Number(arr2[1])) ){
  console.log(arr2.join(" "))
}else{
  console.log(arr1.join(" "))        
}
```

### D034:どれにしようかな

```js
console.log(21%Number(lines[0]) === 0 ? lines[0] : 21%Number(lines[0]));
```

### D082:2つの単語

```js
const ff = lines[0][lines[0].length -1]
const ss = lines[1][0]
const sf = lines[1][lines[1].length -1]

if(ss === ff && sf !== "n"){
    console.log("OK");
}else{
    console.log("NG");   
}
```

### D224:繰り返す

```js
console.log(lines[0]+lines[0]+lines[0]);
```

### D204:2にする

```js
console.log(222 - Number(lines[0]));
```

### D112:工場の生産力

```js
console.log(Number(lines[0]) * Number(lines[1]));
```

### D185:時給の計算

```js
console.log(lines[0]*lines[1]);
```

### D165:【キャンペーン問題】安全な数字

```js
const arr = lines[0].split("")

for(let i = 0; i < arr.length; i++){
    let tmp = arr.filter((e)=> e === arr[i])
    if(tmp.length >= 2){
    　 console.log('NG')
     　return
    }
}

console.log('OK')
```

### D153:食材選び

```js
const arr = lines[0].split(" ").map(Number)
const res = arr.sort((a,b)=>a-b)
console.log(res[1]);
```

### D113:初日の出

```js
const arr = lines[0].split(":")
const h = Number(arr[0])
const lai = h - 8 >= 0 ? h - 8 : (h-8) + 24

console.log(String(lai) + ":" + arr[1])
```

### D186:暑さの基準

```js
const res = Number(lines[0])  >= 30 && Number(lines[0])  < 35 ? "M" : lines[0]
console.log(res);
```

### D213:タイプ数の予想

```js
console.log(lines[0]*365);
```

### D127:座席番号のくじ

```js
const str = lines[0].split("").splice(1, 3).join("")
const res = str[0] === str[1] && str[1] === str[2] ? "Yes" : "No"
console.log(res)
```

### D040:連休の天気

```js
let res = 0
for(let i = 0; i < lines.length; i++){
  Number(lines[i]) <= 30 && res++
}

console.log(res)
```

### D179:分け前の計算

```js
console.log(Number(lines[1])%Number(lines[0]));
```

### D100:区切り文字の統一

```js
let arr = lines[0].split("")
const x_ = arr.filter((e)=> e === "_")
const y =  arr.filter((e)=> e === "-")
const change = (s, n) => {
const lai = arr.map((i) => {
  return i === s ? n : i
})
  return lai.join("")
}

console.log(x_.length >= y.length ? change("-","_")  : change("_", "-",))
```

### D119:円周率の日

```js
const pie = "141592653589793"
const N = lines[0]
console.log("3." + pie.slice(0, N));
```

### D133:株の利益

```js
const mon = Number(lines[0])
const oldk = Number(lines[1])
const newk = Number(lines[2])
const lai = parseInt(mon / oldk) 
const cao = newk > 0 ? newk - oldk :  newk + oldk
console.log(lai * cao)
```

### D198:区切って出力

```js
console.log(lines[0] + "/" + lines[1]);
```

### D182:燃費の計算

```js
console.log(parseInt(Number(lines[0])/Number(lines[1])));
```

### D072:データのバックアップ

```js
const arr = lines[0].split(" ")
const X = Number(arr[0])
const Y = Number(arr[1])
const P = Number(arr[2])

console.log(Math.ceil(X/Y) * P)
```

### D225:3つ買う

```js
console.log(lines[0]*3);
```

### D181:住所の表記

```js
console.log(lines[0] + "-" + lines[1] + "-" + lines[2]);
```

### D028:数字の桁数

```js
const str = String(lines[0])
console.log(str.length);
```

### D016:N文字目まで出力

```js
console.log(lines[0].slice(0, lines[1]));
```

### D003:掛け算のリスト

```js
const n = lines[0];
let res = [];
for (let i = 1; i <= 9; i++) {
	res.push(n * i, " ");
}

console.log(res.join("").trim());
```

### D187:【シュタゲコラボ問題】曲名の表記

```js
console.log(lines[0] + "/" + lines[1]);
```

### D014:小文字を大文字に

```js
console.log(lines[0].toUpperCase());
```

### D069:割り切れない平均点

```js
const arr = lines[0].split(" ").map(Number)
const res = arr.reduce((prev, curr) => prev + curr) / 7
console.log(res.toFixed(1))
```

### D060:AボタンとBボタン

```js
  const arr = lines[0].split(" ").map(Number)
  console.log(arr[0] - arr[1]);
```

### D079:同じ文字

```js
const str = lines[0];
for (let i = 0; i < str.length - 1; i++) {
	if (str[i] !== str[i + 1]) {
		console.log("OK");
		return;
	}
}

console.log("NG");
```

### D102:運賃の計算

```js
console.log(100 + Number(lines[0])*10);
```

### D189:何周年の確認

```js
console.log(Number(lines[1]) - Number(lines[0]));
```

### D214:身長差

```js
console.log(Number(lines[0]) - Number(lines[1]));
```

### D087:文字をくっつける

```js
let str = lines.slice(1)
console.log(str.join(""));
```

### D004:文字列の結合

```js
const arr = lines.slice(1)
console.log("Hello " + arr.join(",") + ".");
```

### D006:単位の計算

```js
const arr = lines[0].split(" ");
const num = Number(arr[0]);
const str = arr[1];
const lai = {
	km: 1000000,
	m: 1000,
	cm: 10
};

console.log(num * lai[str]);
```

### D144:5桁の数字

```js
console.log(parseInt(lines[0],2));
```

### D216:夏休みの課題

```js
console.log(500 - Number(lines[0]) - Number(lines[1]));
```

### D029:サイコロの裏面

```js
console.log(7- Number(lines[0]));
```

### D081:【キャンペーン問題】家族で分ける

```js
const N = Number(lines[0])
const arr = lines[1].split(" ")
const HW = Number(arr[0]) * Number(arr[1])
console.log(HW%N);
```

### D202:価格の比較

```js
const Aarr = lines[0].split(" ").map(Number)
const Barr = lines[1].split(" ").map(Number)
const A = Aarr[0] + Aarr[1]
const B = Barr[0] + Barr[1]
A >= B ? console.log(B) : console.log(A)
```

### D068:雨と晴れの記録

```js
let A = 0;
let B = 0;
for (let i = 0; i < lines[1].length; i++) {
	if (lines[1][i] === "S") {
		A = A + 1;
	} else {
		B = B + 1;
	}
}

console.log(A + " " + B);
```

### D142:【キャンペーン問題】イルミネーションの数

```js
const arr = lines[0].split(" ").map(Number)
const lai = Math.ceil(arr[0]/arr[1])
console.log(lai * arr[2]);
```

### D078:入学試験

```js
const arr = lines[0].split(" ").map(Number)
const lai = arr.reduce((prev, curr) => prev + curr)
console.log(lai/7 >= Number(lines[1]) ? "pass" : "failure");
```

### D017:最大と最小

```js
const arr = [lines[0], lines[1], lines[2], lines[3], lines[4]].map(Number)
const sort = arr.sort((a,b) => a -　b )
console.log(sort[4] + "\n" + sort[0])
```

### D226:伸びる身長

```js
console.log(170 + Number(lines[0]));
```

### D139:少ない方の勝ち

```js
const arr = lines[1].split(" ")
let G = 0
let P = 0
for(let i = 0; i < arr.length; i++){
    arr[i] === "G" ? G++ : P++
}
if(G === P){
    console.log("Draw")
    return
}

G < P ? console.log("G") : console.log("P")
```

### D073:文字の反転

```js
console.log(lines[0].split("").reverse().join(""));
```

### D149:文字のだるま落とし

```js
const arr = lines[0].split("")
const N = Number(lines[1]) - 1
const res = arr.splice(N, 1)
console.log(arr.join(""));
```

### D024:三角形の内角の和

```js
console.log(180 - Number(lines[0]) - Number(lines[1]));
```

### D076:禁止ワード

```js
const ng = new RegExp(lines[0])
const word = lines[1]
console.log(ng.test(word) ? "NG" : word);
```

### D055:ワインのキャッチコピー

```js
console.log("Best in " + lines[0]);
```

### D227:引き落としの手数料

```js
console.log(Number(lines[0]) -120);
```

### D167:買い物袋

```js
console.log(Number(lines[0]) > 1000 ? Number(lines[0]) + 3 : Number(lines[0]));
```

### D228:【2022年Xmas問題】クリスマスの時間

```js
const sunset = lines[0].split(" ").map(Number)
const now = lines[1].split(" ").map(Number)
if (now[0] > sunset[0]) {
	console.log("No");
} else if (now[0] === sunset[0]) {
	if (now[1] > sunset[1]) {
		console.log("No");
	} else {
		console.log("Yes");
	}
} else {
	console.log("Yes");
}
```

### D230:鞄の合計代金

```js
console.log(Number(lines[0]) * Number(lines[1]))
```

### D135:多角形の調査

```js
const lai = Number(lines[0])
console.log(lai/180 + 2);
```

### D231:文字列の 2 番目

```js
 console.log(lines[0][1]);
```

### D232:【IT謎解き2コラボ問題】問題集

```js
 console.log(Number(lines[0]) * 100);
```

### D233:3人の経験値

```js
 console.log(Number(lines[0]) + Number(lines[1]) + Number(lines[2]));
```

### D234:10文字制限のゲームID

```js
console.log(10 - lines[0].length);
```

### D235:5人兄弟

```js
console.log(Number(lines[0]) * 5);
```

