import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { HashRouter } from 'react-router-dom';


export default defineConfig({
  plugins: [react()],
  base: '/reactworkb/', // 👈 your repo name here
})
