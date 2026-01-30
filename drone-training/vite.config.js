import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Force restart
export default defineConfig({
  plugins: [react()],
})
