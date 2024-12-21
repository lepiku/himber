<script setup lang="ts">
import { cars } from '~/content'
</script>

<template>
  <div class="bg-primary-container">
    <VContainer class="pt-6 pb-12">
      <h2 class="text-center mb-2">Unit Mobil Kami</h2>
      <div class="d-flex flex-wrap justify-center">
        <CarCard v-for="(car, idx) in cars" :key="idx" :car="car" />
      </div>
    </VContainer>
  </div>
</template>
