<script setup lang="ts">
import { website } from '~/data'

const navItems = [
  {
    text: 'Beranda',
    to: '/',
    icon: 'mdi-home'
  },
  {
    text: 'Tentang Kami',
    to: '/tentang-kami',
    icon: 'mdi-information'
  }
]

const drawer = ref(false)
</script>

<template>
  <VAppBar color="primary">
    <template v-slot:prepend>
      <NuxtImg src="/images/logo.png" width="100" height="39" class="ml-4" />
    </template>

    <VAppBarTitle class="text-ephesis">{{ website.name }}</VAppBarTitle>
    <template v-slot:append>
      <div class="app-bar-desktop mr-4">
        <VBtn
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          :prepend-icon="item.icon"
          class="text-none"
          style="letter-spacing: unset"
        >
          {{ item.text }}
        </VBtn>
      </div>
      <VAppBarNavIcon
        @click.stop="drawer = !drawer"
        class="app-bar-nav-btn ml-auto"
      />
    </template>
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

@media (min-width: 600px) {
  .app-bar-nav-btn {
    display: none;
  }

  .v-toolbar-title,
  .app-bar-desktop {
    display: unset;
  }
}
</style>
