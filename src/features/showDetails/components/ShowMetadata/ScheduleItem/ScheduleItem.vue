<script setup lang="ts">
import type { TvMazeScheduleI } from '@/shared/types/tvMaze/tvMazeShow'
import Text from '@/shared/components/Text/Text.vue'

interface Props {
  schedule: TvMazeScheduleI
}

const { schedule } = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <Text as="span" color="ghost">Schedule</Text>
    <Text v-for="day in schedule.days" as="p" variant="body" class="text-white"
      >{{ day }} at {{ schedule.time }}</Text
    >
  </div>
</template>
