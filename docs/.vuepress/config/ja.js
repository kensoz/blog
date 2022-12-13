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
          text: "🍋 FEC",
          link: "https://github.com/kensoz/FEC",
        },
        {
          text: "🟨 Rrea-Client",
          link: "https://github.com/kensoz/Rrea-client",
        },
        {
          text: "🔵 Rrea-Admin",
          link: "https://github.com/kensoz/Rrea-admin",
        },
        {
          text: "🌞 Rrea-Server",
          link: "https://github.com/kensoz/Rrea-server",
        },
        {
          text: "💡 Portfolio",
          link: "https://github.com/kensoz/portfolio",
        },
      ],
    },
  ],

  sidebar: [
    { text: "Home", link: "/" },
    {
      text: "学習メモ",
      link: "/memo/crud.md",
      children: [
        "/memo/crud.md",
        "/memo/currying.md",
        "/memo/async.md",
        "/memo/bind.md",
        "/memo/compare.md",
        "/memo/nginx.md",
        "/memo/code.md",
      ],
    },
    {
      text: "アルゴリズム",
      link: "/algorithm/index.md",
      children: [
        "/algorithm/leetcode.md",
        "/algorithm/atcoder.md",
        "/algorithm/other.md",
        "/algorithm/common.md",
        // "/algorithm/paiza.md",
      ],
    },
    {
      text: "Qiita記事",
      link: "/qiita/index.md",
      children: [
        "/qiita/vite.md",
        "/qiita/ui.md",
        "/qiita/layout.md",
        "/qiita/factorial.md",
        "/qiita/docker.md",
        "/qiita/pinia.md",
        "/qiita/indexed.md",
        "/qiita/rollup.md",
        "/qiita/vitest.md",
        "/qiita/github.md",
        "/qiita/syllabary.md",
        "/qiita/haveornot.md",
        "/qiita/component.md",
      ],
    },
    {
      text: "その他",
      link: "/other/index.md",
    },
  ],
};
