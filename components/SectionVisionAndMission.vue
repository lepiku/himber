<script setup lang="ts">
import { aboutUs as content } from '~/content'
</script>

<template>
  <VContainer>
    <p class="text-h5 text-sm-h4 text-center text-primary">
      Visi dan Misi Kami
    </p>
    <VRow class="mt-4 mb-4">
      <VCol :cols="12" :sm="6">
        <VExpansionPanels>
          <VExpansionPanel class="rounded-xl">
            <VExpansionPanelTitle
              color="primary-container"
              class="font-weight-bold text-center rounded-xl"
            >
              <div class="w-100 text-h6">
                {{ content.visionTitle }}
              </div>
            </VExpansionPanelTitle>
            <VExpansionPanelText class="text-body-1">
              {{ content.vision }}
            </VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
      </VCol>
      <VCol :cols="12" :sm="6">
        <VExpansionPanels>
          <VExpansionPanel class="rounded-xl">
            <VExpansionPanelTitle
              color="primary-container"
              class="font-weight-bold text-center rounded-xl"
            >
              <div class="w-100 text-h6">
                {{ content.missionTitle }}
              </div>
            </VExpansionPanelTitle>
            <VExpansionPanelText>
              <VTable>
                <tbody>
                  <tr v-for="(m, idx) in content.missions" :key="idx">
                    <td class="pa-0 border-0 pt-2" style="vertical-align: top">
                      <VBadge :content="idx + 1" inline color="tertiary" />
                    </td>
                    <td class="flex-fill border-0 text-body-1">{{ m }}</td>
                  </tr>
                </tbody>
              </VTable>
            </VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
      </VCol>
    </VRow>
  </VContainer>
</template>
