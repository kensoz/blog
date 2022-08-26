---
lang: zh-CN
title: Docker部署
---

# Docker部署构建前后端项目Vue+Node(Koa)+Nginx+MongoDB
---

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)  ![](https://img.shields.io/badge/-Node.js-9ca3af.svg?logo=node.js&style=popout-square)  ![](https://img.shields.io/badge/-Docker-9ca3af.svg?logo=docker&style=popout-square)



📡  [掘金](https://juejin.cn/post/7127105231086682149) · [思否](https://segmentfault.com/a/1190000042257695)



##### 此文章优势

- 😀 适用于基础者
- 💪 适用于前端
- 😆 一套掌握最最基础的Docker构建前后端项目方法
- 🚀 经过实践，完美部署



## 0.事前准备
##### 环境

确保本地有如下的东西，如果直接在Docker构建那就只需要Docker以及docker-compose

- Docker以及docker-compose（必须）
- Docker图形化界面（非必须）
- Node.js（必须）
- MongoDB图形化界面（非必须）
- yarn （非必须，可以自行替换为npm，pnpm）



##### 前置知识

确保有如下基础知识，这篇文章主要着眼于使用Docker的部署和构建  
一些开发细节上的问题不会详细给出

- Docker基础知识
- Mongodb基础知识
- Nginx基础知识
- 前端（vue，react..），后端（node，koa..）的基础知识



##### 使用

- OS：Windows 10
- 编辑器：VS Code
- Node.js：v16.3.0
- Docker：v20.10.13



##### demo

这个文章的demo也已经上传[GitHub](https://github.com/kensoz/depoly-demo)，欢迎各位大佬参考  
另外本人的开源项目[Rrea](https://github.com/kensoz/Rrea-admin)也使用相同方法构建，欢迎参考和star



## 1.前端准备工作
如果你已经有了项目那么就跳过这一步  
这里使用vite构建vue3项目，你可以自由选择你的前端框架  
如果你想看现成的前端文件夹，[请看这里](https://github.com/kensoz/depoly-demo/tree/master/frontend)

在根文件夹新建文件夹frontend并初始化vite

```bash
yarn create vite
```
选择你要构建的前端框架，安装  
删除不需要的东西，并安装axios

```bash
yarn add -D axios
```
在`App.vue`整理并加入代码如下（使用了ts，用js也无所谓）  
不考虑生命周期和代码优雅什么的，目前的效果就是启动前端项目就会调用axios请求api，并把结果打印到控制台和页面  
`/test`就是后端的提供api地址（后面会讲到）

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

// 请求数据
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

下面是package.json脚本参考

```json
 "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview"
  },
```

前端准备完毕



## 2.后端准备工作

如果你已经有了项目那么就跳过这一步  
这里使用Node.js的Koa.js + TS构建项目，你可以自由选择你的后端项目框架  
如果你想看现成的后端文件夹，[请看这里](https://github.com/kensoz/depoly-demo/tree/master/backend)

在根文件夹新建文件夹backend并新建项目  
由于之前写过Koa.js + TS项目的构建方法，请直接参考[这里](https://juejin.cn/post/7062239453963616293)

安装路由
```bash
yarn add koa-router
```

在`index.ts`整理并加入代码如下（使用了ts，用js也无所谓）  
从数据库内读取数据，并建立test路由  
当test路由被请求时，返回数据

```ts
import Koa from "koa";
import Router from "koa-router";
import { connect, Schema, model } from "mongoose";

const app = new Koa();
const router = new Router();

const host: number = 7022;
const url: string = "mongodb://foo:foo@database:27017/docker";

// #################### 数据库相关 ####################
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

// #################### 路由相关 ####################
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


// 启动服务
connectMongoDB();
app.use(router.routes()).use(router.allowedMethods());
app.listen(host, async (): Promise<void> => {
  console.log(`backend on port ${host} 🚀`);
});
```



##### 注意！

url是数据库的容器内地址，将会在后面讲到  
后端准备完毕



## 3.数据准备工作

如果你已经有了项目那么就跳过这一步  
这里使用Mongodb及其自带的MongoDBCompass图形管理应用  
如果你想看现成的数据，请看[这里](https://github.com/kensoz/depoly-demo/tree/master/database)

在根文件夹新建文件夹database并新建js文件mongo-init.js  
这个js是干什么的呢，因为node.js和mongo身处不同容器,访问必须通过密码访问  
超级管理员密码已经在构建容器的时候指定了，但是还需要创建具体库的管理员来读写数据  
这个js脚本没有也可以，因为你可以在构建好容器后利用`mongo shell`创建，那样就会很麻烦失去自动化的意义  
这里为了方便起见，自动注册执行

下面插入了数据`[{ id: 1 }, { id: 2 }]`

```js
// 自动注册库管理员和数据库docker
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

// 切换到刚才自动注册的docker数据库
db = db.getSiblingDB("docker");

// 自动生成表并插入数据
db.createCollection("tests");
db.tests.insertMany([{ id: 1 }, { id: 2 }]);
```



数据准备完毕



##### 小总结

到此，你应该有这么三个文件夹了  
下面开始docker化这三个东西

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
// 省略了一部分

database
└── mongo-init.js
```



## 4.前端Dockerfile

##### 思路

把需要的前端文件复制到容器内，容器准备好运行环境并打包，打包后通过nginx反向代理到容器内的后端



##### 第一步 拉取镜像
拉取node和nginx镜像
这一步不是必须的如果你的电脑里已经有了相关镜像就不需要

```shell
docker pull node
docker pull nginx
```



##### 第二步 nginx配置

在前端文件夹frontend内新建nginx配置文件default.conf  
前端将会跑在`7021`端口  

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



##### 注意！

`proxy_pass`是后端服务器的容器内地址，将会在后面讲到  



##### 第三步 Dockerfile

在frontend文件夹新建Dockerfile，用来创建前端容器  
写入下面的东西  


```yaml
# 指定node镜像
FROM node:16.3.0

# 指定作者
LABEL maintainer="kensoz"

# 指定容器内的工作路径
WORKDIR /usr/src/frontend

# 复制package.json和yarn.lock
COPY ["package.json", "yarn.lock", "./"]

# 安装
RUN yarn

# 复制全部文件，源代码
COPY . .

# 构建
RUN yarn build

# 指定node镜像
FROM nginx:latest

# 复制容器内的dist文件夹到nginx目录
COPY --from=0 /usr/src/frontend/dist/ /usr/share/nginx/html/

# 复制nginx配置文件
COPY default.conf /etc/nginx/conf.d/default.conf
```

用大白话解释一下：  
我tm现在就要创建一个容器，来装老子的前端项目！  
`FROM node:16.3.0`为了我的项目可以在容器里使用，我要在容器里能用node环境  
`WORKDIR /usr/src/frontend`给我项目指定容器内的位置  
`COPY ["package.json", "yarn.lock", "./"]`把我本地的前端项目package.json复制到容器  
`RUN yarn`在容器内安装我的前端项目  
`COPY . .`把我的项目文件统统复制到容器  
`RUN yarn build`在容器内构建项目  
`FROM nginx:latest`为了我的前端项目配置反向代理，我要用nginx  
`COPY --from=0 /usr/src/frontend/dist/ /usr/share/nginx/html/`把我容器内构建好的dist文件放入容器内nginx文件夹  
`COPY default.conf /etc/nginx/conf.d/default.conf`把我的本地的nginx配置复制到容器nginx  

前端配置完毕



## 5.后端Dockerfile

##### 思路

把需要的后端文件复制到容器内，容器准备好运行环境并打包，打包后启动打包好的js文件启动服务器



##### 第一步 Dockerfile

后端将会跑在`7022`端口  
因为前边已经拉取了node，所以不需要再拉取  
在backend文件夹新建Dockerfile，用来创后端容器  
写入下面的东西  


```yaml
# 指定node镜像
FROM node:16.3.0

# 指定作者
LABEL maintainer="kensoz"

# 指定容器内的工作路径
WORKDIR /usr/src/backend

# 复制package.json和yarn.lock
COPY ["package.json", "yarn.lock", "./"]

# 安装
RUN yarn

# 复制全部文件，源代码
COPY . .

# 构建
RUN yarn build

# 这个容器暴露的端口
EXPOSE 7022

# 容器启动时执行的命令
ENTRYPOINT [ "yarn", "start" ]
```
用大白话解释一下：  
我tm现在就要创建一个容器，来装老子的后端项目！  
`FROM node:16.3.0`为了我的项目可以在容器里使用，我要在容器里能用node环境  
`WORKDIR /usr/src/backend`给我项目指定容器内的位置  
`COPY ["package.json", "yarn.lock", "./"]`把我本地的后端项目package.json复制到容器  
`RUN yarn`在容器内安装我的后端项目  
`COPY . .`把我的项目文件统统复制到容器  
`RUN yarn build`在容器内构建项目  
`EXPOSE 7022`把7022作为项目的端口暴露出去  
`ENTRYPOINT [ "yarn", "start" ]`最后启动我的后端api服务器

后端配置完毕



## 6.数据端Dockerfile
##### 第一步 拉取镜像
数据将会跑在`27017`端口并使用`docker`数据库  
拉取mongo镜像  
这一步不是必须的如果你的电脑里已经有了相关镜像就不需要

```shell
docker pull mongo
```



##### 第二步 Dockerfile

在database文件夹新建Dockerfile，用来创数据库容器  
写入下面的东西  

```yaml
# 指定mongodb镜像
FROM mongo:latest

# 指定作者
LABEL maintainer="kensoz"

# 默认开启授权，并创建超管用户
ENV MONGO_INITDB_ROOT_USERNAME root

# 超管密码
ENV MONGO_INITDB_ROOT_PASSWORD root

# 你要用的数据库
ENV MONGO_INITDB_DATABASE docker

# 启动容器时执行脚本，自动注册库管理员
ADD mongo-init.js /docker-entrypoint-initdb.d/
```
用大白话解释一下：  
我tm现在就要创建一个容器，来装老子的数据  
`FROM mongo:latest`为了我的数据可以在容器里使用，我要在容器里安装mongo  
`ENV MONGO_INITDB_ROOT_USERNAM`和`ENV MONGO_INITDB_ROOT_PASSWORD`安装mongo的同时指定超级管理员的密码和用户名，掌控数据库  
`ADD mongo-init.js /docker-entrypoint-initdb.d/`执行完上述后，执行前面准备的自动注册，数据写入脚本



数据配置完毕



##### 小提示

为了防止浪费不必要的时间，建议在各个文件夹内新建`.dockerignore`文件，来忽略不需要用到的文件

```yaml
node_modules;
dist.vscode;
logs;
coverage;
npm - debug.log;
yarn - debug.log;
```



## 7.docker-compose.yml
##### 第一步 在根文件夹新建docker-compose.yml

```yaml

version: "3.8"

# network
# 这个是容器内局域网网络名，这里取名dockertest-network
networks:
  dockertest-network:
    driver: bridge

services:
  ### frontend #################
  # 前端文件，注意这里可以当作变量在局域网内使用，前端端口名frontend
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
  # 后端文件，注意这里可以当作变量在局域网内使用，后端端口名backend
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
  # 数据库，注意这里可以当作变量在局域网内使用，数据端口名：database
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

解释一下几个重要概念  



- 用`docker-compose.yml`来组织管理整体项目
-  利用`docker network`来实现容器内部互相通信
-  `docker network`的好处都有啥？数据库地址平时我们这么写`localhost:27017/`但是在docker内，每个容器的地址是不同与本地开发的，是动态的，并没有`localhost`。每一个容器都有一个自己的动态地址。通过上面的`networks:`我们建立容器内局域网，并且将指定容器的名称作为地址名`database`将容器的地址固定化，方便容器见的内部互联。就像本文章的数据库地址就变成了`database:27017`



至此docker-compose.yml准备工作完成



## 8.执行docker构建
话不多说，在根文件夹直接干

```bash
docker-compose up -d
```
不出意外，你的启动就成功了，如下

![スクリーンショット 2022-08-01 153410.jpg](https://s2.loli.net/2022/08/02/ohbnW238VRsXaNr.jpg)



## 9.验证
##### 前端验证

启动`http://localhost:7021/`发现控制台和页面都打印了数据

![スクリーンショット 2022-08-01 153444.jpg](https://s2.loli.net/2022/08/02/37OzX6jSpKaFr1v.jpg)



##### 后端验证

打开Docker可视化工具，看到后端项目正常打印了log
![スクリーンショット 2022-08-01 153513.jpg](https://s2.loli.net/2022/08/02/4oqDxOQCAXe7KMi.jpg)



##### 数据验证

打开MongoDB图形化界面，docker也已经出现，数据也已经插入

![スクリーンショット 2022-08-01 153553.jpg](https://s2.loli.net/2022/08/02/9ms8jSLBATtZrUN.jpg)



##### 结论

验证成功，可谓一句`docker-compose up -d`就可以自动启动整个全栈项目，非常滴爽



## 10.最后
- 本文章并没有做`volumes`持久化数据，各位根据自己的喜好添加吧
- 本文章并没有做`CD/CI`自动持续部署，各位根据自己的喜好添加，钩子自动执行`docker-compose up -d`即可
- 虽然本文章使用vue和koa，你也可以换成react和nest等等，修改一下命令即可
- 看到最后你是不是应该star一下？[项目地址](https://github.com/kensoz/depoly-demo)
