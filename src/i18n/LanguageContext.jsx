import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import {
  SUPPORTED_LANGUAGES,
  detectLanguageSync,
  detectLanguageAsync,
  saveLanguage,
  getSavedLanguage,
} from './detectLanguage'
import ptBR from './locales/ptBR'
import ptPT from './locales/ptPT'
import en from './locales/en'

const DICTIONARIES = { 'pt-BR': ptBR, 'pt-PT': ptPT, en }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  // Começa com a resolução síncrona (localStorage ou idioma do navegador) —
  // igual ao boot script do tema, evita esperar rede para o primeiro paint.
  const [lang, setLangState] = useState(detectLanguageSync)

  useEffect(() => {
    const dict = DICTIONARIES[lang]
    document.documentElement.setAttribute('lang', dict.htmlLang)
    document.title = dict.meta.title

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) descriptionTag.setAttribute('content', dict.meta.description)

    const ogLocaleTag = document.querySelector('meta[property="og:locale"]')
    if (ogLocaleTag) ogLocaleTag.setAttribute('content', dict.meta.ogLocale)
  }, [lang])

  useEffect(() => {
    // Geolocalização por IP só entra em jogo se o usuário nunca escolheu um
    // idioma manualmente — evita sobrescrever uma preferência já salva.
    if (getSavedLanguage()) return
    let cancelled = false

    detectLanguageAsync().then((detected) => {
      if (!cancelled && detected !== lang) setLangState(detected)
    })

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setLang = (next) => {
    if (!SUPPORTED_LANGUAGES.includes(next)) return
    saveLanguage(next)
    setLangState(next)
  }

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: DICTIONARIES[lang],
      languages: SUPPORTED_LANGUAGES.map((code) => ({
        code,
        flagCode: DICTIONARIES[code].flagCode,
        name: DICTIONARIES[code].name,
      })),
    }),
    [lang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage precisa estar dentro de <LanguageProvider>')
  return ctx
}
