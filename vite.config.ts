import manifest from "./public/manifest.json";
import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import { resolve } from "path";
import solidPlugin from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }: { mode: string }) => {
  switch (mode) {
    case "development":
      return { ...config(), plugins: [...plugins(), crx({ manifest })] };
    case "production":
      return config();

    case "NewTab":
      return {
        ...config(),
        server: {
          open: "src/Pages/NewTab/newTab.html",
        },
      };
    case "Options":
      return { ...config() };
    case "Popup":
      return { ...config() };
    default:
      return { ...config() };
  }
});

// Plugins
function plugins() {
  return [solidPlugin(), tailwindcss()];
}

// Alias

// Default Vite Configuration
function config() {
  return {
    plugins: plugins(),
    build: {
      outDir: "dist", // Output directory for the built extension
      rollupOptions: {
        input: {
          popup: resolve(__dirname, "src/Popup/popup.html"),
          options: resolve(__dirname, "src/Options/options.html"),
          newTab: resolve(__dirname, "src/NewTab/newTab.html"),
        },
        output: {
          entryFileNames: "scripts/[name].js",
          chunkFileNames: "scripts/[name].js",
          assetFileNames: "assets/[name].[ext]",
        },
      },
      emptyOutDir: true,
    },
    publicDir: "public",
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src"),
        "@Assets": resolve(__dirname, "./public/assets"),
        "@Components": resolve(__dirname, "./src/Components"),
      },
    },
  };
}
