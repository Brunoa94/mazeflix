<script setup lang="ts">
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import ShowHero from '../ShowHero/ShowHero.vue'
import ShowGenres from '../ShowGenres/ShowGenres.vue'
import ShowMetadata from '../ShowMetadata/ShowMetadata.vue'

interface Props {
  show: TvMazeShowI
}

const { show } = defineProps<Props>()
</script>

<template>
  <ShowHero :show="show" />
  <ShowGenres :genres="show.genres" />
  <ShowMetadata :show="show" />
</template>
