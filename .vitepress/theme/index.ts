import "./style.css";
import "vitepress-openapi/dist/style.css";
import DefaultTheme from "vitepress/theme";
import spec from "../../public/openapi.json";
import type { Theme } from "vitepress";
import { theme, useOpenapi } from "vitepress-openapi/client";

export default {
  extends: DefaultTheme,
  async enhanceApp({ app, _router, _siteData }) {
    useOpenapi({ spec });
    theme.enhanceApp({ app });
  },
} satisfies Theme;
