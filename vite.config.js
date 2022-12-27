import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/v1':{
        target: 'https://dev.svc.dimulai.apps360.id',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, "")
      }
    }
  },
  plugins: [react()]
})
