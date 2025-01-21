import react from '@vitejs/plugin-react-swc'
import unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import type { ConfigEnv } from 'vite'

export default defineConfig(({ command }: ConfigEnv) => {
  const isBuild = command === 'build'

  console.log(isBuild)
  return {
    plugins: [react(), tsconfigPaths(), unocss()],
  }
})
