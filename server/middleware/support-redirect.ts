// /support was merged into /contact. A middleware rather than routeRules: the SEO modules re-localize
// redirect rules and prerendered junk such as /kk/ru/support.
export default defineEventHandler((event) => {
  const match = event.path.match(/^\/(ru\/|kk\/)?support\/?(?:\?.*)?$/)
  if (match) return sendRedirect(event, `/${match[1] ?? ''}contact`, 301)
})
