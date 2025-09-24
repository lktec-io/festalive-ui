import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
server: {
    proxy: {
      '/web': {
        target: 'http://185.194.216.146:81',
        changeOrigin: true,
        secure: false,
      },
    },
  },

})
