import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "fs";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
    base: "/",
    plugins: [
        react(),
        {
            name: "copy-museum-html",
            writeBundle() {
                // Copy museum.html and related files to dist after build
                try {
                    copyFileSync(resolve("public/museum.html"), resolve("dist/museum.html"));
                    console.log("✓ Copied museum.html to dist/");
                } catch (err) {
                    console.warn("Could not copy museum.html:", err.message);
                }
            },
        }
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    // Vendor chunks
                    "react-vendor": ["react", "react-dom", "react-router-dom"],
                    "framer-motion": ["framer-motion"],
                    charts: ["recharts"],
                    "ui-libs": [
                        "react-countup",
                        "react-intersection-observer",
                        "swiper",
                    ],
                    icons: ["lucide-react"],
                    lottie: ["lottie-react"],
                },
            },
        },
        chunkSizeWarningLimit: 1000,
    },
});
