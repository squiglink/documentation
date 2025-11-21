import { defineConfig } from "vitepress";

export default defineConfig({
  cleanUrls: true,
  description:
    "Empowering creators to publish frequency response data for headphones and IEMs",
  srcDir: "source",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "API Reference", link: "/api-reference" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Developer documentation",
        items: [{ text: "API reference", link: "/api-reference" }],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  title: "Squiglink",
});
