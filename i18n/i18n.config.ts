// Russian needs 4 plural forms (zero | one | few | many); Kazakh nouns do not inflect after numerals.
const ru = new Intl.PluralRules('ru')
const RU_INDEX = { one: 0, few: 1, other: 1, many: 2 } as const

export default defineI18nConfig(() => ({
  fallbackLocale: 'en',
  missingWarn: import.meta.dev,
  fallbackWarn: false,
  pluralRules: {
    ru: (choice: number, len: number) => {
      const index = RU_INDEX[ru.select(choice) as keyof typeof RU_INDEX]
      if (len === 4) return choice === 0 ? 0 : index + 1
      return index
    },
    kk: (choice: number, len: number) => (len === 2 && choice !== 0 ? 1 : 0),
  },
}))
