<script setup lang="ts">
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import useShowCatalogue from '../composables/useShowCatalogue'
import List from '@/shared/components/List.vue'

const { isLoading, item, error } = useShowCatalogue()

console.log('ITEMS: ', item.value)
</script>
<template>
  <span v-if="isLoading">Is Loading...</span>
  <span v-else-if="error">Has error...</span>
  <span v-else>
    <section v-for="[genre, shows] in item" :key="genre">
      <span>{{ genre }}</span>
      <List :items="shows.map((show: TvMazeShowI) => show.name)" />
    </section>
  </span>
</template>
