import { defineConfig } from "vitepress";

export default defineConfig({
  cleanUrls: true,
  description:
    "Empowering creators to publish frequency response data for headphones and IEMs",
  srcDir: "source",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Developer docs", link: "/api-reference" },
      { text: "Join Squiglink", link: "/joining-squiglink" },
    ],
    sidebar: [
      {
        text: "Developer documentation",
        items: [
          { text: "API reference", link: "/api-reference" },
        ],
      },
      {
        text: "Managing a squig site",
        items: [
          { text: "Joining Squiglink", link: "/joining-squiglink" },
          { text: "Self-hosting ", link: "/hosting-squig-site" },
          { text: "Updating", link: "/updating-squig-site" },
        ],
      },
      {
        text: "Creating measurements",
        items: [
          { text: "Hardware setup", link: "/measurement-hardware" },
          { text: "Using REW", link: "/using-rew" },
        ],
      },
      {
        text: "Site documentation",
        items: [{ text: "Using Markdown", link: "/markdown" }],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/squiglink" }],
  },
  title: "Squiglink",
});
