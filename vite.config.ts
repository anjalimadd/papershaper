// vite.config.ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteImagemin({
      // Options for image optimization (optional)
      gifsicle: {
        optimizationLevel: 3,
      },
      optipng: {
        optimizationLevel: 3,
      },
      mozjpeg: {
        quality: 85,
      },
    }),
  ],
  optimizeDeps: {
    include: [
      "react-router",
      "react-router-dom",
      "tailwindcss-motion"
    ],
  },
  server: {
    host: true,
    port: 80,
    proxy: {
      "/api/append-data": {
        target:
          "https://script.google.com/macros/s/AKfycbxOPydNsc6UVuFdbhgD7ldZ0D4V2uu0cBvR7UZDFaZnJfPnKiNyy-kMC5a2sfjij8VUzw/exec",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/append-data/, ""),
        followRedirects: true,
      },
      "/api/test1": {
        target: "https://vogyb0pn35.execute-api.ap-south-1.amazonaws.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => {
          return path.replace(/^\/api\/test1/, "/test1");
        },
        followRedirects: true,
      },
    },
  },
  build: {
    sourcemap: false,
  },
});
