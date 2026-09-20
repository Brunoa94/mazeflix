<script setup lang="ts">
import Text from '@/shared/components/Text/Text.vue'
import MetadataItem from './MetadataItem.vue'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import { computed } from 'vue'
import { sanitizeHtml } from '@/shared/helpers/sanitizeHtml'

interface Props {
  show: TvMazeShowI
}

const props = defineProps<Props>()

const sanitizedSummary = computed(() => sanitizeHtml(props.show.summary))
</script>

<template>
  <div class="flex flex-col gap-8 py-8 px-8 max-w-4xl mx-auto">
    <Text
      v-if="show.summary"
      v-html="sanitizedSummary"
      class="text-justify"
      as="p"
      variant="body"
    />

    <MetadataItem v-if="show.network?.name" label="NETWORK" :value="show.network.name" />

    <MetadataItem v-if="show.webChannel?.name" label="WEB CHANNEL" :value="show.webChannel.name" />
  </div>
</template>
