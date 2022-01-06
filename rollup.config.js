import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

const bookmarklet = {
  name: "bookmarklet",
  renderChunk(code) {
    return `javascript:${code}`;
  },
};

const plugins = [
  typescript(),
  terser({
    compress: {
      negate_iife: false,
    },
  }),
  bookmarklet,
];

export default ["fill", "max-fill", "show-maxlength", "copyText"].map((x) => ({
  input: `src/${x}.ts`,
  output: {
    file: `dist/${x}.txt`,
    format: "iife",
  },
  plugins,
}));
