<script setup lang="ts">
import Chip from '@/shared/components/Chip/Chip.vue'
import Heading from '@/shared/components/Heading/Heading.vue'

interface Props {
  genres: string[]
}

defineProps<Props>()
</script>

<template>
  <div v-if="genres.length" class="flex flex-col items-center gap-3">
    <Heading as="h3" variant="details-title">Genres</Heading>
    <ul class="flex items-center justify-center gap-3 list-none" aria-label="Show genres">
      <Chip v-for="genre in genres" :key="genre" as="li" variant="outlined">
        {{ genre }}
      </Chip>
    </ul>
  </div>
</template>
