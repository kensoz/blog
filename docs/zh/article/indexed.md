---
lang: zh-CN
title: indexedDB保存日志
---

# 用IndexedDB保存并导出前端日志TS版，适用原生JS，Vue和React

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)  ![](https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=Vue.js&style=popout-square)  ![](https://img.shields.io/badge/-React.js-9ca3af.svg?logo=react&style=popout-square)



📡  [思否](https://segmentfault.com/a/1190000042440033) · [掘金](https://juejin.cn/post/7140169620928856077/)



## 环境

+ Windows 10
+ Node.js `v18.0.0`
+ Yarn (用`npm`或`pnpm`也没问题)
+ VS Code
+ Chrome



## 前言

- 本教程直接给出方法，复制即可用。需要一定的`indexedDB`的基础知识
- 方法中并没有使用异步，根据需要自行添加即可
- 虽然本教程给只出了`Vue`和`React`两个JS框架的例子，但是其中函数也可以直接用于原生TS和JS



## 安装第三方库

- `file-saver`：导出文件用，`@types/file-saver`是他的类型库
- `dayjs`：时间库，可以根据个人喜好选择其他时间库

```shell
yarn add -D file-saver @types/file-saver dayjs
```



## Vue.js版本

**App.vue**

```vue
<script setup lang="ts">
// 导入第三方库
import dayjs from "dayjs";
import { saveAs } from "file-saver";

// 定义常量
const dataBaseVer: number = 1; // 版本
const dataBaseName: string = "MyIndexedDB"; // db名
const dataBaseStore: string = "MyStore"; // store名
const dataBaseKeyPath: string = "key"; // 主key
const dataBaseLimit: number = 10000; // 数据条数限制
const filename: string = `log_${dayjs().format("YYYYMMDD")}.txt`; // 导出的log文件名

// 创建indexedDB
const createIndexedDB = (): void => {
  const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName, dataBaseVer);

  // 第一次执行，因为没有版本，所以会触发onupgradeneeded事件，此时新建store并追加主key
  indexed.onupgradeneeded = (event: IDBVersionChangeEvent): void => {
    const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
    if (!db.objectStoreNames.contains(dataBaseStore)) {
      db.createObjectStore(dataBaseStore, {
        keyPath: dataBaseKeyPath,
      });
    }
  };

  // 创建失败
  indexed.onerror = (): void => {
    console.log("Indexed Start Error");
  };
};

// 添加log
const addLog = (log: string): void => {
  // 获取log时间戳
  const time = dayjs().format("YYYY-MM-DD-HH:mm:ss:SSS");
  const random = Math.ceil(Math.random() * 999);
  const timeStamp = time + "_" + random + "Z";

  // 打开db
  const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName);
  indexed.onsuccess = (event: Event): void => {
    const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
    const trans: IDBTransaction = db.transaction(dataBaseStore, "readwrite");
    const store: IDBObjectStore = trans.objectStore(dataBaseStore);
    const count: IDBRequest<number> = store.count();

    // 计算记录的数量，添加前先检查是否超过限制
    count.onsuccess = (): void => {
      // 以主键log为key，把时间戳和log作为value，插入数据库
      store.put({ [dataBaseKeyPath]: `[${timeStamp}] : ${log}` });
      
      // 没超过就添加
      if (Number(count.result) <= dataBaseLimit) {
        return;
      } else {
        // 没超过就删除最老的一条
        store.openCursor().onsuccess = (event: Event): void => {
          const cursor: any = (event.target as IDBRequest).result;
          if (cursor) {
            cursor.delete();
          }
        };
      }
    };

    // 计算记录的数量失败
    count.onerror = (): void => {
      console.log("Count Error");
    };
  };

  // db打开失败
  indexed.onerror = (): void => {
    console.log("Indexed Open Error");
  };
};

// 读取log
const readDBandExport = (): void => {
  let tmp: string[] = [];

  // 打开db
  const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName);
  indexed.onsuccess = (event: Event): void => {
    const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
    const trans: IDBTransaction = db.transaction(dataBaseStore, "readonly");
    const store: IDBObjectStore = trans.objectStore(dataBaseStore);

    // 遍历数据
    store.openCursor().onsuccess = (event: Event): void => {
      const cursor: any = (event.target as IDBRequest).result;
      // 如果遍历项有数据就放入tmp，然后继续
      if (cursor) {
        tmp.push(cursor.key);
        tmp.push("\r\n");
        cursor.continue();
      } else {
        // 如果遍历项没有数据，说明遍历结束，这时新建blob对象
        const blob: Blob = new Blob(tmp, {
          type: "text/plain;charset=utf-8",
        });

        // 导出文件
        saveAs(blob, filename);
      }
    };

    // 遍历数据失败
    store.openCursor().onerror = (): void => {
      console.log("OpenCursor Error");
    };
  };

  // db打开失败
  indexed.onerror = (): void => {
    console.log("Indexed Open Error");
  };
};

// 删除数据库
const deleteIndexedDB = (): void => {
  const indexed: IDBOpenDBRequest = indexedDB.deleteDatabase(dataBaseName);

  // 删除成功
  indexed.onsuccess = (): void => {
    console.log("Delete Success");
  };

  // 删除失败
  indexed.onerror = (): void => {
    console.log("Delete Error");
  };
};

// 调用
createIndexedDB();
// 测试
addLog("テスト");
</script>

<template>
  <main>
    <h1>Vue.js</h1>
    <button @click="addLog('ボタンからのテスト')">addLog</button>
    <button @click="readDBandExport">readDBandExport</button>
    <button @click="deleteIndexedDB">deleteIndexedDB</button>
  </main>
</template>
```



## React.js版本

**App.tsx**

```react
// 导入第三方库
import dayjs from "dayjs";
import { saveAs } from "file-saver";

function App() {
  // 定义常量
  const dataBaseVer: number = 1; // 版本
  const dataBaseName: string = "MyIndexedDB"; // db名
  const dataBaseStore: string = "MyStore"; // store名
  const dataBaseKeyPath: string = "key"; // 主key
  const dataBaseLimit: number = 10000; // 数据条数限制
  const filename: string = `log_${dayjs().format("YYYYMMDD")}.txt`; // 导出的log文件名

  // 创建indexedDB
  const createIndexedDB = (): void => {
    const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName, dataBaseVer);

    // 第一次执行，因为没有版本，所以会触发onupgradeneeded事件，此时新建store并追加主key
    indexed.onupgradeneeded = (event: IDBVersionChangeEvent): void => {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(dataBaseStore)) {
        db.createObjectStore(dataBaseStore, {
          keyPath: dataBaseKeyPath,
        });
      }
    };

    // 创建失败
    indexed.onerror = (): void => {
      console.log("Indexed Start Error");
    };
  };

  // 添加log
  const addLog = (log: string): void => {
    // 获取log时间戳
    const time = dayjs().format("YYYY-MM-DD-HH:mm:ss:SSS");
    const random = Math.ceil(Math.random() * 999);
    const timeStamp = time + "_" + random + "Z";

    // 打开db
    const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName);
    indexed.onsuccess = (event: Event): void => {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      const trans: IDBTransaction = db.transaction(dataBaseStore, "readwrite");
      const store: IDBObjectStore = trans.objectStore(dataBaseStore);
      const count: IDBRequest<number> = store.count();

      // 计算记录的数量，添加前先检查是否超过限制
      count.onsuccess = (): void => {
        // 以主键log为key，把时间戳和log作为value，插入数据库
        store.put({ [dataBaseKeyPath]: `[${timeStamp}] : ${log}` });
         
        // 没超过就添加
        if (Number(count.result) <= dataBaseLimit) {
          return;
        } else {
          // 没超过就删除最老的一条
          store.openCursor().onsuccess = (event: Event): void => {
            const cursor: any = (event.target as IDBRequest).result;
            if (cursor) {
              cursor.delete();
            }
          };
        }
      };

      // 计算记录的数量失败
      count.onerror = (): void => {
        console.log("Count Error");
      };
    };

    // db打开失败
    indexed.onerror = (): void => {
      console.log("Indexed Open Error");
    };
  };

  // 读取log
  const readDBandExport = (): void => {
    let tmp: string[] = [];

    // 打开db
    const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName);
    indexed.onsuccess = (event: Event): void => {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      const trans: IDBTransaction = db.transaction(dataBaseStore, "readonly");
      const store: IDBObjectStore = trans.objectStore(dataBaseStore);

      // 遍历数据
      store.openCursor().onsuccess = (event: Event): void => {
        const cursor: any = (event.target as IDBRequest).result;
        // 如果遍历项有数据就放入tmp，然后继续
        if (cursor) {
          tmp.push(cursor.key);
          tmp.push("\r\n");
          cursor.continue();
        } else {
          // 如果遍历项没有数据，说明遍历结束，这时新建blob对象
          const blob: Blob = new Blob(tmp, {
            type: "text/plain;charset=utf-8",
          });

          // 导出文件
          saveAs(blob, filename);
        }
      };

      // 遍历数据失败
      store.openCursor().onerror = (): void => {
        console.log("OpenCursor Error");
      };
    };

    // db打开失败
    indexed.onerror = (): void => {
      console.log("Indexed Open Error");
    };
  };

  // 删除数据库
  const deleteIndexedDB = (): void => {
    const indexed: IDBOpenDBRequest = indexedDB.deleteDatabase(dataBaseName);

    // 删除成功
    indexed.onsuccess = (): void => {
      console.log("Delete Success");
    };

    // 删除失败
    indexed.onerror = (): void => {
      console.log("Delete Error");
    };
  };

  // 调用
  createIndexedDB();
  // 测试
  addLog("テスト");

  return (
    <main>
      <h1>React.js</h1>
      <button onClick={() => {addLog("ボタンからのテスト");}}>
          addLog
      </button>
      <button onClick={readDBandExport}>readDBandExport</button>
      <button onClick={deleteIndexedDB}>deleteIndexedDB</button>
    </main>
  );
}

export default App;
```



## 验证（以Vue.js为例）

启动项目后，发现数据库已经建立

![1.jpg](https://s2.loli.net/2022/09/06/dU24CK7rM6zEl8t.jpg)

点击`addLog`添加测试数据，然后按`readDBandExport`导出

![2.jpg](https://s2.loli.net/2022/09/06/CINbnsZBGaTAQUO.jpg)

查看导出的文件，成功

![3.jpg](https://s2.loli.net/2022/09/06/NzgMXYF3d57Bvfn.jpg)



## 最后

如果需要结合捕获`console.log`使用，请使用下面的函数

```javascript
// log捕获
const catchConsoleLog = () => {
  console.oldLog = console.log;

  console.log = (log: string) => {
    // 打印捕获的log
    console.oldLog(log);
    addLog(log);
  };
};

// 使用
catchConsoleLog()
```
