<script setup lang="ts">
import { type Car } from '~/data'

defineProps<{ car: Car }>()

const dialog = ref(false)
</script>
<template>
  <div class="car-card ma-3 border-shadow">
    <VDialog width="auto" v-model="dialog">
      <template #activator="{ props }">
        <div
          v-bind="props"
          :class="[
            'card-content',
            'd-flex',
            'flex-column',
            'align-center',
            'rounded-lg',
            'pa-4',
            'pb-6'
          ]"
          v-ripple="{ class: 'text-primary-container' }"
        >
          <NuxtImg
            :src="car.img"
            class="card-img"
            quality="20"
            sizes="80vw xs:300"
          />
          <h4 class="text-center text-black">{{ car.name }}</h4>
          <p>Rp {{ car.price.toLocaleString('id') }} / hari</p>
        </div>
      </template>

      <CarDetailCard :car="car" @close="dialog = false" />
    </VDialog>

    <div class="card-buttons px-4 d-flex justify-center rounded-pill">
      <VBtn
        color="tertiary"
        class="font-weight-bold rounded-pill"
        :href="generateWhatsappLink(car.name)"
      >
        Sewa Sekarang
      </VBtn>
      <VBtn
        @click="dialog = true"
        color="primary"
        class="ms-2"
        prepend-icon="mdi mdi-eye"
      >
        Detail
      </VBtn>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.car-card
  max-width: 332px

.card-content
  background-color: white
  cursor: pointer

.card-buttons
  margin-top: -18px
</style>
