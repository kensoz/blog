---
lang: ja-JP
title: nodeバンドルと圧縮
---

# Rollup.jsによってNode.js/TSプロジェクトをバンドルと圧縮

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Node.js-9ca3af.svg?logo=node.js&style=popout-square)  ![](https://img.shields.io/badge/-Rollup.js-9ca3af.svg?logo=rollup.js&style=popout-square)



::: tip
Rollup.jsによってNode.jsプロジェクトをバンドルと圧縮、[Qiita](https://qiita.com/kensoz/items/441c1f12eb61d137ee2c)にも投稿しました。
:::



## 0.初めに

+ 普段、 `tsc` を使って `TS` プロジェクトを `JS` に変換しますが、バンドルツールを使わないと、変換した後のサイズが大きくなってしまうことが多いです。この記事は`Rollup.js`を使って、バンドルと圧縮を実装します
+ この記事は`TS`による開発した`Node.js`プロジェクトに基づいて展開します



## 1.インストール

まずは、`Rollup.js`をインストール  
[公式サイト](https://rollupjs.org/guide/en/#installation)

```shell
yarn add -D rollup
```

`Rollup.js`のプラグインをインストール

```shell
yarn add -D @rollup/plugin-commonjs rollup-plugin-terser rollup-plugin-typescript2
```

プラグイン説明

+ `@rollup/plugin-commonjs`：プロジェクトが使用する依存関係を`rollup`に伝えます
+ `rollup-plugin-terser`：コードを圧縮します
+ `rollup-plugin-typescript2`：`rollup` に `TS` コードを理解させます



## 2.設定ファイル

`rollup.config.js`ファイルを新規作成、ルールを書く

```javascript
// インポート
const { terser } = require('rollup-plugin-terser')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('rollup-plugin-typescript2')

// tsconfig.jsonのマージオプション
// 一般に、デフォルトとしてプロジェクトのtsconfig.jsonを使う
// 個別の項目を修正したかったら、ここでマージできます
const override = { compilerOptions: { module: 'ESNext' } }

module.exports = {
  // プロジェクトの入口
  input: 'src/app.ts',

  // バンドル、出口の設定
  output: {
    file: 'dist/app.min.js',
    format: 'cjs',
    sourcemap: true,
    exports: 'default',
  },

  // プラグイン
  // ご注意！ここでプラグインは順番がある！
  // 最初にtsをjsにコンパイルし、次に依存関係を探し、最後に圧縮する
  plugins: [typescript({ tsconfig: './tsconfig.json', tsconfigOverride: override }), commonjs(), terser()],
}
```



## 3.package.json編集

`package.json`ファイルで追加  
 `-c`の意味は：設定ファイルを使て実行

```json
 "rollup:build": "rollup -c",
```



## 4.使用

`rollup:build`を実行します

```shell
yarn rollup:build
```



## 5.検証

`Rollup.js`使用前、サイズは`106KB`

![6.jpg](https://s2.loli.net/2022/08/09/9Us5VgKNRElC6H3.jpg)



`Rollup.js`使用後、サイズは`12.2KB`、ボリュームを大幅に削減しました

![7.jpg](https://s2.loli.net/2022/08/09/I9UHqxZvXMrucfn.jpg)
