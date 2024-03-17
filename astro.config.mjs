import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: "zh-cn",
    locales: ["en", "zh-cn"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true
    }
  }
});
