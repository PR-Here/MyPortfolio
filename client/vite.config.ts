import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'],
  build: {
    commonjsOptions: {
      include: [/aos/, /node_modules/],
    },
  },
  optimizeDeps: {
    include: ['aos'],
  },
});