import { defineConfig } from "rollup";
import typescriptPlugin from "@rollup/plugin-typescript";
export default defineConfig({
  input: "./src/index.ts",
  output: {
    file: "./dist/bundler.js",
    format: "esm",
  },
  plugins: [typescriptPlugin()],
});
