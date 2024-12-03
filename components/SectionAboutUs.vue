<script setup lang="ts">
import { sectionAboutUs as content } from '~/content'
</script>
<template>
  <div class="bg-primary-container">
    <VContainer class="pb-6 d-flex justify-space-between">
      <div style="max-width: 400px">
        <p class="text-h5 text-tertiary font-weight-bold">
          {{ content.title }}
        </p>
        <p class="text-h4 font-weight-bold text-primary mb-3 mt-2">
          {{ content.header }}
        </p>
        <p class="text-h6">{{ content.text }}</p>
        <div>
          <div
            v-for="(i, idx) in content.items"
            :key="idx"
            class="d-flex align-center"
          >
            <VIcon icon="mdi mdi-check-circle" color="tertiary" />
            <p class="text-h6 ms-2">{{ i }}</p>
          </div>
        </div>
        <VBtn append-icon="mdi mdi-chevron-right" class="mt-3">
          Pelajari Lebih Lanjut
        </VBtn>
      </div>
      <NuxtImg
        src="/images/car-unit/jeep-rubicon.png"
        quality="40"
        width="600"
        class="mb-n6"
      />
    </VContainer>
  </div>
</template>
