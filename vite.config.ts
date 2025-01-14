// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import viteImagemin from "vite-plugin-imagemin";
import path from "path";

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
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@contexts": path.resolve(__dirname, "./src/contexts"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@assets": path.resolve(__dirname, "./src/assets")
    }
  },
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
