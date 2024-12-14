<template>
  <VApp>
    <AppBar />
    <VMain class="pt-16">
      <NuxtPage />
    </VMain>
    <AppFooter />
  </VApp>
</template>

<style lang="sass">
body
  font-family: 'Roboto', sans-serif

.v-container
  max-width: 1200px !important

p
  margin: 4px 0

.text-spacing-normal,
.text-body-1
  letter-spacing: normal !important

.text-h3,
.text-h4,
.text-h5
  font-weight: bold

.text-ephesis
  font-family: 'Ephesis'
  font-weight: 400
  font-style: normal


a.nostyle:link
  text-decoration: inherit
  color: inherit


a.nostyle:visited
  text-decoration: inherit
  color: inherit
</style>
