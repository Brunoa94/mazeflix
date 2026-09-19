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
  <section class="flex flex-col gap-3" :aria-labelledby="`section-${title}`">
    <Heading as="h2" class="ml-4" :id="`section-${title}`">{{ title }}</Heading>
    <ShowList :items="items" />
  </section>
</template>
