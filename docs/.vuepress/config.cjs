const ja = require("./config/ja");
const zh = require("./config/zh");
const { defaultTheme } = require("vuepress");
const { searchPlugin } = require("@vuepress/plugin-search");
const { backToTopPlugin } = require("@vuepress/plugin-back-to-top");

module.exports = {
  base: "/blog/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  plugins: [backToTopPlugin({}), searchPlugin({})],

  locales: {
    "/": {
      lang: "ja-JP",
      title: "れんのブログ",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "拿来吧你",
    },
  },

  theme: defaultTheme({
    logo: "/logo.png",
    locales: { "/": ja, "/zh/": zh },
  }),
};
