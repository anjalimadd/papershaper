// vite.config.ts
import { defineConfig } from "vite"; 
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";
import tsconfigPaths from "vite-tsconfig-paths";
import { readFileSync } from "fs";
import path from "path";

// Read package.json
const packageJson = JSON.parse(
  readFileSync(path.resolve(__dirname, "package.json"), "utf-8")
);

export default defineConfig(() => {
  // Load environment variables based on mode
  // const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      tsconfigPaths(),
      viteImagemin({
        gifsicle: { optimizationLevel: 3 },
        optipng: { optimizationLevel: 3 },
        mozjpeg: { quality: 85 },
      }),
    ],
    define: {
      __APP_VERSION__: JSON.stringify(packageJson.version),
    },
    server: {
      // proxy: {
      //   // Proxy configuration
      //   "/api/answer-key": {
      //     target: env.VITE_ANSWER_API_BASE_URL,
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api\/answer-key/, ""),
      //   },
      // },
      hmr: {
        protocol: "ws",
        port: 1234,
      },
      host: "localhost",
      port: 1234,
    },
    build: {
      sourcemap: false,
    },
    optimizeDeps: {
      include: ["react-router", "react-router-dom", "tailwindcss-motion"],
    },
  };
});
