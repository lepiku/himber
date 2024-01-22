import colors from 'vuetify/util/colors'

import { cars } from './data'

const carPhotos = cars.flatMap((c) => c.photos.map((p) => p.img))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@nuxtjs/google-fonts', '@nuxt/image'],
  ssr: true,
  routeRules: {
    '/': { prerender: true },
    '/tentang-kami': { prerender: true }
  },
  nitro: {
    prerender: {
      routes: [
        ...carPhotos.map((i) => '/_ipx/fit_contain&s_500x500' + i),
        ...carPhotos.map((i) => '/_ipx/s_50x50' + i)
      ]
    }
  },
  vuetify: {
    vuetifyOptions: {
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            colors: {
              primary: colors.indigo.darken1,
              'on-primary': '#fff',
              secondary: colors.orange.darken1,
              'on-secondary': '#fff'
            }
          }
        }
      }
    }
  },
  googleFonts: {
    families: {
      Roboto: [400, 700]
    }
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
      xxl: 2560
    }
  }
})
