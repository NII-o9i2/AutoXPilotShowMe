import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: "zh-cn",
    locales: ["en", "zh-cn"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true
    }
  },
  site: 'https://nii-o9i2.github.io',
  base: '/AutoXPilotShowMe',
});