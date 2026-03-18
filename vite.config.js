import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  // Serve from src/ so HTML files land at dist/ root (not dist/src/)
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index:    resolve(__dirname, 'src/index.html'),
        services: resolve(__dirname, 'src/services.html'),
        doctors:  resolve(__dirname, 'src/doctors.html'),
        about:    resolve(__dirname, 'src/about.html'),
        contacts: resolve(__dirname, 'src/contacts.html'),
        // Doctor detail pages
        'doctors/dancheva':    resolve(__dirname, 'src/doctors/dancheva.html'),
        'doctors/hokhlov':     resolve(__dirname, 'src/doctors/hokhlov.html'),
        'doctors/sheveleva':   resolve(__dirname, 'src/doctors/sheveleva.html'),
        'doctors/samsonova':   resolve(__dirname, 'src/doctors/samsonova.html'),
        'doctors/manyuta':     resolve(__dirname, 'src/doctors/manyuta.html'),
        'doctors/kovalchuk':   resolve(__dirname, 'src/doctors/kovalchuk.html'),
        'doctors/pantak':      resolve(__dirname, 'src/doctors/pantak.html'),
        'doctors/klymenko':    resolve(__dirname, 'src/doctors/klymenko.html'),
        'doctors/turska':      resolve(__dirname, 'src/doctors/turska.html'),
        'doctors/shunevych':   resolve(__dirname, 'src/doctors/shunevych.html'),
        'doctors/karboinova':  resolve(__dirname, 'src/doctors/karboinova.html'),
        'doctors/abakumov':    resolve(__dirname, 'src/doctors/abakumov.html'),
      }
    }
  }
})
