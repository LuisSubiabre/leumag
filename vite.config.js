import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    // Otros plugins que uses
    visualizer({
      filename: './dist/stats.html', // Ruta donde se guardará el reporte
      open: true, // Abre el reporte automáticamente en el navegador
    }),
  ],
});
