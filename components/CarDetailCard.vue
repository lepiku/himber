<script setup lang="ts">
import type { Car } from '~/data'

defineProps<{ car: Car; onClose: () => void }>()

const selectedPhoto = ref(0)
</script>

<template>
  <VCard width="548">
    <div class="card-header d-flex align-center bg-white px-6 py-2">
      <h3>{{ car.name }}</h3>
      <VSpacer />
      <VBtn @click="onClose" icon="mdi-close" variant="text" color="primary" />
    </div>
    <VCardText class="pt-0">
      <div>
        <NuxtImg
          :src="car.photos[selectedPhoto].img"
          fit="contain"
          width="500"
          height="500"
          class="rounded-lg"
        />
      </div>
      <div class="d-flex overflow-x-auto mx-n1 mb-4">
        <NuxtImg
          v-for="(photo, i) in car.photos"
          :key="i"
          :src="photo.img"
          width="50"
          height="50"
          class="img-preview mx-1 my-2 rounded"
          :class="{ selected: selectedPhoto === i }"
          @click="selectedPhoto = i"
        />
      </div>
      <VDivider />
      <VContainer>
        <VRow v-for="(row, i) in car.desc" :key="i" class="my-2">
          <VCol cols="12" sm="4" class="px-0 px-sm-1 py-0 text-grey-darken-2">
            {{ row[0] }}
          </VCol>
          <VCol cols="12" sm="8" class="px-0 px-sm-1 py-0 font-weight-bold">
            {{ row[1] }}
          </VCol>
        </VRow>
      </VContainer>
    </VCardText>
    <VCardActions>
      <VBtn
        color="secondary"
        variant="elevated"
        class="font-weight-bold"
        :href="generateWhatsappLink(car.name)"
      >
        Sewa Sekarang
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<style scoped>
.v-card {
  position: relative;
}
.v-card .card-header {
  position: sticky;
  top: 0;
}
.img-preview.selected {
  outline: 4px solid rgb(var(--v-theme-secondary));
}
.img-preview:not(.selected) {
  cursor: pointer;
}
</style>
