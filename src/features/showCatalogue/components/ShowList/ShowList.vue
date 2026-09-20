<script setup lang="ts">
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow.ts'
import ShowCard from '../ShowCard/ShowCard.vue'

interface Props {
  items: TvMazeShowI[]
}

const { items } = defineProps<Props>()
</script>

<template>
  <ul class="overflow-x-scroll overflow-y-hidden w-full gap-4 flex items-center h-80">
    <li
      class="flex items-center first:ml-left-horizontal-container-full"
      v-for="item in items"
      :key="item.id"
    >
      <ShowCard :item="item" />
    </li>
  </ul>
</template>
