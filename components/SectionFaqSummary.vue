<script setup lang="ts">
import { sectionFaq as content } from '~/content'

const img = useImage()

const backgroundStyles = computed(() => {
  const imgUrl = img('/images/bg-faq.jpg')
  return { backgroundImage: `url('${imgUrl}')` }
})

const questions = [
  content.questions[0],
  content.questions[2],
  content.questions[4],
]
</script>

<template>
  <div id="faq" :style="backgroundStyles">
    <div class="faq-bg-overlay bg-primary-5"></div>
    <VContainer class="d-flex align-center py-8 bg-primary">
      <VRow class="align-center">
        <VCol :cols="12" :md="5">
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
              append-icon="mdi-chevron-right"
              class="mt-2"
              :to="{ name: 'about-us', hash: '#faq' }"
            >
              {{ content.buttonMore }}
            </VBtn>
          </div>
        </VCol>
        <VCol :cols="12" :md="7">
          <VExpansionPanels :model-value="[0]">
            <FaqPanel
              v-for="(faq, faqIdx) in questions"
              :key="faqIdx"
              v-bind="faq"
              summary
              :class="{ 'mt-4': faqIdx > 0 }"
            />
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
    opacity: .7

  > .v-container
    position: relative
    min-height: 400px
    background: none !important
</style>
