import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/backend': 'http://web', // Прокси для API запросов на Laravel
    },
  },
});

