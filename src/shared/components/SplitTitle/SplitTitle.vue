<script setup lang="ts">
import { computed } from 'vue'
import { splitTitle } from '@/shared/helpers/splitTitle'
import Heading from '../Heading/Heading.vue'

type ColorType = 'primary' | 'secondary'

interface Props {
  title: string
  accentColor?: ColorType
}

const { title, accentColor = 'primary' } = defineProps<Props>()

const parts = computed(() => splitTitle(title))

const colorClass: Record<ColorType, string> = {
  primary: 'text-red-primary',
  secondary: 'text-secondary-color',
}
</script>

<template>
  <Heading as="h1" variant="title">
    {{ parts.firstPart }}
    <span v-if="parts.lastPart" :class="colorClass[accentColor]">{{ parts.lastPart }}</span>
  </Heading>
</template>
