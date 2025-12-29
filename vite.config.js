import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    // Otros plugins que uses
    visualizer({
      filename: "./dist/stats.html", // Ruta donde se guardará el reporte
      open: true, // Abre el reporte automáticamente en el navegador
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://sites.google.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
      },
    },
  },
});
