<script setup lang="ts">
const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img('/images/landing-cover.jpg')
  return { backgroundImage: `url('${imgUrl}')` }
})

const bb = themeColors.palettes.primary[5]
</script>

<template>
  <div class="bg-inverse-surface">
    <div class="landing-cover" :style="backgroundStyles">
      <VContainer class="py-8">
        <div class="text-wrapper">
          <p class="text-h3">Sewa Doang?</p>
          <p class="text-h1">Gampang!</p>
          <p class="my-6">
            Sewa mobil kami dengan harga terjangkau, armada lengkap, dan layanan
            profesional. Cocok untuk perjalanan bisnis, liburan, atau kebutuhan
            harian.
          </p>
          <VBtn color="primary-container" class="mt-2">Pelajari lebih lanjut</VBtn>
        </div>
      </VContainer>
    </div>
  </div>
</template>

<style lang="sass">
.landing-cover
  background-size: cover
  background-position: center

  .v-container
    background-image: linear-gradient(to right, v-bind(bb),transparent)

  .v-container .text-wrapper
    max-width: 400px
</style>
