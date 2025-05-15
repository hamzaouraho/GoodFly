import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/GoodFly/',  // ← Important pour GitHub Pages : nom de ton repo avec slash au début et à la fin
  plugins: [react()],
})