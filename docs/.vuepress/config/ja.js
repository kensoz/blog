module.exports = {
  selectLanguageName: "日本語",
  navbar: [
    {
      text: "GitHub",
      link: "https://github.com/kensoz/blog",
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
      ],
    },
  ],

  sidebar: [
    { text: "Home", link: "/" },
    {
      text: "メモ",
      link: "/memo/index.md",
      children: ["/memo/crud.md", "/memo/async.md", "/memo/currying.md"],
    },
    {
      text: "アルゴリズム",
      link: "/algorithm/index.md",
      children: [
        "/algorithm/leetcode.md",
        "/algorithm/atcoder.md",
        "/algorithm/other.md",
        // "/algorithm/paiza.md",
      ],
    },
    {
      text: "ネット記事",
      link: "/article/index.md",
      children: [
        "/article/vite.md",
        "/article/ui.md",
        "/article/layout.md",
        "/article/tailwindbreak.md",
        "/article/factorial.md",
        "/article/docker.md",
        "/article/pinia.md",
        "/article/indexed.md",
        "/article/rollup.md",
        "/article/vitest.md",
        "/article/github.md",
        "/article/syllabary.md",
        "/article/haveornot.md",
        "/article/component.md",
        "/article/compare.md",
        "/article/prime.md",
      ],
    },
    {
      text: "その他",
      link: "/other/index.md",
    },
  ],
};
