<script setup lang="ts">
import Text from '@/shared/components/Text/Text.vue'
import Heading from '@/shared/components/Heading/Heading.vue'
import MetadataItem from './MetadataItem/MetadataItem.vue'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import { computed } from 'vue'
import { sanitizeHtml } from '@/shared/helpers/sanitizeHtml'
import ScheduleItem from './ScheduleItem/ScheduleItem.vue'
import ShowGenres from '../ShowGenres/ShowGenres.vue'

interface Props {
  show: TvMazeShowI
}

const props = defineProps<Props>()

const sanitizedSummary = computed(() => sanitizeHtml(props.show.summary))
</script>

<template>
  <div class="flex flex-col gap-8 py-8 px-8 max-w-4xl mx-auto">
    <ShowGenres :genres="show.genres" />

    <section v-if="show.summary" class="flex flex-col items-center gap-2" aria-labelledby="summary-heading">
      <Heading id="summary-heading" as="h2" variant="details-title">Summary</Heading>
      <Text v-html="sanitizedSummary" class="text-justify" as="p" variant="body" />
    </section>

    <section class="flex flex-col gap-6 border-y-3 border-dark-gray-primary py-4" aria-label="Show information">
      <MetadataItem v-if="show.network?.name" label="NETWORK" :value="show.network.name" />
      <MetadataItem
        v-if="show.webChannel?.name"
        label="WEB CHANNEL"
        :value="show.webChannel.name"
      />
      <ScheduleItem :schedule="show.schedule" />
    </section>
  </div>
</template>
