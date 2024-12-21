<script setup lang="ts">
import { sponsors } from '~/content'

const size = '176px'
</script>

<template>
  <VContainer>
    <p class="text-h5 text-sm-h4 text-center text-primary mb-3">Sponsor Kami</p>
    <div class="d-flex flex-wrap justify-center">
      <div v-for="sponsor in sponsors" class="pa-3">
        <div
          :class="[
            'd-flex',
            'justify-center',
            'align-center',
            'border-md',
            'border-primary',
            'border-opacity-100',
            'rounded-circle',
          ]"
          :style="{ height: size, width: size }"
        >
          <NuxtImg :src="sponsor.imgSrc" v-bind="sponsor.imgAttr" />
        </div>
      </div>
    </div>
  </VContainer>
</template>
