<script setup lang="ts">
import type { VBtn } from 'vuetify/components'
import { messageTemplate, website } from '~/content'

const navItems: VBtn['$props'][] = [
  { text: 'Beranda', to: '/', prependIcon: 'mdi-home' },
  { text: 'Armada Kami', to: '/armada-kami', prependIcon: 'mdi-car' },
  { text: 'Tentang Kami', to: '/tentang-kami', prependIcon: 'mdi-information' },
  // { text: 'Kontak', to: '/kontak', icon: 'mdi-phone' }
]

const drawer = ref(false)
</script>

<template>
  <VAppBar color="primary-container">
    <template #prepend>
      <VAppBarNavIcon
        class="text-primary d-csm-none"
        @click="drawer = !drawer"
      />
    </template>

    <div class="d-flex w-100 align-center">
      <VBtn
        to="/"
        class="pa-0 ms-3"
        variant="text"
        color="primary"
        :active="false"
      >
        <NuxtImg
          src="/images/logo-primary.png"
          width="100"
          height="38"
          alt="Logo"
        />
      </VBtn>
      <VAppBarTitle class="text-ephesis text-primary d-flex align-center ps-4">
        <NuxtLink to="/" class="nostyle d-none d-md-block">
          {{ website.name }}
        </NuxtLink>
      </VAppBarTitle>
      <div class="d-none d-csm-block">
        <VBtn
          v-for="(item, i) in navItems"
          :key="i"
          v-bind="item"
          class="text-none"
          style="letter-spacing: unset"
          color="primary"
        />
      </div>
      <VSpacer class="d-none d-csm-block" />
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
    <VList class="d-csm-none">
      <VListItem
        v-for="(item, i) in navItems"
        :key="i"
        color="primary"
        :to="item.to"
      >
        <template v-slot:prepend>
          <VIcon :icon="item.prependIcon" />
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

@media (min-width: 670px) {
  .d-csm-none {
    display: none !important;
  }
  .d-csm-block {
    display: block !important;
  }
}
</style>
