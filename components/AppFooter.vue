<script setup lang="ts">
import { website } from '~/content'

const contact = website.contact
const contactLinks = [
  {
    label: contact.phoneText,
    icon: 'mdi-phone',
    href: `tel:${contact.phone}`,
  },
  {
    label: contact.email,
    icon: 'mdi-email',
    href: `mailto:${contact.email}`,
  },
]

const servicesLinks = [
  { label: 'Beranda', to: '/' },
  { label: 'Armada Kami', to: '/' },
  { label: 'Tentang Kami', to: '/tentang-kami' },
  { label: 'FAQ', to: '/' },
  { label: 'Pemesanan', to: '/' },
]
</script>

<template>
  <div class="bg-primary">
    <VContainer class="py-8">
      <VRow>
        <!-- Description -->
        <VCol :cols="12" :md="3" class="text-center">
          <NuxtImg src="/images/logo.png" width="100" class="mx-auto mt-1" />
          <p class="text-h4 text-ephesis">{{ website.name }}</p>
          <p class="text-body-2 text-medium-emphasis">
            {{ website.description }}
          </p>
          <div class="d-flex justify-center">
            <VBtn
              v-for="(link, linkIdx) in website.socialMediaLinks"
              :key="linkIdx"
              :icon="link.icon"
              :href="link.href"
              :title="link.title"
              target="_blank"
              variant="flat"
            />
          </div>
        </VCol>

        <!-- Contacts and Services -->
        <VCol :cols="12" :md="4">
          <p class="text-h5">{{ website.contactUs }}</p>
          <div
            class="text-body-2 text-medium-emphasis d-flex flex-column align-start"
          >
            <VBtn
              v-for="link in contactLinks"
              :href="link.href"
              :prepend-icon="link.icon"
              color="primary"
              variant="flat"
              density="comfortable"
              class="text-none text-spacing-normal ms-n4"
            >
              {{ link.label }}
            </VBtn>
            <p class="mt-4">{{ contact.address }}</p>
          </div>

          <p class="text-h5 mt-6">{{ website.services }}</p>
          <div
            class="text-body-2 text-medium-emphasis d-flex flex-column align-start"
          >
            <VBtn
              v-for="l in servicesLinks"
              :to="l.to"
              :active="false"
              color="primary"
              variant="flat"
              density="comfortable"
              class="text-none text-spacing-normal ms-n4"
            >
              {{ l.label }}
            </VBtn>
          </div>
        </VCol>

        <!-- Location -->
        <VCol :cols="12" :md="5">
          <p class="text-h5">{{ website.location }}</p>
          TODO
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>

<style scoped lang="sass">
.text-medium-emphasis
  color: inherit !important
  opacity: 0.6
</style>
