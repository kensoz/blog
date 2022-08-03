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
      link: "/zh/knowledge/crud.md",
      children: ["/zh/knowledge/crud.md"],
    },
    {
      text: "业务代码",
      link: "/zh/business/syllabary.md",
      children: ["/zh/business/syllabary.md", "/zh/business/haveornot.md"],
    },
    {
      text: "教程",
      link: "/zh/article/docker.md",
      children: ["/zh/article/docker.md"],
    },
  ],
};
