import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/assets'),
            '@pi':path.resolve(__dirname, '../public/image')
        }
    },
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                book: path.resolve(__dirname, 'book.html'),
                author: path.resolve(__dirname, 'author.html'),
            }
        }
    },
    server: {
        proxy: {
            '/backend': 'http://web', // Прокси для API запросов на Laravel
        },
    },
});

