module.exports = {
  selectLanguageName: "日本語",
  navbar: [
    {
      text: "GitHub",
      link: "https://github.com/kensoz/kensoz",
    },
    {
      text: "OSS",
      children: [
        {
          text: "FEC",
          link: "https://github.com/kensoz/FEC",
        },
        {
          text: "Rrea-Client",
          link: "https://github.com/kensoz/Rrea-client",
        },
        {
          text: "Rrea-Admin",
          link: "https://github.com/kensoz/Rrea-admin",
        },
        {
          text: "Rrea-Server",
          link: "https://github.com/kensoz/Rrea-server",
        },
        {
          text: "Portfolio",
          link: "https://github.com/kensoz/portfolio",
        },
      ],
    },
  ],

  sidebar: [
    { text: "ホームページ", link: "/" },
    {
      text: "学習と整理",
      link: "/knowledge/crud.md",
      children: [
        "/knowledge/crud.md",
        //"/knowledge/find.md",
        "/knowledge/currying.md",
        "/knowledge/async.md",
        "/knowledge/bind.md",
        "/knowledge/compare.md",
        "/knowledge/nginx.md",
      ],
    },
    {
      text: "スニペット",
      link: "/business/syllabary.md",
      children: [
        "/business/syllabary.md",
        "/business/haveornot.md",
        "/business/component.md",
        // "/business/common.md",
      ],
    },
    {
      text: "記事",
      link: "/article/vite.md",
      children: [
        "/article/vite.md",
        "/article/docker.md",
        "/article/pinia.md",
        "/article/indexed.md",
        "/article/rollup.md",
        "/article/vitest.md",
        "/article/ui.md",
        "/article/github.md",
        "/article/code.md",
      ],
    },
    {
      text: "アルゴリズム",
      link: "/algorithm/leetcode.md",
      children: [
        "/algorithm/leetcode.md",
        "/algorithm/paiza.md",
        "/algorithm/atcoder.md",
        // "/algorithm/codewars.md",
        // "/algorithm/codility.md",
        // "/algorithm/hackerrank.md",
      ],
    },
  ],
};
