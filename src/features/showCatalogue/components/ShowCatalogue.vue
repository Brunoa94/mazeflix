<script setup lang="ts">
import Heading from '@/shared/components/Heading.vue'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import ShowList from './ShowList.vue'
import type { CatalogueType } from '../types/catalogue.ts'

interface Props {
  catalogue: CatalogueType
}

const { catalogue } = defineProps<Props>()
</script>

<template>
  <section
    :items="shows"
    :title="genre"
    v-for="[genre, shows] in catalogue"
    :key="genre"
    class="flex flex-col gap-2 my-4"
    :aria-labelledby="`section-${genre}`"
  >
    <Heading as="h2" class="p-horizontal-container-full" :id="`section-${genre}`">{{
      genre
    }}</Heading>
    <ShowList :items="shows" />
  </section>
</template>
