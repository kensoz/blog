---
lang: ja-JP
title: Vite初期化Vue
---

# vs codeでVite3によってVue.js3のTS環境を作成ESLintとPrettierを追加

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)  ![](https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=vue.js&style=popout-square)  ![](https://img.shields.io/badge/-Vite-9ca3af.svg?logo=vite&style=popout-square)



::: tip
ViteのVue.jsプロジェクト1から環境作成、[Qiita](https://qiita.com/kensoz/items/053c7103cd073d09f81e)にも投稿しました。
:::

## 0.事前準備

##### 環境

+ Windows 10
+ vs code
+ Node.js：`v18.0.0`
+ 本記事は`Vite v3.0`を使います



##### インストール

+ [Node.js](https://nodejs.org/ja/)（必須）

+ `yarn`（`npm`または`pnpm`でも構いません。本記事は`yarn`を使っています）

+ [Git](https://git-scm.com/)（なくてもいい）

  

## 1.初期化Vue.js

簡単なステップですね。あくまで[公式サイト](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)と同じです。  

```shell
yarn create vite
```

プロジェクト（フォルダ）の名称を入力、ここで`vite`を入力しました。  
この記事のメインフォルダです。

![1.jpg](https://s2.loli.net/2022/08/09/qhpANnxbmPU6ZlQ.jpg)

JSフレームワークを選択、ここで`vue`を選択

![2.jpg](https://s2.loli.net/2022/08/09/jgFUeL8Td91Q6pW.jpg)

`js`か`ts`、ここで`ts`を選択

![3.jpg](https://s2.loli.net/2022/08/09/uFoS6crVbfGitqP.jpg)

ここまで初期化は成功しました  
`vite`フォルダに移動して、プロジェクトをインストールします。

```sh
cd vite
yarn
```

プロジェクト起動

```sh
yarn dev
```

起動した後、アクセスすると、こういうページが表示されます。

![4.jpg](https://s2.loli.net/2022/08/09/J6ReBTui8I9ZhU2.jpg)



## 2.git追加（必須ではない）

`vite`フォルダで、初期化git

```bash
git init
```

`.gitignore`ファイルを作成、無視したいファイルを入力  
無視したいファイルはお好きにどうぞ

```bash
node_modules
.DS_Store
dist
*.local
*.code-workspace
.vscode
```



## 3.editorconfig追加（必須ではない）

`vite`フォルダで、`.editorconfig`ファイルを作成  
チームのIDEルールの設定ファイルです、ルールはお好きにどうぞ  
vs codeなら、[プラグイン](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)に合わせて使うことがおすすめです。

```bash
root = true

[*.{js,ts,json}]
indent_size = 2
charset = utf-8
indent_style = space
trim_trailing_whitespace = true
insert_final_newline = true
```



## 4.Port修正（必須ではない）

`package.json`ファイルで

```json
//修正前
"dev": "vite",

//修正後、お好きなport数字を修正してください
"dev": "vite --port 8000",
```



## 5.ESLint追加

`vite`で`ESLint`をインストール  
コアの`eslint`、`vue`プラグイン、`ts`プラグインをインストール  
vs codeなら、[プラグイン](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)に合わせて使うことがおすすめです。

```bash
yarn add -D eslint eslint-plugin-vue @vue/eslint-config-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

`package.json`ファイルで、lintスクリプトを追加（必須ではない）

```json
"lint": "eslint --fix src/*.{ts,vue} && eslint --fix src/**/*.{ts,vue}"
```

`vite`フォルダで、`.eslintrc.cjs`ファイルを新規作成、ルールはお好きにどうぞ  
`node18`と`vite3`を使う場合、`.eslintrc`ファイルの拡張子は`.cjs`です、`.js`を使うと効かない可能性があります。

```js
module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
  ],

  parserOptions: {
    ecmaVersion: 12,
  },

  plugins: ["vue", "@typescript-eslint"],

  rules: { // あなたの素晴らしいルール },
};
```



## 6.Prettier追加

`vite`フォルダで、`Prettier`をインストール  
vs codeなら、[プラグイン](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)に合わせて使うことがおすすめです。

```shell
yarn add -D prettier @vue/eslint-config-prettier 
```

`vite`フォルダで、`.prettierrc.cjs`ファイルを新規作成、ルールはお好きにどうぞ  
`node18`と`vite3`を使う場合、`.eslintrc`ファイルの拡張子は`.cjs`です、`.js`を使うと効かない可能性があります。

```js
module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 120,
  proseWrap: 'preserve',
  trailingComma: 'all',
  // あなたの素晴らしいルール
}
```



## 7.vs code設定

ここで直接的に`setting.json`を編集します。

```json
  // 保存する同時に自動整形
  "editor.formatOnSave": true,

  // Prettierを使うファイル種類
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
```



## 8.検証

##### Prettier検証

`App.vue`でコードを全部クリア、形がきたない`div`を書く

```vue
<template>
         <div>1
  </div>
</template>
```

`ctrl+s`で保存すると、自動整形すれば成功

```vue
<template>
  <div>1</div>
</template>
```



##### ESLint検証

`App.vue`で、数字タイプの定数`test`に文字列の値を設定

```vue
<script setup lang="ts">
  const test: number = '1' //エラー
</script>
```

このエラーがあったら、成功

![5.jpg](https://s2.loli.net/2022/08/09/SNtbZ56RXiQLzMF.jpg)



## 9.もう一つの問題

`vite`フォルダの`index.html`ファイルを開くと、一つのエラーがあります  
これは`eslint`は`html`ファイルを認識できないという原因です  
このエラーは無視しても構いませんが、対策もあります。

```bash
//インストール
yarn add -D eslint-plugin-html
```

`.eslintrc.cjs`ファイルの`plugins`で、`'html'`を追加します

```javascript
// ..省略

plugins: ['vue', 'html', '@typescript-eslint'],

// ..省略
```



## 10.最後

+ ここで`eslint`のデフォルトルールを使っています。`google`など別のルールを使いたい場合は`eslint`初期化から追加してください
