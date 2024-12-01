import materialTheme from './material-theme.json'

export const getThemeColors = (scheme: typeof lightTheme) => ({
  primary: scheme.primary,
  'on-primary': scheme.onPrimary,
  secondary: scheme.secondary,
  'on-secondary': scheme.onSecondary,
  tertiary: scheme.tertiary,
  'on-tertiary': scheme.onTertiary,
  error: scheme.error,
  'on-error': scheme.onError,
  'primary-container': scheme.primaryContainer,
  'on-primary-container': scheme.onPrimaryContainer,
  'secondary-container': scheme.secondaryContainer,
  'on-secondary-container': scheme.onSecondaryContainer,
  'tertiary-container': scheme.tertiaryContainer,
  'on-tertiary-container': scheme.onTertiaryContainer,
  'error-container': scheme.errorContainer,
  'on-error-container': scheme.onErrorContainer,
  success: scheme.primary,
  'on-success': scheme.onPrimary,
  background: scheme.background,
  'on-background': scheme.onBackground,
  surface: scheme.surface,
  'on-surface': scheme.onSurface,
  'surface-dim': scheme.surfaceDim,
  'on-surface-dim': scheme.onSurface,
  'surface-bright': scheme.surfaceBright,
  'on-surface-bright': scheme.onSurface,
  'surface-variant': scheme.surfaceVariant,
  'on-surface-variant': scheme.onSurfaceVariant,
  'surface-container': scheme.surfaceContainer,
  'on-surface-container': scheme.onSurface,
  'inverse-surface': scheme.inverseSurface,
  'on-inverse-surface': scheme.inverseOnSurface,
})

export const appTheme = materialTheme
export const lightTheme = materialTheme.schemes.light
export const darkTheme = materialTheme.schemes.dark
