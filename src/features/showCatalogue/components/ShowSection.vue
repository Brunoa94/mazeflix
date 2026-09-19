<script setup lang="ts">
import Heading from '@/shared/components/Heading.vue'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import ShowList from './ShowList.vue'

interface Props {
  title: string
  items: TvMazeShowI[]
}

const { title, items } = defineProps<Props>()
</script>

<template>
  <article class="flex flex-col gap-3 py-4">
    <Heading as="h2">{{ title }}</Heading>
    <ShowList :items="items" />
  </article>
</template>
