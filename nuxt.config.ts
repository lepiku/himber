import { md3 } from 'vuetify/blueprints'

import { website } from './content'
import { getThemeColors, lightTheme } from './theme'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo',
  ],

  ssr: true,
  devtools: { enabled: true },
  devServer: { port: 8000 },

  app: {
    head: {
      titleTemplate: '%s %separator %websiteName',
      templateParams: {
        separator: '-',
        websiteName: website.name,
      },
    },
  },
  seo: {
    meta: {
      ogLocale: 'id_ID',
    },
  },
  linkChecker: {
    skipInspections: ['no-uppercase-chars'],
  },

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
          // dark: { colors: getThemeColors(darkTheme) },
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
