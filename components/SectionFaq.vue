<script setup lang="ts">
import { sectionFaq as content, sectionFaq } from '~/content'

const questions = sectionFaq.questions
</script>
<template>
  <VContainer id="history">
    <p class="text-h5 text-sm-h4 text-center mb-4 text-primary">
      {{ content.title }}
    </p>
    <p class="text-h6 text-sm-h5 text-center mb-4 text-primary">
      {{ content.header }}
    </p>
    <VRow class="mt-4">
      <VCol v-for="item in questions" :cols="6">
        <VExpansionPanels>
          <VExpansionPanel class="rounded-xl">
            <VExpansionPanelTitle
              color="primary-container"
              class="font-weight-bold text-center rounded-xl"
            >
              <div class="w-100 text-h6">
                {{ item.question }}
              </div>
            </VExpansionPanelTitle>
            <VExpansionPanelText class="text-body-1">
              <template v-for="a in item.answer">
                <p v-if="typeof a === 'string'">
                  {{ a }}
                </p>
                <p v-else-if="a.type === 'header'" class="font-weight-bold">
                  {{ a.value }}
                </p>
                <VTable v-else-if="a.type === 'list'">
                  <tbody>
                    <tr v-for="(m, idx) in a.value" :key="idx">
                      <td
                        class="px-0 pb-0 border-0 pt-2"
                        style="vertical-align: top"
                      >
                        <VBadge :content="idx + 1" inline color="tertiary" />
                      </td>
                      <td class="flex-fill border-0 text-body-1">{{ m }}</td>
                    </tr>
                  </tbody>
                </VTable>
              </template>
            </VExpansionPanelText>
          </VExpansionPanel>
        </VExpansionPanels>
      </VCol>
    </VRow>
  </VContainer>
</template>
