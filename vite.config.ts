import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig, UserConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    reactRefresh(),
    VitePWA({
      manifest: {
        name: "Vitamin",
        short_name: "Vitamin",
        theme_color: "#BD34FE",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
}) as UserConfig;
