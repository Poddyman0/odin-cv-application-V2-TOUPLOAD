import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    port: process.env.PORT || 4173,  // Use Railway's assigned port or fallback to 4173
    host: '0.0.0.0',                 // Expose to all network interfaces
  }
});
