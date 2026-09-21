<script setup lang="ts">
import Chip from '@/shared/components/Chip/Chip.vue'
import Text from '@/shared/components/Text/Text.vue'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import { StarIcon } from '@heroicons/vue/16/solid'
import { computed } from 'vue'

interface Props {
  show: TvMazeShowI
}

const props = defineProps<Props>()

const year = computed(() => props.show.premiered?.split('-')[0] ?? null)
const isEnded = computed(() => props.show.status === 'Ended')
</script>

<template>
  <div class="flex items-center gap-3">
    <div class="flex items-center gap-1">
      <StarIcon class="size-4 text-primary-color" />
      <Text as="span" color="success"> {{ show.rating?.average ?? 'No' }} Rating </Text>
    </div>
    <Text as="span" color="ghost">•</Text>
    <Text as="span">{{ year }}</Text>
    <Text as="span" color="ghost">•</Text>
    <Chip variant="language" class="uppercase">
      {{ show.language ?? 'No information' }}
    </Chip>
    <Text as="span" color="ghost">•</Text>
    <Text as="span" :color="isEnded ? 'warning' : 'success'" class="uppercase">
      {{ show.status }}
    </Text>
  </div>
</template>
