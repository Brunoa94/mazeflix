<script setup lang="ts">
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import ShowCard from '@/shared/components/ShowCard/ShowCard.vue'

type VariantType = 'horizontal' | 'grid'

interface Props {
  items: TvMazeShowI[]
  variant?: VariantType
}

const { items, variant = 'horizontal' } = defineProps<Props>()

const variantClass: Record<VariantType, { ul: string; li: string }> = {
  horizontal: {
    ul: 'overflow-x-scroll overflow-y-hidden w-full gap-4 flex items-center h-80',
    li: 'flex items-center first:ml-left-horizontal-container-full',
  },
  grid: {
    ul: 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full',
    li: 'flex items-center',
  },
}
</script>

<template>
  <ul :class="variantClass[variant].ul" :aria-label="`${items.length} TV shows`">
    <li v-for="item in items" :key="item.id" :class="variantClass[variant].li">
      <ShowCard :item="item" :fluid="variant === 'grid'" />
    </li>
  </ul>
</template>
