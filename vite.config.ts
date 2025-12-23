import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

const __dirname = import.meta.dirname;

export default defineConfig({
    plugins: [tailwindcss(), react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "#": path.resolve(__dirname, "./"),
        },
    },
    server: {
        host: true,
        port: 3002,
        strictPort: true,
        hmr: {
            port: 3003,
            clientPort: 3003,
        },
    }
});