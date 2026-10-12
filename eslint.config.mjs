// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.vue'],
    rules: {
      // RU/KK copy uses no-break spaces (U+00A0) on purpose; still flag them in script code.
      'no-irregular-whitespace': 'off',
      'vue/no-irregular-whitespace': ['error', { skipStrings: true, skipHTMLTextContents: true, skipHTMLAttributeValues: true }],
      // Optional props typed with `?` are undefined by default; a default value adds nothing.
      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
    },
  },
)
