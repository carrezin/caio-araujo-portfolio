import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    // Permite acesso via túnel (trycloudflare.com) para compartilhar o preview local
    allowedHosts: ['.trycloudflare.com'],
  },
})
