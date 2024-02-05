import process from 'node:process'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { visualizer } from 'rollup-plugin-visualizer'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { createHtmlPlugin } from 'vite-plugin-html'
import type { ConfigEnv } from 'vite'

export default defineConfig(({ command }: ConfigEnv) => {
  const root = process.cwd()

  const isBuild = command === 'build'
  return {
    root,
    base: './',
    plugins: [
      react(),
      tsconfigPaths(),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(root, 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      createHtmlPlugin({
        minify: isBuild,
      }),
      visualizer({
        open: false,
      }),
    ],
    css: {
      devSourcemap: true,
    },
    server: {
      open: false,
      port: 3000,
      host: true,
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
  }
})
