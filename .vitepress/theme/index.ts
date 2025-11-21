// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import { theme, useOpenapi } from "vitepress-openapi/client";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "vitepress-openapi/dist/style.css";
import "./style.css";
import spec from "../../public/openapi.json";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  async enhanceApp({ app, _router, _siteData }) {
    useOpenapi({ spec });
    theme.enhanceApp({ app });
  },
} satisfies Theme;
