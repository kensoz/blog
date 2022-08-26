---
lang: zh-CN
title: Vitest测试Axios
---

# 使用Vitest测试Vue中的Axios

![](https://img.shields.io/badge/-Vite-9ca3af.svg?logo=vite&style=popout-square)  ![](https://img.shields.io/badge/-Vue.js-9ca3af.svg?logo=vue.js&style=popout-square)



📡 [思否](https://segmentfault.com/a/1190000042295748) · [掘金](https://juejin.cn/post/7130069579182637087/)



## 1.安装Vitest

参考[官网](https://vitest.dev/guide/#adding-vitest-to-your-project)

```shell
yarn add -D vitest
```

如果没有安装`vue-test-utils`

```shell
yarn add -D @vue/test-utils
```



## 2.使用

在测试用例中，假设组件挂起就会向`/api/v1/test`发起`post`请求

```typescript
import { test, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Components from '@/components/Components.vue'

// 模拟请求的结果，假数据
const result = { message: 'data取得成功' }

test('test', async (): Promise<void> => {
    // 设置axios监视，并把假数据绑定
    const spyPost = await vi.spyOn(axios, 'post').mockResolvedValue(result)
    // 挂载你的vue组件
    const wrapper = await mount(Components）
    // 模拟请求的参数                           
    const params = { id: '1'}
    // 模拟post请求并验证
    expect(axios.post).toHaveBeenCalledWith('/api/v1/test', params)
    // 模拟请求并验证结果
    expect(await axios.post().then(res => res)).toBe(result)
    // 清除axios监视
    spyPost.mockRestore()
})
```

