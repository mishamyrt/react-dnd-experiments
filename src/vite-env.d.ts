/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REPO_URL: string
  readonly VITE_BASEURL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
