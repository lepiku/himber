import colors from 'vuetify/util/colors'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['vuetify-nuxt-module', '@nuxtjs/google-fonts', '@nuxt/image'],
  routeRules: {
    '/': { prerender: true },
    '/tentang-kami': { prerender: true }
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
