<script setup lang="ts">
import type { TvMazeGenreType } from '@/shared/types/tvMaze/tvMazeGenre'
import Chip from '@/shared/components/Chip/Chip.vue'
import Heading from '@/shared/components/Heading/Heading.vue'

interface Props {
  genres: TvMazeGenreType[]
}

defineProps<Props>()
</script>

<template>
  <div v-if="genres.length" class="flex flex-col items-center gap-3">
    <Heading as="h3" variant="details-title">Genres</Heading>
    <div class="flex items-center justify-center gap-3">
      <Chip v-for="genre in genres" :key="genre" variant="outlined">
        {{ genre }}
      </Chip>
    </div>
  </div>
</template>
