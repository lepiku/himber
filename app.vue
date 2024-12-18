<script setup lang="ts">
import dayjs from 'dayjs'
import dayjsId from 'dayjs/locale/id'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { setLocale as yupSetLocale } from 'yup'
import { id as yupId } from 'yup-locales'

yupSetLocale(yupId)
dayjs.locale(dayjsId)
dayjs.extend(localizedFormat)
</script>

<template>
  <VApp>
    <NavBar />
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
