<script setup lang="ts">
import { type Car, cars } from '~/content'

const { width } = useWindowSize()

const groupedCars = computed(() => {
  const perWindow = Math.min(
    Math.max(Math.floor(((width.value ?? 1200) - 128) / 336), 1),
    3,
  )
  const result: Car[][] = []
  cars.forEach((c, i) => {
    if (i % perWindow === 0) {
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
