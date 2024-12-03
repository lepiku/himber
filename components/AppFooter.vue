<script setup lang="ts">
import { website } from '~/content'

const p = website.contact.phone
const phoneFormat = p.slice(0, 4) + '-' + p.slice(4, 8) + '-' + p.slice(8)
</script>

<template>
  <div id="kontak" class="bg-primary">
    <VContainer class="pt-6 pb-16">
      <h2>Hubungi Kami</h2>
      <VRow>
        <VCol cols="12" md="6">
          <div class="d-flex flex-column align-start">
            <p class="my-2 text-ephesis">{{ website.name }}</p>
            <VBtn
              color="primary"
              variant="flat"
              prepend-icon="mdi-phone"
              :href="'tel:' + website.contact.phone"
              class="text-none"
            >
              {{ phoneFormat }} (Herni)
            </VBtn>
            <VBtn
              color="primary"
              variant="flat"
              prepend-icon="mdi-email"
              :href="'mailto:' + website.contact.email"
              class="text-none"
            >
              {{ website.contact.email }}
            </VBtn>
          </div>
        </VCol>
        <VCol cols="12" md="6">
          <p class="my-2">Alamat:</p>
          <p class="mt-2 mb-4">
            {{ website.contact.address }}
          </p>
          <VBtn
            v-if="$route.path === '/'"
            to="/tentang-kami"
            variant="flat"
            color="primary-container"
            prepend-icon="mdi-information"
          >
            Tentang Kami
          </VBtn>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>

<style scoped>
#kontak .v-btn {
  letter-spacing: unset;
}
.text-ephesis {
  font-size: 24pt;
}
</style>
