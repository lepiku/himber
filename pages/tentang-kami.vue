<script setup lang="ts">
import { aboutUs } from '~/content'
</script>

<template>
  <div id="tentang-kami">
    <VContainer class="py-6">
      <h2 class="text-center text-secondary">Tentang Kami</h2>
      <p v-for="(text, i) in aboutUs" :key="i">{{ text }}</p>
    </VContainer>
  </div>
</template>
