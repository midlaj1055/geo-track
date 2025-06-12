// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/geo-track.git',
  server: {
    host: true, // ← IMPORTANT: allows external access
    port: 3001, // you can change the port if needed
  },
});
