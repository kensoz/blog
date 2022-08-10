---
lang: ja-JP
title: VitestでAxiosテスト
---

# VitestによってVueコンポーネント中のAxiosをテスト

![](https://img.shields.io/badge/-Typescript-9ca3af.svg?logo=typescript&style=popout-square)  ![](https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=vue.js&style=popout-square)



::: tip
VitestによってVueコンポーネント中のAxiosをテスト、[Qiita](https://qiita.com/kensoz/items/cd5bcd644d8ac3fd6774)にも投稿しました。
:::



## 1.Vitestをインストール

[公式サイト](https://vitest.dev/guide/#adding-vitest-to-your-project)に参照

```shell
yarn add -D vitest
```

`vue-test-utils`をインストールしなければ、インストール

```shell
yarn add -D @vue/test-utils
```



## 2.使用

テストファイルにて  
例えば、テストしたいVueコンポーネントを`mounted`すると`/api/v1/test`に`post`リクエストをします

```typescript
import { test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Components from '@/components/Components.vue'

// リクエストのレスポンス、モックデータ
const result = { message: 'data取得成功' }

test('test', async (): Promise<void> => {
    // axiosを監視して、レスポンスのモックデータを設定
    const spyPost = await vi.spyOn(axios, 'post').mockResolvedValue(result)
    // テストしたいVueコンポーネントを使う
    const wrapper = await mount(Components）
    // リクエストパラメータのモックデータ                      
    const params = { id: '1'}
    // postリクエストをモックして検証
    expect(axios.post).toHaveBeenCalledWith('/api/v1/test', params)
    // リクエストのレスポンスを検証
    expect(await axios.post().then(res => res)).toBe(result)
    // axios監視をクリア
    spyPost.mockRestore()
})
```

