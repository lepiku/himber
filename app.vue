<template>
  <VApp class="bg-surface">
    <AppBar />
    <NuxtPage />
    <AppFooter />
  </VApp>
</template>

<style>
body {
  font-family: 'Roboto', sans-serif;
}

.v-container {
  max-width: 1200px !important;
}
p {
  margin: 6px 0;
}

.text-ephesis {
  font-family: 'Ephesis';
  font-weight: 400;
  font-style: normal;
}

a.nostyle:link {
  text-decoration: inherit;
  color: inherit;
}

a.nostyle:visited {
  text-decoration: inherit;
  color: inherit;
}
</style>
