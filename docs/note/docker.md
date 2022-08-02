---
lang: ja-JP
title: Dockerデプロイ
---

# DockerでVue+Node(Koa)+Nginx+MongoDB環境を作る
---

##### この文章のアピールポイント

- 初心者に最適
- フロントエンド開発者に最適



## 0.事前準備
##### インストール

以下のソフトウェアと環境のインストールが必要です。

- Docker以及docker-compose（必須）
- Docker图形化界面（なくてもよい）
- Node.js（必須）
- MongoDB图形化界面（なくてもよい）
- yarn （なくてもよい，npm，pnpmを使っても構いません）



##### 知識

Dockerコンテンツの説明と構築がメインとなりますので  
フロントエンドとバックエンド開発の説明は特にしません。  
なので、以下の知識はあった方がいいです

- Dockerの基礎知識
- Mongodbの基礎知識
- Nginxの基礎知識
- フロントエンド（vue，react..），バックエンド（node，koa..）の基礎知識



##### 環境

- OS：Windows 10
- エディター：VS Code
- Node.js：v16.3.0
- Docker：v20.10.13



##### demo

文章で作成したdemoは[GitHub](https://github.com/kensoz/depoly-demo)にアップロードしましたので、ご参照ください  
ちなみに、OSSとして[Rrea](https://github.com/kensoz/Rrea-admin)というwebアプリを作りましたので、ご参照、starをもらえれば幸せです



## 1.フロントエンドの準備
ここはviteでvue3を作りますが、好きなJSフレームワークを使ってください  
[フロントエンドフォルダ参照](https://github.com/kensoz/depoly-demo/tree/master/frontend)

rootフォルダでfrontendフォルダを新規作成、viteを初期化

```bash
yarn create vite
```
好きなJSフレームワークを選択して、インストールしてください  
いらないコンポーネントを削除して、Axiosをインストール

```bash
yarn add -D axios
```
`App.vue`で以下のコードを使ってください（ここでTSをつかいましたが、JSでも構いません）  
フロントエンドを起動すると、Axiosを使うメソッド`api()`はAPIをリクエストして、レスを画面にプリントします  
`/test`はバックエンドが提供しているAPIアドレス（後で説明）

```vue
<template>
  <main>
    <div><strong>データ:</strong></div>
    <br />
    <div>{{ data }}</div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const host: number = 7021;
interface IDocker {
  id: number;
}

// リクエスト
const data = ref<IDocker[]>();
const api = async (): Promise<void> => {
  await axios.get<IDocker[]>("/test").then((res): void => {
    console.log(res.data);
    data.value = res.data;
  });
};


api();
</script>
```

package.json

```json
 "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview"
  },
```

フロントエンドの準備は完了



## 2.バックエンドの準備

ここでNode.jsのフレームワークKoa.jsとTSで構築しますが、好きなNode.jsフレームワークを使ってください  
[バックエンドフォルダ参照](https://github.com/kensoz/depoly-demo/tree/master/backend)

rootフォルダでbackendフォルダを新規作成  
Koa.js + TSの構築方法は[この記事](https://qiita.com/notakaos/items/85fd2f5c549f247585b1)に参照して作成しました

koaルートをインストール
```bash
yarn add koa-router
```

`index.ts`で以下のコードを使ってください  
バックエンドを起動すると，testというAPIのルートを作成します  
testがリクエストされたら，データベースからデータを取得して、レスとして返します

```ts
import Koa from "koa";
import Router from "koa-router";
import { connect, Schema, model } from "mongoose";

const app = new Koa();
const router = new Router();

const host: number = 7022;
const url: string = "mongodb://foo:foo@database:27017/docker";

// #################### データベース関連 ####################
const connectMongoDB = async (): Promise<void> => {
  await connect(url)
    .then((): void => {
      console.log("mongodb connect success");
    })
    .catch((): void => {
      console.log("mongodb connect failed");
    });
};

interface IDocker {
  id: number;
}

const schema = new Schema<IDocker>(
  { id: { type: Number, required: true } },
  { versionKey: false }
);

const dockerModel = model<IDocker>("tests", schema);

// #################### ルート関連 ####################
router.get("/test", async (ctx: Koa.Context): Promise<void> => {
  console.log("requested");
  await dockerModel.find({}, { _id: 0 }).then((res: IDocker[]): void => {
    console.log(res);
      
    ctx.body = {
      message: "取得成功",
      result: res,
    };
  });
});


// サーバー起動
connectMongoDB();
app.use(router.routes()).use(router.allowedMethods());
app.listen(host, async (): Promise<void> => {
  console.log(`backend on port ${host} 🚀`);
});
```



##### ご注意

定数`url`のはデータベースのdockeコンテンツ内アドレスです（後で説明）



バックエンドの準備は完了



## 3.データの準備

ここでMongodbとそのGUIのMongoDBCompassを使います  
[データフォルダを参照](https://github.com/kensoz/depoly-demo/tree/master/database)

rootフォルダでdatabaseフォルダを新規作成して、databaseフォルダでjsファイルmongo-init.jsを新規作成  

##### mongo-init.jsとは

データベースへのアクセスは管理者IDとパスワードが必要です  
本来はターミナルでコマンドでデータをinsertして、管理者IDとパスワードを追加しますが  
このmongo-init.jsは、dockerコンテンツ起動の時に自動で必要なデータをinsert、管理員を追加する便利なスクリプトです  
rootの管理員はDockerfile指定されましたので、ここで作ったのはCRUD管理員です  

以下のコードを使ってください、dockerコレクションのtestsテーブルに`[{ id: 1 }, { id: 2 }]`をinsertします。

```js
// テーブル管理者とコレクションの作成
db.createUser({
  user: "foo",
  pwd: "foo",
  roles: [
    {
      role: "readWrite",
      db: "docker",
    },
  ],
});

// 先作ったdocker dbに切り替え
db = db.getSiblingDB("docker");

// コレクションを自動作成、データinsert
db.createCollection("tests");
db.tests.insertMany([{ id: 1 }, { id: 2 }]);
```



データの準備は完了



##### まとめ

ここまでのフォルダ構造  
これからは以下のフォルダをコンテンツ化します

```bash
backend
├──node_modules
├── index.ts
├── tsconfig.json
├── yarn.lock
└── package.json

frontend
├── node_modules
├── public
├── src
├── vite.config.ts
├── tsconfig.json
├── yarn.lock
└── package.json
// 一部省略

database
└── mongo-init.js
```



## 4.フロントエンドのDockerfile

##### 考え方

必要なフロントエンドファイルをコンテンツにコピー，コンテンツで必要な環境を用意，コピーした後でファイルをビルド、Nginxでビルドしたファイルをデプロイ



##### Step1 imageインストール
nodeとnginxのdocker imageをpull
pcで既にnodeとnginxのdocker imageがインストールされたらこのStepを無視

```shell
docker pull node
docker pull nginx
```



##### Step2 Nginx設定

frontendフォルダでnginxの設定ファイルdefault.confを新規作成  
フロントエンドはport`7021`を使います  

```json
server {
    listen       7021;
    server_name  localhost;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    location /test {
        proxy_pass  http://backend:7022;
    }
}
```



##### ご注意

`proxy_pass`のはバックエンドのdockeコンテンツ内アドレスです（後で説明）  



##### Step3 Dockerfile作成

frontendフォルダでDockerfileを新規作成、以下のコードを使ってください  


```yaml
# イメージ指定
FROM node:16.3.0

# 作者指定
LABEL maintainer="kensoz"

# ワークスペース指定
WORKDIR /usr/src/frontend

# package.jsonとyarn.lockコピー
COPY ["package.json", "yarn.lock", "./"]

# インストール
RUN yarn

# ファイルコピー
COPY . .

# ビルド
RUN yarn build

# イメージ指定
FROM nginx:latest

# コンテナ内のビルドしたdistフォルダをnginxへコピー
COPY --from=0 /usr/src/frontend/dist/ /usr/share/nginx/html/

# nginxコンフィグファイルコピー
COPY default.conf /etc/nginx/conf.d/default.conf
```

簡単に説明：  
`FROM node:16.3.0`コンテンツで使うnode環境とそのバージョン指定  
`WORKDIR /usr/src/frontend`コンテンツ内のフロントエンドのフォルダ（ワークスペース）  
`COPY ["package.json", "yarn.lock", "./"]`ローカルのpackage.jsonやソースコードをコンテンツ内にコピー  
`RUN yarn`コンテンツ内でフロントエンドをインストール  
`COPY . .`インストールしたものを全部コンテンツ内にコピー  
`RUN yarn build`コンテンツ内でビルド  
`FROM nginx:latest`コンテンツで使うnginx環境とそのバージョン指定  
`COPY --from=0 /usr/src/frontend/dist/ /usr/share/nginx/html/`コンテンツ内で先ビルドしたdistファイルをコンテンツ内のnginxフォルダの中のhtmlフォルダにコピー（nginxの使い方はローカルと同じ）  
`COPY default.conf /etc/nginx/conf.d/default.conf`ローカルのnginx設定ファイルをコンテンツ内にコピー  

フロントエンドDockerfile設定完了



## 5.バックエンドのDockerfile

##### 考え方

必要なフロントエンドファイルをコンテンツにコピー，コンテンツで必要な環境を用意，コピーした後でファイルをビルド、その後サーバーを起動



##### Step1 Dockerfile

バックエンドはport`7022`を使います  
すでにnodeのimageをインストールしましたので、imageのpullはいらないです  
backendフォルダでDockerfileを新規作成、以下のコードを使ってください  


```yaml
# イメージ指定
FROM node:16.3.0

# 作者指定
LABEL maintainer="kensoz"

# ワークスペース指定
WORKDIR /usr/src/backend

# package.jsonとyarn.lockコピー
COPY ["package.json", "yarn.lock", "./"]

# インストール
RUN yarn

# ファイルコピー
COPY . .

# ビルド
RUN yarn build

# ポートの解放
EXPOSE 7022

# コンテナ実行
ENTRYPOINT [ "yarn", "start" ]
```
簡単に説明：  
`FROM node:16.3.0`コンテンツで使うnode環境とそのバージョン指定  
`WORKDIR /usr/src/backend`コンテンツ内のバックエンドのフォルダ（ワークスペース）  
`COPY ["package.json", "yarn.lock", "./"]`ローカルのpackage.jsonやソースコードをコンテンツ内にコピー  
`RUN yarn`コンテンツ内でフロントエンドをインストール  
`COPY . .`インストールしたものを全部コンテンツ内にコピー  
`RUN yarn build`コンテンツ内でビルド  
`EXPOSE 7022`port7022を公開  
`ENTRYPOINT [ "yarn", "start" ]`サーバーを起動

バックエンドDockerfile設定完了



## 6.データのDockerfile
##### Step1 imageインストール
データはport`27017`を使います  
MongoDBのdocker imageをpull
pcで既にMongoDBのdocker imageがインストールされたらこのStepを無視

```shell
docker pull mongo
```



##### Step2 Dockerfile

databaseフォルダでDockerfileを新規作成、以下のコードを使ってください

```yaml
# イメージ指定
FROM mongo:latest

# 作者指定
LABEL maintainer="kensoz"

# 管理者アカウント作者
ENV MONGO_INITDB_ROOT_USERNAME root

# 管理者パスワード作者
ENV MONGO_INITDB_ROOT_PASSWORD root

# 使う予定のデータベース名称
ENV MONGO_INITDB_DATABASE docker

# コンテナ起動の時、データベース管理者スクリプト実行
ADD mongo-init.js /docker-entrypoint-initdb.d/
```
簡単に説明：  
`FROM mongo:latest`コンテンツで使うMongoDB環境とそのバージョン指定  
`ENV MONGO_INITDB_ROOT_USERNAM`和`ENV MONGO_INITDB_ROOT_PASSWORD`コンテンツを起動すると、root管理員のIDとパスワードを指定  
`ADD mongo-init.js /docker-entrypoint-initdb.d/`コンテンツを起動すると、先作ったスクリプトを自動で実行



データDockerfile設定完了



##### Tip

それぞれのフォルダで`.dockerignore`ファイルを作成して、不要なファイルとフォルダを無視にしましょう

```yaml
node_modules;
dist.vscode;
logs;
coverage;
npm - debug.log;
yarn - debug.log;
```



## 7.docker-compose.yml
##### Step1 rootフォルダでdocker-compose.ymlを新規作成

```yaml

version: "3.8"

# network
# コンテンツ内ネットワーク名称
networks:
  dockertest-network:
    driver: bridge

services:
  ### frontend #################
  # フロントエンド，ここの名称　frontend　はコンテンツ内ネットワークでportとして使う
  frontend:
    container_name: depoly-frontend
    build:
      context: ./frontend
    ports:
      - 127.0.0.1:7021:7021
    restart: always
    depends_on:
      - backend
    networks:
      - dockertest-network

  ### backend #################
  # バックエンド，ここの名称　backend　はコンテンツ内ネットワークでportとして使う
  backend:
    container_name: depoly-backend
    build:
      context: ./backend
    ports:
      - 127.0.0.1:7022:7022
    restart: always
    depends_on:
      - database
    networks:
      - dockertest-network

  ### database #################
  # データベース，ここの名称　database　はコンテンツ内ネットワークでportとして使う
  database:
    container_name: depoly-database
    build:
      context: ./database
    ports:
      - "127.0.0.1:27017:27017"
    restart: always
    networks:
      - dockertest-network
```

簡単に説明：  

`docker-compose.yml`を使うと、各プロジェクト（フロントエンド、バックエンド、データ）を連携して、コンテンツ内ネットワークを構築、このネットワークによってコンテンツ同士がアクセスできます。
本来データベースにアクセスする時、`localhost:27017/`みたいなurlを使いますが、コンテンツ内では`localhost`がなくて、動的なportとなります。コンテンツ内の場合は`docker-compose.yml`で定義したコンテン名称をportとして使います。本記事はdatabaseを定義して、`database:27017`をデータベースのport urlとして使っています。



docker-compose.yml設定完了



## 8.dockerコンテンツ実行
rootフォルダで実行

```bash
docker-compose up -d
```
問題がなければ、dockerのGUIで以下のものが確認できます

![スクリーンショット 2022-08-01 153410.jpg](https://s2.loli.net/2022/08/02/ohbnW238VRsXaNr.jpg)



## 9.検証
##### フロントエンド検証

`http://localhost:7021/`を起動すると、データが確認できます

![スクリーンショット 2022-08-01 153444.jpg](https://s2.loli.net/2022/08/02/37OzX6jSpKaFr1v.jpg)



##### バックエンド検証

dockerのGUIで，バックエンドのlogが確認できます
![スクリーンショット 2022-08-01 153513.jpg](https://s2.loli.net/2022/08/02/4oqDxOQCAXe7KMi.jpg)



##### データ検証

MongoDBのGUIで，dockerデータベースなどが確認できます

![スクリーンショット 2022-08-01 153553.jpg](https://s2.loli.net/2022/08/02/9ms8jSLBATtZrUN.jpg)



## 10.最後
- `volumes`は使っていないので、好きに追加してください
- `CD/CI`は使っていないので、好きに追加してください.`docker-compose up -d`を実行すれば自動でデプロイできると思います。
