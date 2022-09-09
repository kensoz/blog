---
lang: ja-JP
title: indexedDBログ保存
---

# [TypeScript]IndexedDBでログを保存と出力。JS/TS、VueとReactに適用する

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Javascript-9ca3af.svg?logo=javascript&style=popout-square)  ![](https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=Vue.js&style=popout-square)  ![](https://img.shields.io/badge/-React.js-9ca3af.svg?logo=react&style=popout-square)



📡  [Qiita](https://qiita.com/kensoz/items/5b0d56e3988730a939f1)



## 環境

+ Windows 10
+ Node.js `v18.0.0`
+ Yarn (`npm`または`pnpm`も構いません)
+ VS Code
+ Chrome



## 初めに

- ある程度の`indexedDB`基礎知識が必要、学習：[LINK](https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API)
- 非同期処理（`Promise`など）を使っていないので、ニーズによって追加してください
- 本記事で`Vue`と`React`のJSフレームワークをサンプルとして書いたが、JSまたはTSプログラムにも使える



## パッケージインストール

- `file-saver`：ファイル出力用、`@types/file-saver`はそのタイプライブラリ
- `dayjs`：時間ライブラリ、お好きなライブラリを使ってください

```shell
yarn add -D file-saver @types/file-saver dayjs
```



## Vue.js版

**App.vue**

```vue
<script setup lang="ts">
// パッケージインポート
import dayjs from "dayjs";
import { saveAs } from "file-saver";

// コンフィグ設定
const dataBaseVer: number = 1; // バージョン
const dataBaseName: string = "MyIndexedDB"; // データベース名称
const dataBaseStore: string = "MyStore"; // store名称
const dataBaseKeyPath: string = "key"; // 主キー
const dataBaseLimit: number = 10000; // サイズの制限
const filename: string = `log_${dayjs().format("YYYYMMDD")}.txt`; // 出力されたlogファイルの名称

// indexedDB作成
const createIndexedDB = (): void => {
  const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName, dataBaseVer);

  // 初めて実行する場合は、バージョンがないので、onupgradeneededイベントでstoreと主キーを追加
  indexed.onupgradeneeded = (event: IDBVersionChangeEvent): void => {
    const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
    if (!db.objectStoreNames.contains(dataBaseStore)) {
      db.createObjectStore(dataBaseStore, {
        keyPath: dataBaseKeyPath,
      });
    }
  };

  // 作成失敗
  indexed.onerror = (): void => {
    console.log("Indexed Start Error");
  };
};

// log追加
const addLog = (log: string): void => {
  // タイムスタンプ作成
  const time = dayjs().format("YYYY-MM-DD-HH:mm:ss:SSS");
  const random = Math.ceil(Math.random() * 999);
  const timeStamp = time + "_" + random + "Z";

  // データベースを起動
  const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName);
  indexed.onsuccess = (event: Event): void => {
    const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
    const trans: IDBTransaction = db.transaction(dataBaseStore, "readwrite");
    const store: IDBObjectStore = trans.objectStore(dataBaseStore);
    const count: IDBRequest<number> = store.count();

    // データの数を数え、追加する前に制限を確認
    count.onsuccess = (): void => {
      store.put({ [dataBaseKeyPath]: `[${timeStamp}] : ${log}` });

      if (Number(count.result) <= dataBaseLimit) {
        // 超えない場合追加だけ
        return;
      } else {
        // 超える場合は一番古いデータから削除
        store.openCursor().onsuccess = (event: Event): void => {
          const cursor: any = (event.target as IDBRequest).result;
          if (cursor) {
            cursor.delete();
          }
        };
      }
    };

    // データの数を数え失败
    count.onerror = (): void => {
      console.log("Count Error");
    };
  };

  // データベースを起動失敗
  indexed.onerror = (): void => {
    console.log("Indexed Open Error");
  };
};

// log読み取り
const readDBandExport = (): void => {
  let tmp: string[] = [];

  // データベースを起動
  const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName);
  indexed.onsuccess = (event: Event): void => {
    const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
    const trans: IDBTransaction = db.transaction(dataBaseStore, "readonly");
    const store: IDBObjectStore = trans.objectStore(dataBaseStore);

    // データをループ
    store.openCursor().onsuccess = (event: Event): void => {
      const cursor: any = (event.target as IDBRequest).result;
      // データがあれば、tmpに追加、ループをやり続く
      if (cursor) {
        tmp.push(cursor.key);
        tmp.push("\r\n");
        cursor.continue();
      } else {
        // データがなければ、ループが完了。Blobオブジェクトを作成
        const blob: Blob = new Blob(tmp, {
          type: "text/plain;charset=utf-8",
        });

        // 出力
        saveAs(blob, filename);
      }
    };

    // データをループ失敗
    store.openCursor().onerror = (): void => {
      console.log("OpenCursor Error");
    };
  };

  // データベースを起動失敗
  indexed.onerror = (): void => {
    console.log("Indexed Open Error");
  };
};

// データベース削除
const deleteIndexedDB = (): void => {
  const indexed: IDBOpenDBRequest = indexedDB.deleteDatabase(dataBaseName);

  // 削除成功
  indexed.onsuccess = (): void => {
    console.log("Delete Success");
  };

  // 削除失敗
  indexed.onerror = (): void => {
    console.log("Delete Error");
  };
};

// 使用
createIndexedDB();
// テスト
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



## React.js版

**App.tsx**

```react
// パッケージインポート
import dayjs from "dayjs";
import { saveAs } from "file-saver";

function App() {
  // コンフィグ設定
  const dataBaseVer: number = 1; // バージョン
  const dataBaseName: string = "MyIndexedDB"; // データベース名称
  const dataBaseStore: string = "MyStore"; // store名称
  const dataBaseKeyPath: string = "key"; // 主キー
  const dataBaseLimit: number = 10000; // サイズの制限
  const filename: string = `log_${dayjs().format("YYYYMMDD")}.txt`; // 出力されたlogファイルの名称

  // indexedDB作成
  const createIndexedDB = (): void => {
    const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName, dataBaseVer);

    // 初めて実行する場合は、バージョンがないので、onupgradeneededイベントでstoreと主キーを追加
    indexed.onupgradeneeded = (event: IDBVersionChangeEvent): void => {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(dataBaseStore)) {
        db.createObjectStore(dataBaseStore, {
          keyPath: dataBaseKeyPath,
        });
      }
    };

    // 作成失敗
    indexed.onerror = (): void => {
      console.log("Indexed Start Error");
    };
  };

  // log追加
  const addLog = (log: string): void => {
    // タイムスタンプ作成
    const time = dayjs().format("YYYY-MM-DD-HH:mm:ss:SSS");
    const random = Math.ceil(Math.random() * 999);
    const timeStamp = time + "_" + random + "Z";

    // データベースを起動
    const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName);
    indexed.onsuccess = (event: Event): void => {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      const trans: IDBTransaction = db.transaction(dataBaseStore, "readwrite");
      const store: IDBObjectStore = trans.objectStore(dataBaseStore);
      const count: IDBRequest<number> = store.count();

      // データの数を数え、追加する前に制限を確認
      count.onsuccess = (): void => {
        store.put({ [dataBaseKeyPath]: `[${timeStamp}] : ${log}` });

        if (Number(count.result) <= dataBaseLimit) {
          // 超えない場合追加だけ
          return;
        } else {
          // 超える場合は一番古いデータから削除
          store.openCursor().onsuccess = (event: Event): void => {
            const cursor: any = (event.target as IDBRequest).result;
            if (cursor) {
              cursor.delete();
            }
          };
        }
      };

      // データの数を数え失败
      count.onerror = (): void => {
        console.log("Count Error");
      };
    };

    // データベースを起動失敗
    indexed.onerror = (): void => {
      console.log("Indexed Open Error");
    };
  };

  // log読み取り
  const readDBandExport = (): void => {
    let tmp: string[] = [];

    // データベースを起動
    const indexed: IDBOpenDBRequest = indexedDB.open(dataBaseName);
    indexed.onsuccess = (event: Event): void => {
      const db: IDBDatabase = (event.target as IDBOpenDBRequest).result;
      const trans: IDBTransaction = db.transaction(dataBaseStore, "readonly");
      const store: IDBObjectStore = trans.objectStore(dataBaseStore);

      // データをループ
      store.openCursor().onsuccess = (event: Event): void => {
        const cursor: any = (event.target as IDBRequest).result;
        // データがあれば、tmpに追加、ループをやり続く
        if (cursor) {
          tmp.push(cursor.key);
          tmp.push("\r\n");
          cursor.continue();
        } else {
          // データがなければ、ループが完了。Blobオブジェクトを作成
          const blob: Blob = new Blob(tmp, {
            type: "text/plain;charset=utf-8",
          });

          // 出力
          saveAs(blob, filename);
        }
      };

      // データをループ失敗
      store.openCursor().onerror = (): void => {
        console.log("OpenCursor Error");
      };
    };

    // データベースを起動失敗
    indexed.onerror = (): void => {
      console.log("Indexed Open Error");
    };
  };

  // データベース削除
  const deleteIndexedDB = (): void => {
    const indexed: IDBOpenDBRequest = indexedDB.deleteDatabase(dataBaseName);

    // 削除成功
    indexed.onsuccess = (): void => {
      console.log("Delete Success");
    };

    // 削除失敗
    indexed.onerror = (): void => {
      console.log("Delete Error");
    };
  };

  // 使用
  createIndexedDB();
  // テスト
  addLog("テスト");

  return (
    <main>
      <h1>React.js</h1>
      <button onClick={() => {addLog("ボタンからのテスト")}}>
        addLog
      </button>
      <button onClick={readDBandExport}>readDBandExport</button>
      <button onClick={deleteIndexedDB}>deleteIndexedDB</button>
    </main>
  );
}

export default App;
```



## 検証（Vue.js版で）

起動、データベースが作成された

![1.jpg](https://s2.loli.net/2022/09/06/dU24CK7rM6zEl8t.jpg)

`addLog`を推してテストデータを作成して、`readDBandExport`でログを出力

![2.jpg](https://s2.loli.net/2022/09/06/CINbnsZBGaTAQUO.jpg)

出力されたファイルの中身を確認、成功

![3.jpg](https://s2.loli.net/2022/09/06/NzgMXYF3d57Bvfn.jpg)



## 最後

`console.log`のデータをキャッチして、出力したい場合は↓の関数を使ってください

```javascript
// logキャッチ
const catchConsoleLog = () => {
  console.oldLog = console.log;

  console.log = (log: string) => {
    console.oldLog(log);
    addLog(log);
  };
};

// 使用
catchConsoleLog()
```
