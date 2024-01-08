// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module"],
  routeRules: {
    "/": { prerender: true },
    "/tentang-kami": { prerender: true },
  },
});
