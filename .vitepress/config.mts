import { defineConfig } from "vitepress";

export default defineConfig({
  cleanUrls: true,
  description:
    "Empowering creators to publish frequency response data for headphones and IEMs",
  srcDir: "src",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
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
