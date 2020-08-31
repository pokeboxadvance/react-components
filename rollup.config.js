import sucrase from '@rollup/plugin-sucrase'
import resolve from '@rollup/plugin-node-resolve'
// import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/react-components.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/react-components.esm.js',
      format: 'esm',
    },
  ],
  external: [
    'react',
    'react-dom',
    'styled-components',
    '@themed-styling/core',
    'prop-types',
    '@openfonts/lato_latin/files/lato-latin-900.woff',
    '@openfonts/lato_latin/files/lato-latin-900.woff2',
    '@openfonts/lato_latin/files/lato-latin-400.woff',
    '@openfonts/lato_latin/files/lato-latin-400.woff2',
    '@openfonts/lato_latin/files/lato-latin-400-italic.woff',
    '@openfonts/lato_latin/files/lato-latin-400-italic.woff2',
    '@openfonts/lato_latin/files/lato-latin-700.woff',
    '@openfonts/lato_latin/files/lato-latin-700.woff2',
  ],
  plugins: [
    resolve({
      extensions: ['.js'],
    }),
    sucrase({
      exclude: ['node_modules/**'],
      transforms: ['jsx'],
      production: true,
    }),
  ],
}
