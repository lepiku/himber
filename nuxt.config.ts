import { md3 } from 'vuetify/blueprints'

import { cars } from './data'
import materialTheme from './material-theme.json'

const lightTheme = materialTheme.schemes.light
const darkTheme = materialTheme.schemes.dark

const getColors = (scheme: typeof lightTheme) => ({
  primary: scheme.primary,
  'on-primary': scheme.onPrimary,
  'primary-container': scheme.primaryContainer,
  'on-primary-container': scheme.onPrimaryContainer,
  secondary: scheme.secondary,
  'on-secondary': scheme.onSecondary,
  tertiary: scheme.tertiary,
  'on-tertiary': scheme.onTertiary,
  success: scheme.primary,
  'on-success': scheme.onPrimary,
  error: scheme.error,
  'on-error': scheme.onError,
  background: scheme.surfaceContainer,
  'on-background': scheme.onBackground,
  surface: scheme.surface,
  'on-surface': scheme.onSurface,
  'surface-variant': scheme.surfaceVariant,
  'on-surface-variant': scheme.onSurfaceVariant,
  'surface-container': scheme.surfaceContainer,
  'on-surface-container': scheme.onSurface,
  'error-container': scheme.errorContainer,
  'on-error-container': scheme.onErrorContainer,
  'inverse-surface': scheme.inverseSurface,
  'on-inverse-surface': scheme.inverseOnSurface,
})

const carPhotos = cars.flatMap((c) => c.photos.map((p) => p.img))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'vuetify-nuxt-module',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Ephesis: true
        }
      }
    ],
    '@nuxt/image'
  ],
  ssr: true,
  routeRules: {
    '/': { prerender: true },
    '/tentang-kami': { prerender: true }
  },
  nitro: {
    prerender: {
      routes: [
        ...carPhotos.map((i) => '/_ipx/fit_contain&s_500x500' + i),
        ...carPhotos.map((i) => '/_ipx/fit_contain&s_1000x1000' + i),
        ...carPhotos.map((i) => '/_ipx/s_50x50' + i),
        ...carPhotos.map((i) => '/_ipx/s_100x100' + i)
      ]
    }
  },
  vuetify: {
    vuetifyOptions: {
      blueprint: md3,
      theme: {
        defaultTheme: 'light',
        themes: {
          light: {
            // colors: {
            //   primary: colors.indigo.darken1,
            //   'on-primary': '#fff',
            //   secondary: colors.orange.darken1,
            //   'on-secondary': '#fff'
            // }
            colors: getColors(lightTheme)
          },
          dark: { colors: getColors(darkTheme) }
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
  },

  compatibilityDate: '2024-11-27'
})
