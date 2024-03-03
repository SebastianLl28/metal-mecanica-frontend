import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@api',
        replacement: path.resolve(path.join(__dirname, '/src/api'))
      },
      {
        find: '@components',
        replacement: path.resolve(path.join(__dirname, '/src/components'))
      },
      {
        find: '@hooks',
        replacement: path.resolve(path.join(__dirname, '/src/hooks'))
      },
      {
        find: '@interceptors',
        replacement: path.resolve(path.join(__dirname, '/src/interceptors'))
      },
      {
        find: '@pages',
        replacement: path.resolve(path.join(__dirname, '/src/pages'))
      },
      {
        find: '@store',
        replacement: path.resolve(path.join(__dirname, '/src/store'))
      },
      {
        find: '@styled',
        replacement: path.resolve(path.join(__dirname, '/src/styled-component'))
      },
      { find: '@', replacement: path.resolve(path.join(__dirname, '/src')) }
    ]
  }
})
