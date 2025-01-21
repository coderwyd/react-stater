import { defineConfig } from '@coderwyd/eslint-config'

export default defineConfig({
  react: true,
  unocss: true,
  isInEditor: false,
  rules: {
    'no-console': 'off',
  },
})
