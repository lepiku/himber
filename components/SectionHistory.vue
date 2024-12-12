<script setup lang="ts">
import { historyTexts } from '~/content'
</script>

<template>
  <VContainer id="history">
    <p class="text-h5 text-sm-h4 text-center mb-4 text-primary">
      Sejarah Sewa Doang
    </p>
    <p v-for="(text, i) in historyTexts" :key="i" class="text-body-1 mb-4">
      {{ text }}
    </p>
  </VContainer>
</template>
