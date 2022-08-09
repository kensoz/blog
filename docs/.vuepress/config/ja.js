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
        "/knowledge/find.md",
        "/knowledge/currying.md",
        "/knowledge/async.md",
        "/knowledge/bind.md",
      ],
    },
    {
      text: "スニペット",
      link: "/business/syllabary.md",
      children: [
        "/business/syllabary.md",
        "/business/haveornot.md",
        "/business/component.md",
        "/business/common.md",
      ],
    },
    {
      text: "記事",
      link: "/article/vite.md",
      children: [
        "/article/vite.md",
        "/article/docker.md",
        "/article/compare.md",
        "/article/pinia.md",
      ],
    },
    {
      text: "アルゴリズム",
      link: "/algorithm/twosum.md",
      children: ["/algorithm/twosum.md", "/algorithm/palindromenumber.md"],
    },
  ],
};
