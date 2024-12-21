<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/yup'
import dayjs from 'dayjs'
import { useForm } from 'vee-validate'
import type { VTextField } from 'vuetify/components'
import * as yup from 'yup'
import { messageTemplate } from '~/content'

const { defineField, handleSubmit, errors, meta } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      name: yup.string().required().label('Nama'),
      location: yup.string().required().label('Lokasi'),
      date: yup.date().required().label('Tanggal'),
    }),
  ),
})

const [name] = defineField('name')
const [location] = defineField('location')
const [date] = defineField('date')

const textFields = computed<VTextField['$props'][]>(() => [
  {
    label: 'Nama',
    name: 'name',
    modelValue: name,
    errorMessages: errors.value.name,
  },
  {
    label: 'Lokasi Pick-up',
    name: 'location',
    modelValue: location,
    errorMessages: errors.value.location,
  },
  {
    label: 'Tanggal',
    name: 'date',
    type: 'date',
    modelValue: date,
    errorMessages: errors.value.date,
  },
])
const submit = handleSubmit((values) => {
  console.log(values)
  window.open(
    whatsappLink(
      messageTemplate.form(
        values.name,
        values.location,
        dayjs(values.date).format('dddd, LL'),
      ),
    ),
  )
})
</script>

<template>
  <VCard color="tertiary-container">
    <form @submit.prevent="submit">
      <VCardText class="pa-6">
        <VRow no-gutters>
          <VCol
            v-for="(field, idx) in textFields"
            :key="field.name"
            :cols="12"
            class="pb-4 pb-md-0 flex-md-1-0-0"
            :class="{}"
          >
            <VTextField
              v-bind="field"
              variant="solo-filled"
              color="tertiary"
              class="me-4"
              hide-details="auto"
            />
          </VCol>
          <VCol :cols="12" md="auto" class="text-center">
            <VBtn
              color="tertiary"
              size="x-large"
              prepend-icon="mdi-car-key"
              class="font-weight-bold"
              type="submit"
            >
              Pesan Sekarang
            </VBtn>
          </VCol>
        </VRow>
      </VCardText>
    </form>
  </VCard>
</template>
