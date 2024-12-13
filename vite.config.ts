// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import viteImagemin from "vite-plugin-imagemin";

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
    include: ["esm-dep > cjs-dep", "tailwindcss-motion"],
  },
  server: {
    proxy: {
      "/api/append-data": {
        target:
          "https://script.google.com/macros/s/AKfycbxOPydNsc6UVuFdbhgD7ldZ0D4V2uu0cBvR7UZDFaZnJfPnKiNyy-kMC5a2sfjij8VUzw/exec",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/append-data/, ""),
        followRedirects: true, // Ensure redirects are followed
      },
      "/api/test1": {
        target: "https://vogyb0pn35.execute-api.ap-south-1.amazonaws.com/test1",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/test1/, "/test1"),
        followRedirects: true,
      },
    },
  },
});
