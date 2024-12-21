<script setup lang="ts">
import { type Faq, website } from '~/content'

defineProps<Faq & { summary?: boolean }>()
</script>

<template>
  <VExpansionPanel
    class="faq-panel"
    style="
      border-top-left-radius: 24px !important;
      border-top-right-radius: 24px !important;
      border-bottom-left-radius: 24px !important;
      border-bottom-right-radius: 24px !important;
    "
  >
    <VExpansionPanelTitle
      :color="summary ? 'secondary' : 'primary-container'"
      class="font-weight-bold text-center rounded-xl"
    >
      <div class="w-100" :class="{ 'text-h6': !summary }">
        {{ question }}
      </div>
    </VExpansionPanelTitle>
    <VExpansionPanelText class="text-body-1">
      <template v-for="a in answer">
        <p v-if="typeof a === 'string'">
          {{ a }}
        </p>
        <p v-else-if="a.type === 'header'" class="font-weight-bold">
          {{ a.value }}
        </p>
        <table
          v-else-if="a.type === 'list'"
          :style="{
            borderCollapse: 'collapse',
          }"
        >
          <tbody>
            <tr v-for="(m, idx) in a.value" :key="idx">
              <th class="py-1 border-0" style="vertical-align: top">
                <VBadge :content="idx + 1" inline color="tertiary" />
              </th>
              <td
                class="pb-1 flex-fill border-0 text-body-1"
                style="padding-top: 6px"
              >
                {{ m }}
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else-if="a.type === 'location'">
          <p class="mb-3">{{ website.locationName }}</p>
          <div class="text-end">
            <VBtn
              text="Lihat Peta"
              prepend-icon="mdi-map"
              href="#lokasi"
              color="primary"
            />
          </div>
        </div>
      </template>
    </VExpansionPanelText>
  </VExpansionPanel>
</template>

<style lang="sass">
.faq-panel table .v-badge__wrapper
  margin: 0 8px 0 0
</style>
