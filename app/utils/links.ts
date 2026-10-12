export const CALENDLY_URL = 'https://calendly.com/eranariman5'
export const APP_URL = 'https://business.adiletai.com'
export const CONTACT_EMAIL = 'support@adiletai.com'

// Internal routes (pass through localePath). Header and footer read from here so the three navs never drift.
export const NAV_LINKS = [
  { key: 'platform', to: '/features' },
  { key: 'howItWorks', to: '/how-it-works' },
  { key: 'useCases', to: '/use-cases' },
  { key: 'security', to: '/security' },
  { key: 'blog', to: '/blog' },
] as const
