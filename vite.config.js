// https://vite.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: 3000, // Optional: Change the port if needed
    strictPort: true, // Optional: Fail if the port is already in use
    allowedHosts: ['gig-floww.onrender.com'], // Allow connections from this host
  },
})
