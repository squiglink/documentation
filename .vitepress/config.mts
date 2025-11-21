import { defineConfig } from "vitepress";

export default defineConfig({
  cleanUrls: true,
  description:
    "Empowering creators to publish frequency response data for headphones and IEMs",
  srcDir: "source",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "API reference", link: "/api-reference" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "Developer documentation",
        items: [{ text: "API reference", link: "/api-reference" }],
      },
      {
        text: "Documentation",
        items: [{ text: "Getting started", link: "/getting-started" }],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/squiglink" }],
  },
  title: "Squiglink",
});
