---
lang: zh-CN
title: Vite新建Vue项目
---

# 搭配VSCode来用Vite3初始化Vue.js3的TS项目并配置ESLint和Prettier

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)  ![](https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=vue.js&style=popout-square)  ![](https://img.shields.io/badge/-Vite-9ca3af.svg?logo=vite&style=popout-square)



📡  [掘金](https://juejin.cn/post/7129689902077181960) · [思否](https://segmentfault.com/a/1190000042289142)



## 0.事前准备

##### 环境

+ Windows 10
+ vs code
+ Node.js：`v18.0.0`
+ 注意！本文章使用`Vite v3.0`构建



##### 安装

+ 安装[Node.js](https://nodejs.org/ja/)（必须）

+ 安装`yarn`（非必须，可以用`npm`或者`pnpm`，本文使用`yarn`作为包管理）

+ 安装Git（非必须）

  

## 1.初始化Vue.js

这一步没什么好说的，直接参考[官网](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)  
在你想新建项目的文件夹输入下述指令

```shell
yarn create vite
```

输入项目名，这里叫`vite`，也是本次的主目录

![1.jpg](https://s2.loli.net/2022/08/09/qhpANnxbmPU6ZlQ.jpg)

选择框架，这里选择`vue`

![2.jpg](https://s2.loli.net/2022/08/09/jgFUeL8Td91Q6pW.jpg)

选择使用`js`还是`ts`，这里选择`ts`

![3.jpg](https://s2.loli.net/2022/08/09/uFoS6crVbfGitqP.jpg)

新建完毕，进入`vite`文件并安装

```sh
cd vite
yarn
```

启动项目

```sh
yarn dev
```

启动后，如图所示启动成功

![4.jpg](https://s2.loli.net/2022/08/09/J6ReBTui8I9ZhU2.jpg)



## 2.追加git（非必须）

初始化git

```bash
git init
```

新建`.gitignore`，设置git忽略文件  
内容根据自己的喜好

```bash
node_modules
.DS_Store
dist
*.local
*.code-workspace
.vscode
```



## 3.追加editorconfig（非必须）

新建`.editorconfig`，设置编辑器和ide规范  
内容根据自己的喜好或者团队规范  
使用vs code的话，建议配合[插件](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)一起使用

```bash
root = true

[*.{js,ts,json}]
indent_size = 2
charset = utf-8
indent_style = space
trim_trailing_whitespace = true
insert_final_newline = true
```



## 4.更改端口（非必须）

在`package.json`文件

```json
//修改前
"dev": "vite",

//修改后，填入你喜欢的端口即可
"dev": "vite --port 8000",
```



## 5.追加ESLint

在`vite`目录输入如下指令  
安装核心依赖`eslint`，搭配`vue`的插件，搭配`ts`的插件  
使用vs code的话，建议配合[插件](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)一起使用

```bash
yarn add -D eslint eslint-plugin-vue @vue/eslint-config-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

在`package.json`文件，添加lint脚本，根据喜好可以不加

```json
"lint": "eslint --fix src/*.{ts,vue} && eslint --fix src/**/*.{ts,vue}"
```

在`vite`目录，追加`.eslintrc.cjs`文件，根据个人喜好写入规则  
如果你使用`node18`和`vite3`，那么`.eslintrc`最好是`cjs`文件而不是`js`

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

  rules: { // 你的漂亮的规则 },
};
```



## 6.追加Prettier

在`vite`目录输入如下指令  
使用vs code的话，建议配合[插件](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)一起使用

```shell
yarn add -D prettier @vue/eslint-config-prettier 
```

在`vite`目录，追加`.prettierrc.cjs`文件，根据个人喜好写入规则  
如果你使用`node18`和`vite3`，那么`.eslintrc`最好是`cjs`文件而不是`js`

```js
module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 120,
  proseWrap: 'preserve',
  trailingComma: 'all',
  // 你的漂亮的规则
}
```



## 7.设置vs code

打开首选项，这里直接编辑`setting.json`，追加

```json
  // 在保存时自动整形
  "editor.formatOnSave": true,

  // Prettier作用于什么文件
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



## 8.验证

##### 验证Prettier

在`App.vue`清理掉初始代码，并故意写一个比较丑的`div`

```vue
<template>
         <div>1
  </div>
</template>
```

点击保存，自动整理了代码就是成功

```vue
<template>
  <div>1</div>
</template>
```



##### 验证ESLint

还是在`App.vue`，在没有设置规则的前提下，故意声明`test`为数字却赋值为字符串

```vue
<script setup lang="ts">
  const test: number = '1' //报错
</script>
```

看到报错信息，你已经成功了

![5.jpg](https://s2.loli.net/2022/08/09/SNtbZ56RXiQLzMF.jpg)



## 9.还有一个问题

打开`vite`目录的`index.html`你会发现，这个文件有报错  
但是这个问题不影响什么，所以这么放着也没问题  
这是因为`eslint`无法识别`html`文件，对应如下

```bash
yarn add -D eslint-plugin-html
```

在`.eslintrc.cjs`文件的`plugins`里引用，保存后报错就消失了

```
// ..省略

plugins: ['vue', 'html', '@typescript-eslint'],

// ..省略
```



## 10.最后

+ 没有引用任何第三方`eslint`规则，这里使用的是`eslint`默认规则，如果需要使用如`google`等规则可以自己初始化`eslint`并追加
