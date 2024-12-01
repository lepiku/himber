<script setup lang="ts">
import { type Car, cars } from '~/data'

const groupedCars = computed(() => {
  const result: Car[][] = []
  cars.forEach((c, i) => {
    if (i % 3 === 0) {
      result.push([c])
    } else {
      result[result.length - 1].push(c)
    }
  })
  return result
})
</script>
<template>
  <VCard color="primary-container">
    <VCardText>
      <VCarousel :continuous="false" :height="390" hide-delimiter-background>
        <VCarouselItem v-for="(group, idx) in groupedCars" :key="idx">
          <div class="d-flex justify-center">
            <CarCard v-for="(car, i) in group" :key="i" :car="car" />
          </div>
        </VCarouselItem>
      </VCarousel>
    </VCardText>
  </VCard>
</template>
