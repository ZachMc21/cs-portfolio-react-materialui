import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: "/cs-portfolio-react-mui/",
  plugins: [react()],

  esbuild: {
    loader: 'tsx'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './dist'),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.ts': 'tsx',
      }
    }
  }
});
