import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

import pkg from "./package.json" assert { type: "json" };

export default [
  // {
  //   input: "src/index.ts",
  //   output: [
  //     {
  //       file: pkg.module,
  //       format: "es",
  //       exports: "named",
  //       sourcemap: true,
  //     },
  //   ],
  //   plugins: [
  //     typescript({
  //       declaration: true,
  //       declarationDir: "dist",
  //       outDir: "dist",
  //       include: ["src/*/**"],
  //     }),
  //     terser(),
  //   ],
  // },
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
        outDir: "util",
        include: ["src/util/**"],
        declaration: true,
        declarationDir: "util",
      }),
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
        outDir: "math",
        include: ["src/math/**"],
        declaration: true,
        declarationDir: "math",
      }),
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
        outDir: "text",
        include: ["src/text/**"],
        declaration: true,
        declarationDir: "text",
      }),
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
        outDir: "hash",
        include: ["src/hash/**"],
        declaration: true,
        declarationDir: "hash",
      }),
      terser(),
    ],
  },
];
