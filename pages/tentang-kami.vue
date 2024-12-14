<script setup lang="ts">
import { aboutUs as content, messageTemplate } from '~/content'

definePageMeta({
  name: 'about-us',
})
</script>

<template>
  <VContainer class="pb-0">
    <p class="text-h4 text-sm-h3 text-center">Tentang Kami</p>
  </VContainer>

  <SectionVisionAndMission />
  <SectionHistory />
  <SectionFaq id="faq" />

  <VContainer class="text-center py-16">
    <p class="text-h3 text-primary">{{ content.moreQuestions }}</p>
    <VBtn
      color="tertiary"
      :text="content.contactUs"
      class="font-weight-bold mt-4"
      size="large"
      :href="whatsappLink(messageTemplate.contactUs())"
      target="_blank"
    />
  </VContainer>
</template>
