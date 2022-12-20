---
lang: ja-JP
title: 配列メソッドまとめ
---

# 破壊という視点からJavaScriptの配列メソッドまとめ

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square) ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)



## はじめに

+ 元の配列：`arr`
+ return：`a`



## 一，破壊的なメソッド

#### 1、shift

- 操作：配列の**最初**の要素を削除する
- return：削除した要素

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.shift();
console.log(a); // 1
console.log(arr); // [2,3,4,5,6]
```

#### 2、unshift

- 操作：配列の**最初**に要素を追加する
- return：新しい配列の長さ

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.unshift(0);
console.log(a); // 7
console.log(arr); // [0,1,2,3,4,5,6]
```

#### 3、pop

- 操作：配列の**最後**の要素を削除する
- return：削除した要素

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.pop();
console.log(a); // 6
console.log(arr); // [1,2,3,4,5]
```

#### 4、push

- 操作：配列の**最後**の要素を追加する
- return：新しい配列の長さ

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.push(99);
console.log(a); // 7
console.log(arr); // [1,2,3,4,5,6,99]
```

#### 5、reverse

- 操作：配列の要素を**反転**する
- return：配列への参照

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.reverse();
console.log(a); // [6,5,4,3,2,1]
console.log(arr); // [6,5,4,3,2,1]
```

#### 6、sort

- 操作：配列の要素を**ソート**する
- 操作方法：`sort((a, d) => a - b)`、 `a` は比較する第一要素、`b` は比較する第二要素
- return：配列への参照

```js
let arr = [6, 5, 4, 3, 2, 1];
let a = arr.sort();
console.log(a); // [1,2,3,4,5,6]
console.log(arr); // [1,2,3,4,5,6]
```

#### 7、splice

- 操作：配列の要素を取り除いたり、置き換えたり、新しい要素を追加する、CRUDの**CUD**
- 操作方法：`splice(start, length, item...)`、`start`は操作の出発点、`length`は操作の長さ，`item...`は置き換えたい要素（複数可）
- return：操作して削除した要素の配列

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.splice(1, 2, 99);
console.log(a); // [2,3]
console.log(arr); // [1,99,4,5,6]
```

#### 8、copyWithin

- 操作：配列の一部を同じ配列内の別の場所に**シャローコピー**する
- 操作方法：`copyWithin(target, start, end)`、`target`はシーケンスのコピー先、`start`は要素のコピー元の始まり、`end`は要素のコピー元の末尾
- return：変更された配列

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.copyWithin(1, 2, 3);
console.log(a); // [1,3,3,4,5,6]
console.log(arr); // [1,3,3,4,5,6]
```

#### 9、fill

- 操作：配列を埋める
- 操作方法：`fill(value, start, end)`
- return：`value`で埋められて変更された配列

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.fill(99, 2, 4);
console.log(a); // [1,2,99,99,5,6]
console.log(arr); // [1,2,99,99,5,6]
```



## 二，非破壊的メソッド

#### 1、concat

- 操作：2 つ以上の配列を**結合**する
- return：新しい配列

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.concat([7, 8]);
console.log(a); // [1,2,3,4,5,6,7,8]
console.log(arr); // [1,2,3,4,5,6] 変わらない
```

#### 2、join

- 操作：配列全要素を順に連結した文字列を新たに作成する
- return：文字列

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.join("-");
console.log(a); // "1-2-3-4-5-6"
console.log(arr); // [1,2,3,4,5,6] 変わらない
```

#### 3、slice

- 操作：配列から部分配列を**取得**する
- 操作方法：`slice(start, end)`
- return：取り出された要素を含む新しい配列

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.slice(1, 2);
console.log(a); // [2]
console.log(arr); // [1,2,3,4,5,6] 変わらない
```

#### 4、reduce

- 操作：**累加**、配列のそれぞれの要素に対してユーザーが提供した「縮小」コールバック関数を呼び出す
- return：操作した後の値
- 類：`reduceRight`

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.reduce((p, c) => p + c);
console.log(a); // 21
console.log(arr); // [1,2,3,4,5,6] 変わらない
```

#### 5、map

- 操作：**Map**、与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成する
- return：操作した後の新しい配列
- ご注意：操作によって破壊的なメソッドになる場合はあります

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.map((i) => i + 100);
console.log(a); // [101, 102, 103, 104, 105, 106]
console.log(arr); // [1,2,3,4,5,6] 変わらない
```

#### 6、forEach

- 操作：**ループ**、配列の各要素に対して一度ずつ実行
- return：`undefined`
- ご注意：操作によって破壊的なメソッドになる場合はあります

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.forEach((i) => i + 100);
console.log(a); // undefined
console.log(arr); // [1,2,3,4,5,6] 変わらない
```

#### 7、filter

- 操作：**フィルター**、提供された関数で実装されたテストに合格した要素のみを**抽出**する
- return：合格した要素の新しい配列

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.filter((item) => item > 3);
console.log(a); // [4, 5, 6]
console.log(arr); // [1,2,3,4,5,6] 変わらない
```

#### 8、find

- 操作：**検索**、提供されたテスト関数を満たす配列内の最初の**要素を返す**
- return：提供されたテスト関数を満たす最初の要素です。 見つからなかった場合は `undefined` を返し
- 類：`findLast()`

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.find((item) => item > 2);
console.log(a); // 3
console.log(arr); // [1,2,3,4,5,6] 変わらない
```

#### 9、findIndex

- 操作：**検索**、配列内の指定されたテスト関数に合格する最初の要素の**位置を返す**
- return：第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则 return`-1`
- 類：`findLastIndex()`

```js
let arr = [1, 2, 3, 4, 5, 6];
let a = arr.findIndex((item) => item > 2);
console.log(a); // 2
console.log(arr); // [1,2,3,4,5,6] 変わらない
```

#### 10、JSON ディープコピー

- 操作：配列のディープコピー

```js
let arr = [1, 2, 3, 4];
const a = JSON.parse(JSON.stringify(arr));
console.log(a); // [1,2,3,4]
console.log(arr); // [1,2,3,4] 変わらない
```

#### 11、flat，flatMap

- 操作：すべてのサブ配列の要素を指定した深さで再帰的に結合した新しい配列を生成する
- return：新しい配列

```js
let arr = [1, 2, [3, 4]];
let a = arr.flat();
console.log(a); // [1,2,3,4]
console.log(arr); // [1, 2, [3, 4]] 変わらない

let arr = [1, 2, [3, 4]];
let a = arr.flatMap((i) => i);
console.log(a); // [1,2,3,4]
console.log(arr); // [1, 2, [3, 4]] 変わらない
```

#### 12、every

- 操作：**判断**、配列内のすべての要素が指定された関数で実装されたテストに合格するかどうかをテストする
- return：テスト結果のBoolean

```js
const arr = [1, 2, 3, 4, 5];
const a = arr.every((elem, index, arr) => elem >= 3);
console.log(a); // false
console.log(arr); // [1,2,3,4,5] 変わらない
```

#### 13、some

- 操作：**判断**、定された関数で実装されているテストに、配列の中の少なくとも 1 つの要素が合格するかどうかを判定する
- return：判定結果のBoolean

```js
const arr = [1, 2, 3, 4, 5];
const a = arr.some((elem, index, arr) => elem >= 3);
console.log(a); // true
console.log(arr); // [1,2,3,4,5] 変わらない
```

#### 14、toString

- 操作：配列を**文字列化**する
- return：文字列化した文字列
- 類：`toLocaleString()`

```js
const arr = [1, 2, 3, 4, 5];
let a = arr.toString();
console.log(a); // "1,2,3,4,5"
console.log(arr); // [1,2,3,4,5] 変わらない
```

#### 15、indexOf

- 操作：**検索**、引数に与えられた内容と同じ内容を持つ最初の配列要素のインデックスを返す
- return：見つかった最初の配列要素のインデックス。見つからなかった場合は `-1`
- 類：`lastIndexOf()`

```js
const arr = [1, 2, 3, 4, 5];
let a = arr.indexOf(1);
console.log(a); // 0
console.log(arr); // [1,2,3,4,5] 変わらない
```

#### 16、スプレッド構文

- 操作：配列を**展開**する

```js
let arr = [1, 2, 3, 4];
let a = [...arr];
console.log(a); // [1,2,3,4]
console.log(arr); // [1,2,3,4] 変わらない
```

#### 17、group

- 操作：配列の要素を**グループ化**する
- return：グループ化した配列のオブジェクト
- 類：`groupToMap()`

```js
let arr = [1, 2, 3, 4, 5];
let a = arr.group((num, index, array) => (num % 2 === 0 ? "even" : "odd"));
console.log(a); // { odd: [1, 3, 5], even: [2, 4] }
console.log(arr); // [1, 2, 3, 4, 5] 変わらない
```

#### 18、その他の非破壊的メソッド

- `includes()`，`at()`，`values()`，`keys()`，`entries()`，`valueOf()`
- `toReversed()`，`toSorted()`，`toSpliced()`，`with()`
