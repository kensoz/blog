module.exports = {
  selectLanguageName: "简体中文",
  navbar: [
    {
      text: "GitHub",
      link: "https://github.com/kensoz/kensoz",
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
        {
          text: "💡 Portfolio",
          link: "https://github.com/kensoz/portfolio",
        },
      ],
    },
  ],

  sidebar: [
    { text: "Home", link: "/zh/" },
    {
      text: "教程",
      link: "/zh/article/vite.md",
      children: [
        "/zh/article/vite.md",
        "/zh/article/ui.md",
        "/zh/article/layout.md",
        "/zh/article/docker.md",
        "/zh/article/pinia.md",
        "/zh/article/indexed.md",
        "/zh/article/rollup.md",
        "/zh/article/vitest.md",
        "/zh/article/github.md",
      ],
    },
    {
      text: "算法",
      link: "/algorithm/leetcode.md",
      children: [
        "/algorithm/leetcode.md",
        // "/algorithm/paiza.md",
        "/algorithm/atcoder.md",
        "/algorithm/common.md",
      ],
    },
    {
      text: "代码段",
      link: "/zh/business/syllabary.md",
      children: [
        "/zh/business/syllabary.md",
        "/zh/business/haveornot.md",
        "/zh/business/component.md",
        "/zh/business/find.md",
        "/zh/business/prime.md",
        "/zh/business/factorial.md",
      ],
    },
    {
      text: "学习与整理",
      link: "/zh/knowledge/crud.md",
      children: [
        "/zh/knowledge/crud.md",
        "/zh/knowledge/currying.md",
        "/zh/knowledge/async.md",
        "/zh/knowledge/bind.md",
        "/zh/knowledge/compare.md",
        "/zh/knowledge/nginx.md",
        "/zh/knowledge/code.md",
      ],
    },
  ],
};
