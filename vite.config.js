import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  site: 'https://https://pikatostes.github.io',
  base: "/proyecto-final-react"
})
