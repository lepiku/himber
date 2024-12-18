<script setup lang="ts">
const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img('/images/bg-cover.jpg')
  return { backgroundImage: `url('${imgUrl}')` }
})
</script>

<template>
  <div class="bg-primary d-flex">
    <div class="landing-cover-start bg-primary-5"></div>
    <div class="landing-cover flex-fill" :style="backgroundStyles">
      <VContainer class="py-8 ms-0">
        <div class="text-wrapper">
          <p class="text-h4 text-sm-h3">Sewa Doang?</p>
          <p class="text-h2 text-sm-h1">Gampang!</p>
          <p class="my-6">
            Sewa mobil kami dengan harga terjangkau, armada lengkap, dan layanan
            profesional. Cocok untuk perjalanan bisnis, liburan, atau kebutuhan
            harian.
          </p>
          <VBtn
            color="primary-container"
            append-icon="mdi-chevron-right"
            class="mt-2"
            to="/tentang-kami"
          >
            Pelajari lebih lanjut
          </VBtn>
        </div>
      </VContainer>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.landing-cover-start
  width: calc((100vw - 1200px)/2)

.landing-cover
  background-size: cover
  background-position: center

  .v-container
    background-image: linear-gradient(to right, rgb(var(--v-theme-primary-5)), transparent)

  .v-container .text-wrapper
    max-width: 450px
</style>
