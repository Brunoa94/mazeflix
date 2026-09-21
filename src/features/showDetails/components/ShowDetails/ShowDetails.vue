<script setup lang="ts">
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import ShowHero from '../ShowHero/ShowHero.vue'
import ShowMetadata from '../ShowMetadata/ShowMetadata.vue'
import Link from '@/shared/components/Link/Link.vue'
import Text from '@/shared/components/Text/Text.vue'

interface Props {
  show: TvMazeShowI
}

const { show } = defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-center pb-16">
    <ShowHero :show="show" />
    <ShowMetadata :show="show" />
    <Link :to="show.url" :ariaLabel="`Play ${show.name} now on TVMaze`" variant="play" :isExternal="true">
      <Text as="span" class="text-black">Play Now</Text>
    </Link>
  </div>
</template>
