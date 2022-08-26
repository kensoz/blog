---
lang: zh-CN
title: 压缩Node.js项目
---

# 使用Rollup.js来压缩打包Node.js/TS项目

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Node.js-9ca3af.svg?logo=node.js&style=popout-square)  ![](https://img.shields.io/badge/-Rollup.js-9ca3af.svg?logo=rollup.js&style=popout-square)



📡  [思否](https://segmentfault.com/a/1190000042295273) · [掘金](https://juejin.cn/post/7130053864740356104/)



## 0.写在前面

+ 正常情况下使用`tsc`将`TS`项目转化为`JS`，但是因为没有使用打包工具，所以往往体积较大，本教程使用`Rollup.js`来压缩`tsc`后的`JS`程序，实现打包和压缩
+ 本教程基于使用`TS`开发的`Node.js`项目来讲解



## 1.安装

首先安装`Rollup.js`  
[官网](https://rollupjs.org/guide/en/#installation)

```shell
yarn add -D rollup
```

安装`Rollup.js`的插件

```shell
yarn add -D @rollup/plugin-commonjs rollup-plugin-terser rollup-plugin-typescript2
```

插件说明

+ `@rollup/plugin-commonjs`：让`rollup`知道项目用了那些依赖，打包的时候不要忘了
+ `rollup-plugin-terser`：压缩代码
+ `rollup-plugin-typescript2`：让`rollup`可以看懂`TS`代码



## 2.配置文件

新建`rollup.config.js`文件，写入压缩和打包规则

```javascript
// 导入依赖
const { terser } = require('rollup-plugin-terser')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('rollup-plugin-typescript2')

// tsconfig.json合并选项
// 一般来说默认使用项目的tsconfig.json，如果有个别需要修改的如下，可以在此修改
const override = { compilerOptions: { module: 'ESNext' } }

module.exports = {
  // 项目入口
  input: 'src/app.ts',

  // 打包后的出口和设置
  output: {
    file: 'dist/app.min.js',
    format: 'cjs',
    sourcemap: true,
    exports: 'default',
  },

  // 使用的插件
  // 注意，这里的插件使用是有顺序的，先把ts编译为js，然后查找依赖，最后压缩
  plugins: [typescript({ tsconfig: './tsconfig.json', tsconfigOverride: override }), commonjs(), terser()],
}
```



## 3.修改package.json

在`package.json`追加  
 `-c`的意思是，使用配置文件运行

```json
 "rollup:build": "rollup -c",
```



## 4.使用

运行`rollup:build`即可

```shell
yarn rollup:build
```



## 5.验证

`Rollup.js`导入前，使用tsc编译后的大小是`106KB`

![6.jpg](https://s2.loli.net/2022/08/09/9Us5VgKNRElC6H3.jpg)



`Rollup.js`导入后大小为`12.2KB`，大幅压缩了体积

![7.jpg](https://s2.loli.net/2022/08/09/I9UHqxZvXMrucfn.jpg)
