import { readdir } from 'fs/promises'
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { build } from 'vite'

const root = fileURLToPath(new URL('..', import.meta.url))
const src = resolve(root, 'src')
const libraries = resolve(src, 'libraries')

async function bundleSize (path) {
  const info = await build({
    root: src,
    resolve: {
      alias: {
        $components: resolve(src, 'components'),
        $utils: resolve(src, 'utils'),
        $mock: resolve(src, 'mock'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          'index.js': resolve(root, path),
        },
      },
    },
  })
  let size = 0
  for (const out of info.output) {
    if (out.name.endsWith('.js') || out.name.endsWith('.css')) {
      if (out.code) {
        size += out.code.length
      } else {
        size += out.source.length
      }
    }
  }
  return size
}

export const libraryIndexPath = (directory) => resolve(libraries, directory, 'index.ts')

async function main () {
  const files = await readdir(libraries, { withFileTypes: true })
  const examples = files
    .filter(file => file.isDirectory())
    .map(file => file.name)

  const sizes = await Promise.all(
    examples
      .map(libraryIndexPath)
      .map(bundleSize),
  )

  const results = sizes.map((size, i) => ({
    name: examples[i],
    size,
  })).sort((a, b) => a.size - b.size)

  for (let i = 0; i < results.length; i++) {
    let line = `${i + 1}. ${results[i].name} | ${(results[i].size / 1024).toFixed(2)} kB`
    if (i > 0) {
      const diff = results[i].size - results[0].size
      line += ` | +${diff} bytes`
    }
    console.log(line)
  }
}

main()
