<script setup lang="ts">
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow.ts'
import ShowCard from './ShowCard.vue'

type VariantType = 'horizontal' | 'grid'

interface Props {
  variant?: VariantType
  items: TvMazeShowI[]
}

const { variant = 'horizontal', items } = defineProps<Props>()

const variantClass: Record<VariantType, string> = {
  horizontal: 'w-full gap-4 flex items-center h-[320px]',
  grid: 'text-(--secondary-color)',
}
</script>

<template>
  <ul :class="['overflow-scroll', variantClass[variant]]">
    <li class="flex items-center first:ml-4" v-for="item in items" :key="item.id">
      <ShowCard :item="item" />
    </li>
  </ul>
</template>
