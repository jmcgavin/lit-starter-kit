import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import minifyHTML from 'rollup-plugin-minify-html-literals'
import copy from 'rollup-plugin-copy'

// Static assets will vary depending on the application
const copyConfig = {
  targets: [
    { src: 'node_modules/@webcomponents', dest: 'dist/node_modules' },
    { src: 'images', dest: 'dist' },
    { src: 'index.html', dest: 'dist' },
    { src: 'manifest.json', dest: 'dist' }
  ]
}

// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
  input: 'src/index.js',
  output: {
    dir: 'dist/src/',
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
