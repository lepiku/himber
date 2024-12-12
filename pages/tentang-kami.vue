<script setup lang="ts">
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
  <SectionFaqSummary id="faq" />
</template>
