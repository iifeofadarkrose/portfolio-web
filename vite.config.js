import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copy } from 'fs-extra'; // Подключаем fs-extra для копирования файлов

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-web/',
  build: {
    outDir: 'dist', // Задаем папку для выходных файлов сборки
    assetsDir: 'assets', // Задаем папку, где лежат ваши статические ресурсы (assets)
    rollupOptions: {
      output: {
        manualChunks: undefined, // Отключаем ручное разделение чанков
      },
    },
  },
  // Добавляем хук, который будет выполняться после сборки проекта
  hooks: {
    // Хук для копирования файлов после завершения сборки
    buildEnd: async () => {
      try {
        // Копируем содержимое папки assets в папку dist/assets
        await copy('assets', 'dist/assets');
        console.log('Assets copied successfully!');
      } catch (error) {
        console.error('Error copying assets:', error);
      }
    },
  },
});
