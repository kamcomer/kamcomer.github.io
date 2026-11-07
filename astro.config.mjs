import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  site: "https://kamcomer.github.io",
  base: "/",
  integrations: [sitemap({ filter: (page) => !page.includes("/industrial") })],
  vite: {
    plugins: [tailwindcss()],
  },
})
