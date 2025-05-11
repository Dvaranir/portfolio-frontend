import antfu from '@antfu/eslint-config'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import unicornPlugin from 'eslint-plugin-unicorn'
import { globalIgnores } from 'eslint/config'

import withNuxt from './.nuxt/eslint.config.mjs'

const perfectionistPluginNatural = perfectionistPlugin.configs['recommended-natural']

const configs = {

  antfu: antfu({
    formatters: true,
    stylistic: true,
    rules: {
      'antfu/top-level-function': 'off',
    },
  }),

  unicorn: {
    name: 'dvars:unicorn',
    rules: {
      ...unicornPlugin.configs.recommended.rules,
      'unicorn/no-process-exit': 'off',
    },
  },

  perfectionist: {
    name: 'dvars:perfectionist',
    rules: {
      'import/order': 'off',
      'sort-imports': 'off',
      'perfectionist/sort-imports': perfectionistPluginNatural.rules['perfectionist/sort-imports'],
      'perfectionist/sort-exports': perfectionistPluginNatural.rules['perfectionist/sort-exports'],
      'perfectionist/sort-named-imports': perfectionistPluginNatural.rules['perfectionist/sort-named-imports'],
      'perfectionist/sort-named-exports': perfectionistPluginNatural.rules['perfectionist/sort-named-exports'],
    },
  },

  tailwind: {
    name: 'dvars:tailwind',
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  },

  vue: {
    name: 'dvars:vue',
    rules: {
      'vue/max-attributes-per-line': [
        'error',
        {
          singleline: 3,
          multiline: 1,
        },
      ],
    },
  },

  eslint: {
    name: 'dvars:eslint',
    rules: {
      'func-style': ['error', 'expression'],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
      'prefer-const': ['error', {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      }],
    },
  },

  ignores: globalIgnores([
    '*.md',
  ]),

}

export default withNuxt(
  ...Object.values(configs),
)
