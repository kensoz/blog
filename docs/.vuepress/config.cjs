const ja = require("./config/ja");
const zh = require("./config/zh");
const { defaultTheme } = require("vuepress");
const { searchPlugin } = require("@vuepress/plugin-search");

module.exports = {
  base: "/blog/",
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: "/logo.png?" },
    ],
  ],
  plugins: [searchPlugin({})],

  locales: {
    "/": {
      lang: "ja-JP",
      title: "れんほうのブログ",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "拿来吧你",
    },
  },

  theme: defaultTheme({
    logo: "/logo.png",
    locales: { "/": ja, "/zh/": zh },
    lastUpdated: false,
    contributors: false,
  }),
};
