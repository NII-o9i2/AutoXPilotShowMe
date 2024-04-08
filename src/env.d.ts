/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  // 如果有其他环境变量,可以在这里添加
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
