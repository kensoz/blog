---
lang: ja-JP
title: JSのCRUD整理
---

# JSのCRUD整理

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



::: tip
常用JavaScriptCRUDメソッドと処理の整理
:::



## 1.JSONのCRUD

##### 0.サンプルデータ

```js
const sampleJson = [
  {
    id: 1,
    date: "2021-06-01",
  },
  {
    id: 2,
    date: "2021-06-02",
  },
  {
    id: 3,
    date: "2021-05-31",
  },
  {
    id: 4,
    date: "2021-05-30",
  },
  {
    id: 5,
    date: "2021-05-29",
  },
];
```

##### 1.1追加

```javascript
sampleJson.push({ id: 6, date: "2021-05-28" });

// 検証
console.log(sampleJson);
// [{"id":1,"date":"2021-06-01"},{"id":2,"date":"2021-06-02"},{"id":3,"date":"2021-05-31"},
//  {"id":4,"date":"2021-05-30"},{"id":5,"date":"2021-05-29"},{"id":6,"date":"2021-05-28"}]
```

##### 1.2削除

```js
// id：4のオブジェクトを削除した場合、まずインデックスを取得
let i = sampleJson.findIndex((value) => value.id == 4);

// 存在するかどうかを判断、あれば削除
i > -1 && sampleJson.splice(i, 1);

// 検証
console.log(sampleJson);
// [{"id":1,"date":"2021-06-01"},{"id":2,"date":"2021-06-02"},{"id":5,"date":"2021-05-29"}]

// もう一つ考え方
// findIndexによるインデックスを取得
sampleJson.splice(
  sampleJson.findIndex((i) => i.id === 1),
  1
);
```

##### 1.3修正

```js
// 修正したいオブジェクトを取得
let obj = sampleJson.filter((p) => {
  return p.id === 5;
});

//filterは配列を返して、そして修正
obj[0].id = 7;

// 検証
console.log(sampleJson);
// [{"id":1,"date":"2021-06-01"},{"id":2,"date":"2021-06-02"},{"id":3,"date":"2021-05-31"}, {"id":4,"date":"2021-05-30"},{"id":7,"date":"2021-05-29"}]
```

##### 1.4読み出

```js
let getObj = sampleJson.filter((p) => {
  return p.id === 1;
});

// 検証
console.log(getObj);
// [{"id":1,"date":"2021-06-01"}]
```



## 2.配列のCRUD&他のメソッド

##### 2.1追加

```js
// 配列に追加，要素の数を返す
let a = [1, 2, 3, 4, 5];
let b = a.push(6, 7);

// 検証
// --> a：[1,2,3,4,5,6,7]    b：7

// 最初に追加，要素の数を返す
let a = [1, 2, 3, 4, 5];
let b = a.unshift(0);

// 検証
// --> a：[0,1,2,3,4,5]    b：6

// 配列の内容を変更
const arr = [1, 2, 3, 4, 5, 6];
arr.splice(1, 2, 9, 10, 15, 17);

// 検証
// --> [1, 9, 10, 15, 17, 4, 5, 6]
```

##### 2.2削除

```js
// 配列の内容を削除、nullにする
const arr = [1, 2, 3, 4, 5, 6];
delete arr[1];

// 検証
// --> [1,null,3,4,5,6]

// 最初の要素を取り除き、その要素を返す
let a = [1, 2, 3, 4, 5, 6];
let b = a.shift();

// 検証
// --> a：[2,3,4,5,6]    b：1

// 最後の要素を取り除き、その要素を返す
let a = [1, 2, 3, 4, 5, 6];
let b = a.pop();

// 検証
// --> a：[1,2,3,4,5]    b：1
```

##### 2.3修正

```js
// 配列の内容を変更
const arr = [1, 2, 3, 4, 5, 6];
arr.splice(1, 2, 9);

// 検証
// --> [1,9,4,5,6] 
```

##### 2.4読み出

```js
// indexOfメソッド
const arr = [1, 2, 3, 4, 5, 6];
const a1 = arr.indexOf(3, 1);
const a2 = arr.indexOf(3, 5);

// 検証
// --> a：2    b：-1
```

##### 2.5コピーと切り取る

```js
// 配列の内容を変更
let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 5));
// 検証
// --> [2, 3, 4, 5]

// 新しい配列を返す
let a = [1, 2, 3, 4, 5];
let b = a.concat(6, 7);

// 検証
// --> a：[1,2,3,4,5] b：[1,2,3,4,5,6,7]
```

##### 2.6ループ

###### for

```js
// forループ
const arr = [1, 2, 3, 4, 5, 6];
for (let j = 0, len = arr.length; j < len; j++) {
  console.log(j);
}

// 検証
// --> 1, 2, 3, 4, 5, 6
```

######  for...of

```js
// for...ofループ
const arr = [1, 2, 3, 4, 5, 6];
for (let value of arr) {
  console.log(value);
}

// 検証
// --> 1, 2, 3, 4, 5, 6
```

###### for...in

```js
// for...inループ(おすすめしない)
const arr = [1, 2, 3, 4, 5, 6];
for (j in arr) {
  console.log(j);
}

// 検証
// --> 1, 2, 3, 4, 5, 6
```

###### map

```js
// mapループ
const arr = [1, 2, 3, 4, 5, 6];
arr.map(function (n) {
  console.log(n);
});

// 検証
// --> 1, 2, 3, 4, 5, 6
```

##### 2.7他のメソッド

###### reverse()

```js
// 配列を反転
let a = [1, 2, 3, 4, 5];
let b = a.reverse();

// 検証
// --> a：[5,4,3,2,1] b：[5,4,3,2,1]
```

###### sort()

```js
// ソート順
let a = [1, 2, 3, 4, 5];
let b = a.sort();

// 検証
// --> a：[1,2,3,4,5] b：[1,2,3,4,5]
```

###### join()

```js
// 連結した文字列を新たに作成
let a = [1, 2, 3, 4, 5];
let b = a.join("|");

// 検証
// --> a：[1,2,3,4,5]  b: 1|2|3|4|5
```

###### find()

```js
// 条件を満たす配列内の最初の要素を返す
let test = [1, 2, 3, 4, 5];
let a = test.find((item) => item > 3);

// 検証
// --> 4
```

###### findIndex()

```js
// 条件を満たす配列内の最初の要素のインデックスを返す
let test = [1, 2, 3, 4, 5];
let a = test.findIndex((item) => item > 3);

// 検証
// --> 3
```

##### 2.8重複の値を取り除く

```js
let arr = [1,1,'true','true']
function unique (arr) {
  return Array.from(new Set(arr))
}

console.log(unique(arr))　
// 検証
// -- > [1,"true"]
```



## 3.オブジェクトのCRUD

##### 0.サンプルデータ

```js
let obj = {
  name: "zhangsan",
  age: 13,
};
```

##### 3.1追加

```js
obj.sex = "男";

console.log(obj.sex);
// 検証
// --> 男
```

##### 3.2削除

```js
delete obj.sex; // valueを削除
obj = {}; // オブジェクトクリア
```

##### 3.3修正

```js
obj["name"] = "haha";

console.log(obj["name"]);
// 検証
// --> haha
```

##### 3.4読み出

```js
console.log(obj.name);
// --> zhangsan
console.log(obj["age"]);
// --> 13
```

##### 3.5ループ

```js
// keyとvalueそれぞれ取得
for (let key in obj) {
  console.log(key);
  // --> name. age
  console.log(obj[key]);
  // --> zhangsan, 13
}
```



## 4.MapのCRUD

```js
let map = new Map();

//追加
map.set("key", "val");
map.set("id", "1");
map.set("name", "liu");
map.set("age", "22");

//削除
map.delete("key");

//修正
map.set("age", "27");

//ループ
let url = "";
for (let i of map) {
  url = url + "<li> key:" + i[0] + " , val:" + i[1] + "</li>";
}


console.log(url);
// 検証
// key:id , val:1
// key:name , val:liu
// key:age , val:27
```



## 5.多次元JSON配列のCRUD

##### 0.サンプルデータ

```js
const arr = ["1", "2", "3", "4"];
const json = {
  1: [
    {
      id: "1-1",
      name: "いい",
    },
    {
      id: "1-2",
      name: "まあまあ",
    },
  ],
  2: [
    {
      id: "2-1",
      name: "OK",
    },
  ],
};
```

##### 5.1内部key取得

```js
// 注意！iterableではないので、for...ofループを使ってはいけません
for (let value in json) {
  console.log(value); // --> 1,2
}

```

##### 5.2内部value取得

```js
for (let value in json) {
  console.log(json[value]); // -->[{"id": "2-1","name": "OK"},]
}
```

##### 5.3同じ配列にする

```js
let a = [];
for (let value in json) {
  a.push(...json[value]);
}
```

##### 5.4配列によって，JSONから指定されたデータを取得

```js
let a = [];
for (let value of arr) {
  if (json[value]) {
    //存在するかどうかを判断
    a.push(...json[value]);
  }
}

console.log(a); 
```