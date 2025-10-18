import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { HashRouter } from 'react-router-dom';


// Replace `niyasali/Portpholio` with your actual GitHub username and repository name
export default defineConfig({
  plugins: [react()],
  base: '/Portpholio/', // 👈 Important for GitHub Pages
})

