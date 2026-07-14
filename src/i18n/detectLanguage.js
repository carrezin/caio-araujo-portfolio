export const SUPPORTED_LANGUAGES = ['pt-BR', 'pt-PT', 'en']
export const DEFAULT_LANGUAGE = 'pt-BR'
const STORAGE_KEY = 'language'

// Mapeia país (ISO 3166-1 alpha-2, vindo da geolocalização por IP) para idioma.
const COUNTRY_TO_LANGUAGE = {
  BR: 'pt-BR',
  PT: 'pt-PT',
  AO: 'pt-PT', // Angola, Moçambique e demais PALOP usam a variante europeia
  MZ: 'pt-PT',
  CV: 'pt-PT',
  GW: 'pt-PT',
  ST: 'pt-PT',
  TL: 'pt-PT',
}

export function getSavedLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return SUPPORTED_LANGUAGES.includes(saved) ? saved : null
  } catch {
    return null
  }
}

export function saveLanguage(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang)
  } catch {
    // localStorage indisponível (modo privado etc.) — sem persistência, sem problema
  }
}

// Idioma do navegador como sinal secundário (não depende de rede).
export function detectFromBrowser() {
  const candidates = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language]

  for (const candidate of candidates) {
    if (!candidate) continue
    const lower = candidate.toLowerCase()
    if (lower.startsWith('pt-pt')) return 'pt-PT'
    if (lower.startsWith('pt')) return 'pt-BR'
    if (lower.startsWith('en')) return 'en'
  }
  return null
}

// Geolocalização por IP (sem prompt de permissão — diferente da Geolocation API
// do navegador). Usa um serviço público gratuito; falha silenciosamente (rede
// lenta, bloqueio de ad-blocker, rate limit) e deixa o fallback assumir.
export async function detectFromIP(timeoutMs = 2500) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch('https://ipapi.co/json/', { signal: controller.signal })
    if (!response.ok) return null
    const data = await response.json()
    const country = (data && data.country_code) || null
    if (!country) return null
    return COUNTRY_TO_LANGUAGE[country] || 'en'
  } catch {
    return null
  } finally {
    clearTimeout(timeout)
  }
}

// Resolve o idioma inicial de forma síncrona (localStorage → navegador),
// usado antes do primeiro paint para não haver flash de idioma errado.
export function detectLanguageSync() {
  return getSavedLanguage() || detectFromBrowser() || DEFAULT_LANGUAGE
}

// Resolução assíncrona completa, incluindo geolocalização por IP. Só é usada
// quando o usuário nunca escolheu manualmente um idioma (localStorage vazio).
export async function detectLanguageAsync() {
  const saved = getSavedLanguage()
  if (saved) return saved

  const byIP = await detectFromIP()
  if (byIP) return byIP

  return detectFromBrowser() || DEFAULT_LANGUAGE
}
