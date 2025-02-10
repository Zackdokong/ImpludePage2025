import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // 모든 파일을 별도 파일로 저장
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]', // 해시 포함된 파일 이름
      },
    },
  },
})
