// Validates i18n/locales/<locale>/<namespace>.json before the build does (the build only names the file).
// Checks: same files + same keys in every locale, top-level key === file name, every string compiles
// under vue-i18n message syntax, no HTML (strictMessage). Run: node scripts/check-i18n.mjs
import { readdirSync, readFileSync } from 'node:fs'
import { baseCompile, detectHtmlTag } from '@intlify/message-compiler'

const DIR = new URL('../i18n/locales/', import.meta.url)
const LOCALES = ['en', 'ru', 'kk'] // en is the source of truth
const problems = []

const flatten = (obj, prefix = '', out = {}) => {
  for (const [k, v] of Object.entries(obj)) {
    const key = Array.isArray(obj) ? `${prefix}[${k}]` : prefix ? `${prefix}.${k}` : k
    if (v && typeof v === 'object') flatten(v, key, out)
    else out[key] = v
  }
  return out
}

const files = readdirSync(new URL('en/', DIR)).filter(f => f.endsWith('.json'))
const flat = {}
for (const locale of LOCALES) {
  for (const file of files) {
    const where = `${locale}/${file}`
    let json
    try { json = JSON.parse(readFileSync(new URL(where, DIR), 'utf8')) }
    catch (e) { problems.push(`${where}: ${e.code === 'ENOENT' ? 'missing file' : e.message}`); continue }
    const ns = file.replace(/\.json$/, '')
    const top = Object.keys(json)
    if (top.length !== 1 || top[0] !== ns) problems.push(`${where}: must contain exactly one top-level key "${ns}", found [${top}]`)
    flat[where] = flatten(json)
    for (const [key, msg] of Object.entries(flat[where])) {
      if (typeof msg !== 'string') { problems.push(`${where} ${key}: value must be a string, got ${typeof msg}`); continue }
      if (detectHtmlTag(msg)) problems.push(`${where} ${key}: HTML-like text (<...>) is rejected by strictMessage; use <i18n-t> slots`)
      baseCompile(msg, { onError: e => problems.push(`${where} ${key}: ${e.message} in "${msg}"`) })
    }
  }
}
for (const file of files) {
  const source = Object.keys(flat[`en/${file}`] ?? {})
  for (const locale of LOCALES.slice(1)) {
    const keys = Object.keys(flat[`${locale}/${file}`] ?? {})
    for (const k of source.filter(k => !keys.includes(k))) problems.push(`${locale}/${file}: missing key ${k}`)
    for (const k of keys.filter(k => !source.includes(k))) problems.push(`${locale}/${file}: extra key ${k} (not in en)`)
  }
}
console.log(problems.length ? problems.join('\n') : `i18n OK: ${files.length} namespaces x ${LOCALES.length} locales`)
process.exit(problems.length ? 1 : 0)
