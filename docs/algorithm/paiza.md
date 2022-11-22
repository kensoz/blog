---
lang: ja-JP
title: Paiza
---

# Paiza

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
メモとして自分の回答を整理します。  
Paizaの回答と違っている回答はあります、ここは最適解です。  
数字順も公式順でもはありません。  

中文说明：算法题转职网站Paiza的答案，基本复制就可以用。
:::



## メモ

- `console.log(解答)`、入力の処理が必要
- 入力の行数は配列のindex数
- 改行：`"\n"`，
- 文字列転換：

  ```js
  const str = "2 3"
  console.log(str.split(" ")) // ["2","3"]
  console.log(str.split(" ").join("")) // "23"
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
let lai = lines[0].split(" ")[0];

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



## Dランク

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

