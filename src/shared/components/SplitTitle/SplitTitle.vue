<script setup lang="ts">
import { splitTitle } from '@/shared/helpers/splitTitle'
import Heading from '../Heading/Heading.vue'

type ColorType = 'primary' | 'secondary'

interface Props {
  title: string
  accentColor?: ColorType
}

const { title, accentColor = 'primary' } = defineProps<Props>()

const { firstPart, lastPart } = splitTitle(title)

const colorClass: Record<ColorType, string> = {
  primary: 'text-red-primary',
  secondary: 'text-secondary-color',
}
</script>

<template>
  <Heading as="h1" variant="title">
    {{ firstPart }} <span v-if="lastPart" :class="colorClass[accentColor]">{{ lastPart }}</span>
  </Heading>
</template>
