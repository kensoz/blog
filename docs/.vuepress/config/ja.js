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
      children: ["/knowledge/crud.md"],
    },
    {
      text: "実戦運用",
      link: "/business/syllabary.md",
      children: ["/business/syllabary.md", "/business/haveornot.md"],
    },
    {
      text: "記事",
      link: "/article/docker.md",
      children: ["/article/docker.md"],
    },
  ],
};
