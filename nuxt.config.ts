import { md3 } from 'vuetify/blueprints'

import { darkTheme, getThemeColors, lightTheme } from './theme'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@nuxtjs/google-fonts', '@nuxt/image'],
  ssr: true,
  routeRules: {
    '/': { prerender: true },
    '/old': { prerender: true },
    '/tentang-kami': { prerender: true },
  },
  vuetify: {
    vuetifyOptions: {
      blueprint: md3,
      theme: {
        themes: {
          light: { colors: getThemeColors(lightTheme) },
          dark: { colors: getThemeColors(darkTheme) },
        },
      },
      defaults: {
        VCard: {
          elevation: 0,
        },
      },
    },
  },
  googleFonts: {
    families: {
      Ephesis: true,
      Roboto: [400, 700],
    },
  },
  image: {
    screens: {
      // follow vuetify breakpoints
      // https://vuetifyjs.com/en/features/display-and-platform/#options
      xs: 320,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      xxl: 2560,
    },
  },

  compatibilityDate: '2024-11-27',
})
