<script setup lang="ts">
import type { TvMazeScheduleI } from '@/shared/types/tvMaze/tvMazeShow'
import Text from '@/shared/components/Text/Text.vue'
import Heading from '@/shared/components/Heading/Heading.vue'

interface Props {
  schedule: TvMazeScheduleI
}

const { schedule } = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <Heading as="h3" variant="details-title">Schedule</Heading>
    <ul class="list-none flex flex-col items-center">
      <Text v-for="day in schedule.days" :key="day" as="li" variant="body" class="text-white">
        {{ day }}{{ schedule.time ? ` at ${schedule.time}` : '' }}
      </Text>
    </ul>
  </div>
</template>
