import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import { defineConfig } from "unocss";

export default defineConfig({
  theme: {
    colors: {
      fontColor: "#fff",
    },
  },
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});
