<template>
  <VContainer class="pb-6">
    <p class="text-h5 text-tertiary font-weight-bold">Armada Kami</p>
    <div class="d-flex mb-3 align-center">
      <p class="text-h4 font-weight-bold text-primary">Mobil Unggulan Kami</p>
      <VSpacer />
      <VBtn append-icon="mdi-chevron-right" to="/armada-kami">
        <span class="d-sm-none">Lainnya</span>
        <span class="d-none d-sm-inline">Lihat Lainnya</span>
      </VBtn>
    </div>
    <CarListHorizontal class="mb-6" />
    <RentFormCard />
  </VContainer>
</template>
