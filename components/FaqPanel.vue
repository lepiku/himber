<script setup lang="ts">
import type { Faq } from '~/content'

defineProps<Faq & { summary?: boolean }>()
</script>

<template>
  <VExpansionPanel
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
        <VTable v-else-if="a.type === 'list'">
          <tbody>
            <tr v-for="(m, idx) in a.value" :key="idx">
              <td class="px-0 pb-0 border-0 pt-2" style="vertical-align: top">
                <VBadge :content="idx + 1" inline color="tertiary" />
              </td>
              <td class="flex-fill border-0 text-body-1">{{ m }}</td>
            </tr>
          </tbody>
        </VTable>
      </template>
    </VExpansionPanelText>
  </VExpansionPanel>
</template>
