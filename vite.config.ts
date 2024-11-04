import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@constants": path.resolve(__dirname, "./src/constants/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@hooks": path.resolve(__dirname, "./src/hooks/"),
      "@types": path.resolve(__dirname, "./src/types/"),
      "@utils": path.resolve(__dirname, "./src/utils/"),
      "@features": path.resolve(__dirname, "./src/features/"),
      "@layouts": path.resolve(__dirname, "./src/layouts/"),
    },
  },
});
