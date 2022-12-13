const ja = require("./config/ja");
const zh = require("./config/zh");
const { defaultTheme } = require("vuepress");
const { searchPlugin } = require("@vuepress/plugin-search");

module.exports = {
  base: "/blog/",
  head: [
    [
      "link",
      { rel: "shortcut icon", type: "image/x-icon", href: "/blog/logo.png?" },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Murecho:wght@100;300;400;500;700;800;900&display=swap",
      },
    ],
  ],
  plugins: [searchPlugin({})],

  locales: {
    "/": {
      lang: "ja-JP",
      title: "RenHou BLOG",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "RenHou BLOG",
    },
  },

  theme: defaultTheme({
    logo: "/logo.png",
    locales: { "/": ja, "/zh/": zh },
    lastUpdated: false,
    contributors: false,
  }),
};
