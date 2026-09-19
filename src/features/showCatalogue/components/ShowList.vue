<script setup lang="ts" generic="T">
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow.ts'
import ShowCard from './ShowCard.vue'

type VariantType = 'horizontal' | 'grid'

interface Props {
  variant?: VariantType
  items: TvMazeShowI[]
}

const { variant = 'horizontal', items } = defineProps<Props>()

const variantClass: Record<VariantType, string> = {
  horizontal: 'w-full gap-4 flex items-center h-[340px]',
  grid: 'text-(--secondary-color)',
}
</script>

<template>
  <ul :class="['overflow-scroll', variantClass[variant]]">
    <li class="flex items-center" v-for="(item, index) in items" :key="index">
      <ShowCard :item="item" />
    </li>
  </ul>
</template>
