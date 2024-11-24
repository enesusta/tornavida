import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: "es",
        exports: "named",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: "dist",
      }),
      commonjs(),
      terser(),
    ],
  },
  {
    input: "src/util/index.ts",
    output: [
      {
        dir: "util",
        format: "es",
      },
    ],
    plugins: [
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: "util",
      }),
      terser(),
    ],
  },
  {
    input: "src/util/index.ts",
    output: [
      {
        dir: "util/cjs",
        format: "cjs",
      },
    ],
    plugins: [
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: "util/cjs",
      }),
      commonjs(),
      terser(),
    ],
  },
  {
    input: "src/math/index.ts",
    output: [
      {
        dir: "math",
        format: "es",
      },
    ],
    plugins: [
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: "math",
      }),
      terser(),
    ],
  },
  {
    input: "src/math/index.ts",
    output: [
      {
        dir: "math/cjs",
        format: "cjs",
      },
    ],
    plugins: [
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: "math/cjs",
      }),
      commonjs(),
      terser(),
    ],
  },
  {
    input: "src/text/index.ts",
    output: [
      {
        dir: "text",
        format: "es",
      },
    ],
    plugins: [
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: "text",
      }),
      terser(),
    ],
  },
  {
    input: "src/text/index.ts",
    output: [
      {
        dir: "text/cjs",
        format: "cjs",
      },
    ],
    plugins: [
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: "text/cjs",
      }),
      commonjs(),
      terser(),
    ],
  },
  {
    input: "src/hash/index.ts",
    output: [
      {
        dir: "hash",
        format: "es",
      },
    ],
    plugins: [
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: "hash",
      }),
      terser(),
    ],
  },
  {
    input: "src/hash/index.ts",
    output: [
      {
        dir: "hash/cjs",
        format: "cjs",
      },
    ],
    plugins: [
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: "hash/cjs",
      }),
      commonjs(),
      terser(),
    ],
  },
];
