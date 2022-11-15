import { fileURLToPath, URL } from 'node:url';
import { createHtmlPlugin } from 'vite-plugin-html';
import dateTime from '@radioactivehamster/date-time';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const buildTime = dateTime();

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        createHtmlPlugin({
            inject: {
                data: {
                    available: buildTime, // Hardcode this value after initial deploy
                    modified: buildTime
                }
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
