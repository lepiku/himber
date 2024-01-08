// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@nuxtjs/google-fonts'],
  routeRules: {
    '/': { prerender: true },
    '/tentang-kami': { prerender: true }
  },
  googleFonts: {
    families: {
      Roboto: [400, 700]
    }
  }
})
