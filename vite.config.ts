import react from '@vitejs/plugin-react'
import unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import type { ConfigEnv } from 'vite'

const ReactCompilerConfig = {}

export default defineConfig(({ command }: ConfigEnv) => {
  const isBuild = command === 'build'

  console.log(isBuild)
  return {
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
        },
      }),
      tsconfigPaths(),
      unocss(),
    ],
  }
})
