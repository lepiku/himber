<script setup lang="ts">
import { sectionFaq as content } from '~/content'
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
      <VCol v-for="item in content.questions" :cols="12" :md="6">
        <VExpansionPanels>
          <FaqPanel v-bind="item" />
        </VExpansionPanels>
      </VCol>
    </VRow>
  </VContainer>
</template>
