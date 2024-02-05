import { defineConfig } from '@coderwyd/eslint-config'

export default defineConfig(
  {
    react: true,
    unocss: true,
  },
  {
    rules: {
      'no-console': 'off',
    },
  },
)
