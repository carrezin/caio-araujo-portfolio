import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [react(), VitePWA({
    // autoUpdate: o novo service worker assume o controle sozinho a cada
    // deploy, sem deixar o usuário preso numa versão antiga em cache.
    registerType: 'autoUpdate',
    includeAssets: ['icons/*.png'],
    manifest: {
      name: 'Caio Araujo — Analista de TI e Desenvolvedor de Automações',
      short_name: 'Caio Araujo',
      description:
        'Portfólio profissional de Caio Araujo: automações, integrações com CRM, APIs e dashboards para empresas.',
      lang: 'pt-BR',
      theme_color: '#05060a',
      background_color: '#05060a',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      icons: [
        { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
        { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
        {
          src: '/icons/icon-maskable-512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,jpg,jpeg,woff2}'],
      cleanupOutdatedCaches: true,
      // Não deixa o navegador ficar preso à versão antiga do app-shell
      // esperando todas as abas fecharem antes de assumir o novo SW.
      skipWaiting: true,
      clientsClaim: true,
    },
  }), cloudflare()],
  preview: {
    // Permite acesso via túnel (trycloudflare.com) para compartilhar o preview local
    allowedHosts: ['.trycloudflare.com'],
  },
})