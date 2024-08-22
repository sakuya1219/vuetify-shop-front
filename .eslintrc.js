module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/standard'],
  rules: {
    indent: ['error', 2], // 使用2個空格的縮排
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never']
  },
  overrides: [
    {
      files: ['src/layouts/**', 'src/pages/**'],
      rules: {
        'vue/multi-word-component-names': 'off'
      }
    }
  ]
}
