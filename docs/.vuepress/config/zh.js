module.exports = {
  selectLanguageName: "简体中文",
  navbar: [
    {
      text: "GitHub",
      link: "https://github.com/kensoz/blog",
    },
    {
      text: "开源项目",
      children: [
        {
          text: "🍋 FEC",
          link: "https://github.com/kensoz/FEC",
        },
        {
          text: "🟨 Rrea-Client",
          link: "https://github.com/kensoz/Rrea-client",
        },
        {
          text: "🔵 Rrea-Admin",
          link: "https://github.com/kensoz/Rrea-admin",
        },
        {
          text: "🌞 Rrea-Server",
          link: "https://github.com/kensoz/Rrea-server",
        },
      ],
    },
  ],

  sidebar: [
    { text: "Home", link: "/zh/" },
    {
      text: "笔记",
      link: "/zh/memo/crud.md",
      children: [
        "/zh/memo/crud.md",
        "/zh/memo/currying.md",
        "/zh/memo/async.md",
        "/zh/memo/bind.md",
      ],
    },
    {
      text: "算法",
      link: "/zh/algorithm/index.md",
      children: [
        "/algorithm/leetcode.md",
        "/algorithm/atcoder.md",
        "/algorithm/other.md",
        "/algorithm/common.md",
        // "/algorithm/paiza.md",
      ],
    },
    {
      text: "网络记事",
      link: "/zh/article/index.md",
      children: [
        "/zh/article/vite.md",
        "/zh/article/ui.md",
        "/zh/article/layout.md",
        "/zh/article/factorial.md",
        "/zh/article/docker.md",
        "/zh/article/pinia.md",
        "/zh/article/indexed.md",
        "/zh/article/rollup.md",
        "/zh/article/vitest.md",
        "/zh/article/github.md",
        "/zh/article/syllabary.md",
        "/zh/article/haveornot.md",
        "/zh/article/component.md",
        "/zh/article/compare.md",
      ],
    },
    {
      text: "关于",
      link: "/zh/other/index.md",
    },
  ],
};
