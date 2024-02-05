import { defineConfig, presetIcons, presetMini } from 'unocss'

export default defineConfig({
  content: {
    pipeline: {
      exclude: ['node_modules', '.git', 'dist'],
    },
  },
  presets: [presetIcons(), presetMini({ dark: 'class' })],
  shortcuts: {
    'flex-center': 'flex justify-center items-center',
  },
  theme: {
    colors: {
      // primary: 'var(--primary-color)',
    },
    backgroundColor: {},
    transitionProperty: [],
  },
})
