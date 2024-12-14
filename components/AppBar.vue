<script setup lang="ts">
import { messageTemplate, website } from '~/content'

const navItems = [
  { text: 'Beranda', to: '/', icon: 'mdi-home' },
  { text: 'Armada Kami', to: '/old', icon: 'mdi-car' },
  { text: 'Tentang Kami', to: '/tentang-kami', icon: 'mdi-information' },
  // { text: 'Kontak', to: '/kontak', icon: 'mdi-phone' }
]

const drawer = ref(false)
</script>

<template>
  <VAppBar color="primary-container">
    <template #prepend>
      <VAppBarNavIcon class="d-sm-none" @click="drawer = !drawer" />
    </template>

    <div class="d-flex w-100">
      <NuxtImg src="/images/logo.png" width="100" height="38" class="ms-4" />
      <VAppBarTitle class="text-ephesis d-flex align-center ps-4">
        <RouterLink to="/" class="nostyle d-none d-md-block">
          {{ website.name }}
        </RouterLink>
      </VAppBarTitle>
      <div class="d-none d-sm-block">
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
      <VSpacer class="d-none d-sm-block" />
      <VBtn
        color="tertiary"
        variant="elevated"
        class="me-4 font-weight-bold"
        :href="whatsappLink(messageTemplate.navbar())"
        target="_blank"
      >
        Mulai Sewa
      </VBtn>
    </div>
  </VAppBar>

  <VNavigationDrawer
    v-model="drawer"
    location="top"
    temporary
    color="primary-container"
  >
    <VList class="d-sm-none">
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
