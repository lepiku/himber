<script setup lang="ts">
import { cars } from '~/content'
</script>

<template>
  <div id="judul" class="bg-surface">
    <VContainer class="d-flex justify-space-between py-6">
      <div class="d-flex flex-column justify-center">
        <h1>Sewa Mobil</h1>
        <h1>Dengan Mudah!</h1>
      </div>
      <NuxtImg src="/images/cars-landing.jpg" sizes="50vw md:400px lg:600px" />
    </VContainer>
  </div>

  <div id="unit-mobil" class="bg-indigo-lighten-5">
    <VContainer class="py-6">
      <h2 class="text-center mb-2">Unit Mobil Kami</h2>
      <div class="d-flex flex-wrap justify-center">
        <CarCard v-for="(car, idx) in cars" :key="idx" :car="car" />
      </div>
    </VContainer>
  </div>

  <div id="visi-misi" class="bg-surface">
    <VContainer class="d-flex py-16">
      <VRow justify="center">
        <VCol
          cols="10"
          md="5"
          :class="[
            'bg-indigo-lighten-5',
            'rounded-xl',
            'pa-4',
            'mx-8',
            'my-4',
            'text-center',
            'd-flex',
            'flex-column',
            'justify-center',
          ]"
        >
          <h2 class="text-tertiary">Visi</h2>
          <p>
            Menjadi perusahaan transportasi, nasional handal & terpercaya,
            dengan performa Cekatan, Dinamis, Penuh motivasi
          </p>
        </VCol>
        <VCol
          cols="10"
          md="5"
          :class="[
            'bg-indigo-lighten-5',
            'rounded-xl',
            'pa-4',
            'mx-8',
            'my-4',
            'text-center',
            'd-flex',
            'flex-column',
            'justify-center',
          ]"
        >
          <h2 class="text-tertiary">Misi</h2>
          <p>
            Misi Unit kendaraan terbaik dengan perawatan terjamin dan pelayanan
            prima pada konsumen
          </p>
          <p>
            Perusahaan sebagai keluarga kedua dan dapat dibanggakan oleh
            Manajemen dan seluruh karyawan
          </p>
          <p>Kerjasama solid dan ETOS KERJA TINGGI sebagai KEHORMATAN HIDUP</p>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>

<style scoped>
@media (max-width: 600px) {
  #judul h1 {
    font-size: 5vw;
  }
}

#unit-mobil .car-card {
  max-width: 332px;
}
#unit-mobil .card-content {
  background-color: white;
  cursor: pointer;
}
#unit-mobil .card-buttons {
  margin-top: -18px;
}

#visi-misi p {
  margin: 6px 0;
}
</style>
