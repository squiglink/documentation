import { defineConfig } from "vitepress";
import { fileURLToPath } from "url";

export default defineConfig({
  cleanUrls: true,
  description:
    "Empowering creators to publish frequency response data for headphones and IEMs",
  srcDir: "source",
  themeConfig: {
    nav: [
      { text: "Home", link: "/overview/getting-started" },
      { text: "Squiglink Lab", link: "https://squig.link" },
      { text: "Squiglink Studio (TBD)", link: "https://studio.squig.link/" },
    ],
    sidebar: [
      {
        text: "Overview",
        items: [{ text: "Getting started", link: "/overview/getting-started" }],
      },
      {
        text: "Developers",
        items: [{ text: "API reference", link: "/developers/api-reference" }],
      },
      {
        text: "Squigglers",
        items: [
          {
            text: "Managing a squig database",
            link: "/squigglers/managing-a-database",
          },
          {
            text: "Creating measurements",
            items: [
              {
                text: "Hardware setup",
                link: "/squigglers/creating-measurements/hardware-setup",
              },
              {
                text: "Using REW",
                link: "/squigglers/creating-measurements/using-rew",
              },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "discord", link: "https://discord.gg/HADZ4RtVQa" },
      { icon: "github", link: "https://github.com/squiglink" },
    ],
  },
  title: "Squiglink",
  vite: {
    resolve: {
      alias: {
        "@public": fileURLToPath(new URL("../public", import.meta.url)),
      },
    },
  },
});
