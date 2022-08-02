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
      link: "/study/test.md",
      children: ["/study/test.md"],
    },
    {
      text: "業務運用",
      link: "/job/test.md",
      children: ["/job/syllabary.md"],
    },
    {
      text: "記事",
      link: "/note/docker.md",
      children: ["/note/docker.md"],
    },
  ],
};
