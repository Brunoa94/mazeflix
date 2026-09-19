<script setup lang="ts">
import Heading from './Heading.vue'
import { splitTitle } from '../helpers/splitTitle.ts'

type ColorType = 'primary' | 'secondary'

interface Props {
  title: string
  accentColor?: ColorType
}

const { title, accentColor = 'secondary' } = defineProps<Props>()

const { firstPart, lastPart } = splitTitle(title)

const colorClass: Record<ColorType, string> = {
  primary: 'text-(--primary-color)',
  secondary: 'text-(--secondary-color)',
}
</script>

<template>
  <Heading as="h1" variant="title">
    {{ firstPart }} <span :class="colorClass[accentColor]">{{ lastPart }}</span>
  </Heading>
</template>
