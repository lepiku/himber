<template>
  <VAppBar color="blue">
    <VAppBarTitle>Harapan Indah Maju Bersama Rental</VAppBarTitle>
    <slot name="append">
      <VBtn to="/">Beranda</VBtn>
      <VBtn to="/tentang-kami">Tentang Kami</VBtn>
    </slot>
  </VAppBar>
</template>
