<script setup lang="ts">
import Overlay from '@/shared/components/Overlay.vue'
import SplitTitle from '@/shared/components/SplitTitle/SplitTitle.vue'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import { computed } from 'vue'
import ShowHeroDetails from './ShowHeroDetails.vue'

const PLACEHOLDER_IMAGE = 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'

interface Props {
  show: TvMazeShowI
}

const props = defineProps<Props>()

const backgroundImage = computed(
  () => props.show.image?.original ?? props.show.image?.medium ?? PLACEHOLDER_IMAGE,
)
</script>

<template>
  <div
    class="relative w-full h-[50vh] bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <Overlay variant="hero">
      <div class="h-full flex flex-col justify-end items-center gap-4 p-8">
        <SplitTitle :title="show.name" />
        <ShowHeroDetails :show="show" />
      </div>
    </Overlay>
  </div>
</template>
