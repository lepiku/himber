<template>
  <VAppBar color="primary" class="px-2">
    <slot name="prepend">
      <NuxtImg src="/logo.png" width="100" height="39" />
    </slot>

    <VAppBarTitle>Harapan Indah Maju Bersama Rental</VAppBarTitle>
    <slot name="append">
      <VBtn to="/">Beranda</VBtn>
      <VBtn to="/tentang-kami">Tentang Kami</VBtn>
    </slot>
  </VAppBar>
</template>
