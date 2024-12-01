<script setup lang="ts">
import type { VTextField } from 'vuetify/components'

const textFields: VTextField['$props'][] = [
  { label: 'Nama' },
  { label: 'Lokasi Pick-up' },
  { label: 'Tanggal' },
]
const fields: VTextField['$props'][] = textFields.map((c) => ({
  ...c,
  variant: 'solo-filled',
  class: 'me-4',
  hideDetails: true,
}))
</script>

<template>
  <VCard color="primary">
    <VCardText class="d-flex align-center pa-6">
      <VTextField v-for="f in fields" v-bind="f" />
      <VBtn color="tertiary" size="x-large" prepend-icon="mdi mdi-car-key">
        Pesan Sekarang
      </VBtn>
    </VCardText>
  </VCard>
</template>
