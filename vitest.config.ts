import path from 'path'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
     coverage: {
      provider: 'v8',
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        'src/test/**', 
        'src/**/*.spec.ts', 
        'src/**/*.spec.tsx', 
        'src/components/ui/**/*', 
        "src/env.ts", 
        "src/main.tsx", 
        "src/routeTree.gen.ts", 
        "src/**/*.types.ts"]
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})