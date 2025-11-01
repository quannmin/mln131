import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    base: "/",
    plugins: [react()],
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
