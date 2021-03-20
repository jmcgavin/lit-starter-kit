import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import minifyHTML from 'rollup-plugin-minify-html-literals'
import copy from 'rollup-plugin-copy'

// Static assets will vary depending on the application
const copyConfig = {
  targets: [
    { src: 'node_modules/@webcomponents', dest: 'build/node_modules' },
    { src: 'images', dest: 'build' },
    { src: 'index.html', dest: 'build' },
    { src: 'manifest.json', dest: 'build' }
  ]
}

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
  input: 'src/litelement-starter-kit.js',
  output: {
    dir: 'build/src/',
    format: 'es'
  },
  plugins: [
    minifyHTML(),
    copy(copyConfig),
    resolve()
  ],
  preserveEntrySignatures: false
}

if (process.env.NODE_ENV !== 'development') {
  config.plugins.push(terser())
}

console.log(JSON.stringify(config, '', 2))

export default config
