<script setup lang="ts">
type Car = { name: string; img: string }
const cars: Car[] = [
  {
    name: 'Mitsubishi Triton',
    img: '/cars/mitsubishi-triton.png'
  },
  {
    name: 'Mitsubishi Triton',
    img: '/cars/mitsubishi-triton.png'
  },
  {
    name: 'Mitsubishi Triton',
    img: '/cars/mitsubishi-triton.png'
  },
  {
    name: 'Mitsubishi Triton',
    img: '/cars/mitsubishi-triton.png'
  },
  {
    name: 'Mitsubishi Triton',
    img: '/cars/mitsubishi-triton.png'
  }
]
</script>

<template>
  <VMain>
    <div id="judul">
      <VContainer class="d-flex justify-space-between py-6">
        <div class="d-flex flex-column justify-center">
          <h1>Sewa Mobil</h1>
          <h1>Dengan Mudah!</h1>
        </div>
        <NuxtImg src="/cars-landing.jpg" sizes="50vw md:400px lg:600px" />
      </VContainer>
    </div>

    <div id="unit-mobil" class="bg-indigo-lighten-4">
      <VContainer class="py-6">
        <h2 class="text-center mb-2">Unit Mobil Kami</h2>
        <div class="d-flex flex-wrap justify-center">
          <div
            v-for="(car, idx) in cars"
            :key="idx"
            class="car-card ma-3 border-shadow"
            style="max-width: 360px"
          >
            <div
              class="d-flex flex-column align-center bg-white rounded-xl pa-4 pb-8"
            >
              <NuxtImg
                :src="car.img"
                class="car-card-img"
                sizes="80vw xs:300"
              />
              <h4 class="text-center">{{ car.name }}</h4>
            </div>
            <div class="card-buttons mt-n4 px-4 d-flex justify-center">
              <VBtn color="secondary" class="font-weight-bold"
                >Sewa Sekarang</VBtn
              >
              <!-- <VBtn color="secondary" variant="outlined">
                <VIcon icon="mdi-dots-horizontal" />
              </VBtn> -->
            </div>
          </div>
        </div>
      </VContainer>
    </div>

    <div id="visi-misi">
      <VContainer class="d-flex py-16">
        <VRow justify="center">
          <VCol
            cols="10"
            md="5"
            class="bg-indigo-lighten-5 rounded-xl pa-4 mx-8 my-4 text-center d-flex flex-column justify-center"
          >
            <h2 class="text-secondary">Visi</h2>
            <p>
              Menjadi perusahaan transportasi, nasional handal & terpercaya,
              dengan performa Cekatan, Dinamis, Penuh motivasi
            </p>
          </VCol>
          <VCol
            cols="10"
            md="5"
            class="bg-indigo-lighten-5 rounded-xl pa-4 mx-8 my-4 text-center d-flex flex-column justify-center"
          >
            <h2 class="text-secondary">Misi</h2>
            <p>
              Misi Unit kendaraan terbaik dengan perawatan terjamin dan
              pelayanan prima pada konsumen
            </p>
            <p>
              Perusahaan sebagai keluarga kedua dan dapat dibanggakan oleh
              Manajemen dan seluruh karyawan
            </p>
            <p>
              Kerjasama solid dan ETOS KERJA TINGGI sebagai KEHORMATAN HIDUP
            </p>
          </VCol>
        </VRow>
      </VContainer>
    </div>
  </VMain>

  <div id="kontak" class="bg-primary">
    <VContainer class="pt-6 pb-12">
      <h2>Hubungi Kami</h2>
      <VRow>
        <VCol cols="12" md="6">
          <div class="d-flex flex-column align-start">
            <p class="my-2">HARAPAN INDAH MAJU BERSAMA RENTAL</p>
            <VBtn
              color="primary"
              variant="flat"
              prepend-icon="mdi-phone"
              href="tel:082112593113"
              class="text-none"
            >
              0821-1259-3113 (Herni)
            </VBtn>
            <VBtn
              color="primary"
              variant="flat"
              prepend-icon="mdi-email"
              href="mailto:herni.sasadara@gmail.com"
              class="text-none"
            >
              herni.sasadara@gmail.com
            </VBtn>
          </div>
        </VCol>
        <VCol cols="12" md="6">
          <p class="my-2">Alamat:</p>
          <p class="mt-2 mb-4">
            Ruko ARALIA Blok HY 36 No. 37 Harapan Indah 2, Pusaka Rakyat, Taruma
            Jaya, Kab. Bekasi, Jawa Barat
          </p>
          <VBtn
            to="/tentang-kami"
            color="indigo-darken-2"
            variant="flat"
            prepend-icon="mdi-information"
          >
            Tentang Kami
          </VBtn>
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

#unit-mobil .card-buttons .v-btn {
  border-radius: 18px;
  background-color: white;
}

#visi-misi p {
  margin: 6px 0;
}

#kontak .v-btn {
  letter-spacing: unset;
}
</style>
