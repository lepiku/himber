<script setup lang="ts">
import { sectionFaq as content } from '~/content'

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img('/images/bg-faq.jpg')
  return { backgroundImage: `url('${imgUrl}')` }
})
const darkBg = appTheme.palettes.primary[5]
</script>

<template>
  <div id="faq" :style="backgroundStyles">
    <div class="faq-bg-overlay"></div>
    <VContainer class="d-flex align-center py-8 bg-primary">
      <VRow class="align-center">
        <VCol :cols="5">
          <div>
            <p class="text-h5 text-tertiary font-weight-bold">
              {{ content.title }}
            </p>
            <p class="text-h4 font-weight-bold mb-3 mt-2">
              {{ content.header }}
            </p>
            <p class="text-h6">{{ content.text }}</p>
            <VBtn
              color="primary-container"
              append-icon="mdi mdi-chevron-right"
              class="mt-2"
            >
              {{ content.buttonMore }}
            </VBtn>
          </div>
        </VCol>
        <VCol :cols="7">
          <VExpansionPanels :model-value="[0]">
            <VExpansionPanel
              v-for="(q, qIdx) in content.questions"
              :key="qIdx"
              :class="{ 'mt-4': qIdx > 0 }"
            >
              <VExpansionPanelTitle color="secondary" class="font-weight-bold">
                {{ q.question }}
              </VExpansionPanelTitle>
              <VExpansionPanelText>
                {{ q.answer }}
              </VExpansionPanelText>
            </VExpansionPanel>
          </VExpansionPanels>
        </VCol>
      </VRow>
    </VContainer>
  </div>
</template>

<style lang="sass" scoped>
#faq
  position: relative
  background-size: cover
  background-position: center

  > .faq-bg-overlay
    position: absolute
    width: 100%
    height: 100%
    background-color: v-bind(darkBg)
    opacity: .7

  > .v-container
    position: relative
    min-height: 400px
    background: none !important
</style>
