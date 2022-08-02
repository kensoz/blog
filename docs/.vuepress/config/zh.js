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
    { text: "首页", link: "/zh/" },
    {
      text: "学习整理",
      link: "/zh/study/test.md",
      children: ["/zh/study/test.md"],
    },
    {
      text: "业务代码",
      link: "/zh/job/test.md",
      children: ["/zh/job/syllabary.md"],
    },
    {
      text: "教程",
      link: "/zh/note/docker.md",
      children: ["/zh/note/docker.md"],
    },
  ],
};
