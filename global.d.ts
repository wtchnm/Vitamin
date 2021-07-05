/// <reference types="vite/client" />

declare module "rollup-plugin-istanbul" {
  import type { Plugin } from "vite";

  interface Options {
    include: string[];
  }

  export default function istanbul(options: Options): Plugin;
}
