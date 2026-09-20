<script setup lang="ts">
import Overlay from '@/shared/components/Overlay.vue'
import SplitTitle from '@/shared/components/SplitTitle.vue'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import placeholderImage from '@/assets/placeholder-show.svg'
import { computed } from 'vue'
import ShowHeroDetails from './ShowHeroDetails.vue'

interface Props {
  show: TvMazeShowI
}

const props = defineProps<Props>()

const backgroundImage = computed(() => props.show.image?.original ?? placeholderImage)
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
