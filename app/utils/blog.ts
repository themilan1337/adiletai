// Blog registry: slug, i18n namespace (holds meta.title / meta.description / meta.excerpt) and real dates.
// Slugs are shared by all locales: /blog/<slug>, /ru/blog/<slug>, /kk/blog/<slug>.
export interface BlogPostEntry {
  slug: string
  ns: string
  datePublished: string
  dateModified: string
}

export const BLOG_POSTS: BlogPostEntry[] = [
  { slug: 'yuridicheskiy-ii-pomoshnik', ns: 'postYuridicheskiyIiPomoshnik', datePublished: '2026-02-03', dateModified: '2026-10-12' },
  { slug: 'ii-assistent-dlya-yurista', ns: 'postIiAssistentDlyaYurista', datePublished: '2026-02-03', dateModified: '2026-10-12' },
  { slug: 'yurist-ai', ns: 'postYuristAi', datePublished: '2026-02-03', dateModified: '2026-10-12' },
]

// Display-only typography for a post's meta.title shown as a heading (blog index, related articles); <title> and JSON-LD
// keep the plain string. A word joiner after a hyphen keeps «ИИ-помощник» whole, and a no-break space glues a one-letter
// word or a short Russian preposition/conjunction to the next word (glossary rule 2.4, "Display headings").
const SHORT_WORD = /(?<=^|[\s«(„])([вксуоиая]|на|по|за|из|от|до|об|со|во|ко|не|ни|но|для|без|при|про|под|над) /giu
export const displayTitle = (s: string) => s.replace(/-(?=\p{L})/gu, '-⁠').replace(SHORT_WORD, '$1 ')
