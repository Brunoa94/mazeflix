<script setup lang="ts">
import Text from '@/shared/components/Text.vue'
import MetadataItem from './MetadataItem.vue'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'

interface Props {
  show: TvMazeShowI
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-8 py-8 px-8 max-w-4xl mx-auto">
    <div v-if="show.summary" class="text-center">
      <Text as="p" variant="body" v-html="show.summary" />
    </div>

    <MetadataItem v-if="show.network?.name" label="NETWORK" :value="show.network.name" />

    <MetadataItem v-if="show.webChannel?.name" label="WEB CHANNEL" :value="show.webChannel.name" />
  </div>
</template>
