<script setup lang="ts">
import { website } from '~/data'

const navItems = [
  { text: 'Beranda', to: '/', icon: 'mdi-home' },
  { text: 'Armada Kami', to: '/old', icon: 'mdi-car' },
  { text: 'Tentang Kami', to: '/tentang-kami', icon: 'mdi-information' },
  // { text: 'Kontak', to: '/kontak', icon: 'mdi-phone' }
]

const drawer = ref(false)
</script>

<template>
  <VAppBar color="surface-variant">
    <div class="d-flex w-100">
      <NuxtImg src="/images/logo.png" width="100" height="38" class="ms-4" />
      <VAppBarTitle class="text-ephesis d-flex align-center ps-4">
        <RouterLink to="/" class="nostyle">
          {{ website.name }}
        </RouterLink>
      </VAppBarTitle>
      <div class="">
        <VBtn
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          :prepend-icon="item.icon"
          class="text-none"
          style="letter-spacing: unset"
          color="primary"
        >
          {{ item.text }}
        </VBtn>
      </div>
      <VSpacer />
      <VBtn color="tertiary" variant="elevated" class="me-4 font-weight-bold">
        Mulai Sewa
      </VBtn>
    </div>
  </VAppBar>

  <VNavigationDrawer
    v-model="drawer"
    location="top"
    temporary
    style="max-height: 160px"
  >
    <VList>
      <VListItem>
        <VListItemTitle>{{ website.name }}</VListItemTitle>
      </VListItem>
      <VListItem
        v-for="(item, i) in navItems"
        :key="i"
        color="primary"
        :to="item.to"
      >
        <template v-slot:prepend>
          <VIcon :icon="item.icon" />
        </template>
        <VListItemTitle v-text="item.text" />
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>

<style scoped>
.v-toolbar-title,
.app-bar-desktop {
  display: none;
}

.v-app-bar-title {
  font-size: 24pt;
}

@media (min-width: 700px) {
  .app-bar-nav-btn {
    display: none;
  }

  .v-toolbar-title,
  .app-bar-desktop {
    display: unset;
  }
}
</style>
