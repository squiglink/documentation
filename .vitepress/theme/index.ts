// https://vitepress.dev/guide/custom-theme
import "./style.css";
import "vitepress-openapi/dist/style.css";
import DefaultTheme from "vitepress/theme";
import spec from "../../public/openapi.json";
import type { Theme } from "vitepress";
import { h } from "vue";
import { theme, useOpenapi } from "vitepress-openapi/client";

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
