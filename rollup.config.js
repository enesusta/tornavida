import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: true
      }
    ],
    plugins: [
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: 'dist'
      }),
      commonjs()
    ]
  },
  {
    input: 'src/util/index.ts',
    output: [
      {
        dir: 'util',
        format: 'es'
      }
    ],
    plugins: [
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: 'util'
      })
    ]
  },
  {
    input: 'src/math/index.ts',
    output: [
      {
        dir: 'math',
        format: 'es'
      }
    ],
    plugins: [
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: 'math'
      })
    ],
  },
  {
    input: 'src/math/index.ts',
    output: [
      {
        dir: 'math/cjs',
        format: 'cjs'
      }
    ],
    plugins: [
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: 'math'
      }),
      commonjs()
    ],
  },
  {
    input: 'src/text/index.ts',
    output: [
      {
        dir: 'text',
        format: 'es'
      }
    ],
    plugins: [
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: 'text'
      })
    ]
  },
  {
    input: 'src/text/index.ts',
    output: [
      {
        dir: 'text/cjs',
        format: 'cjs'
      }
    ],
    plugins: [
      resolve(),
      typescript({
        rollupCommonJSResolveHack: true,
        clean: true,
        declaration: true,
        declarationDir: 'text'
      }),
      commonjs()
    ]
  },
];
