const { defaultTheme } = require("vuepress");
const { searchPlugin } = require("@vuepress/plugin-search");
const { backToTopPlugin } = require("@vuepress/plugin-back-to-top");

module.exports = {
  base: "/blog/",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  plugins: [backToTopPlugin({}), searchPlugin({})],

  locales: {
    "/": {
      lang: "ja-JP",
      title: "れんほうのブログ",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "拿来把你",
    },
  },

  theme: defaultTheme({
    locales: {
      "/": {
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
            ],
          },
        ],

        sidebar: [
          { text: "ホームページ", link: "/" },
          {
            text: "テスト",
            link: "/guide/test.md",
            children: ["/guide/test.md"],
          },
        ],
      },

      "/zh/": {
        selectLanguageName: "中文",
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
            ],
          },
        ],

        sidebar: [
          { text: "首页", link: "/zh/" },
          {
            text: "测试",
            link: "/zh/guide/test.md",
            children: ["/zh/guide/test.md"],
          },
        ],
      },
    },
  }),
};
