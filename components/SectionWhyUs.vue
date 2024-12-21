<script setup lang="ts">
import { sectionAboutUs as content } from '~/content'
</script>
<template>
  <div class="bg-primary-container">
    <VContainer class="pb-6 overflow-hidden position-relative">
      <div style="max-width: 400px">
        <p class="text-h6 text-sm-h5 text-tertiary font-weight-bold">
          {{ content.title }}
        </p>
        <p class="text-h5 text-sm-h4 font-weight-bold text-primary mb-3">
          {{ content.header }}
        </p>
        <p>{{ content.text }}</p>
        <div class="my-2">
          <div
            v-for="(i, idx) in content.items"
            :key="idx"
            class="d-flex align-center"
          >
            <VIcon icon="mdi-check-circle" color="tertiary" />
            <p class="ms-2">{{ i }}</p>
          </div>
        </div>
        <VBtn
          append-icon="mdi-chevron-right"
          class="mt-3"
          :to="{ name: 'about-us' }"
        >
          Pelajari Lebih Lanjut
        </VBtn>
      </div>
      <div
        class="position-absolute bottom-0 right-0 d-none d-sm-block mb-6 mb-md-0"
      >
        <NuxtImg
          src="/images/car-unit/jeep-rubicon.png"
          quality="40"
          sizes="60vw md:600"
          class="mb-n6"
        />
      </div>
    </VContainer>
  </div>
</template>
