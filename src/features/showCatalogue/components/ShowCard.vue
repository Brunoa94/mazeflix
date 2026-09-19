<script setup lang="ts" generic="T">
import Text from '@/shared/components/Text.vue'
import Banner from '@/shared/components/Banner.vue'
import Heading from '@/shared/components/Heading.vue'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import ShowOverlay from './ShowOverlay.vue'

type VariantType = 'vertical' | 'horizontal'

interface Props {
  variant?: VariantType
  item: TvMazeShowI
}

const { variant = 'vertical', item } = defineProps<Props>()

const variantClass: Record<VariantType, string> = {
  vertical: 'h-[300px] w-[220px] bg-black',
  horizontal: '',
}
</script>

<template>
  <a
    :class="[
      'flex items-start relative rounded-xl overflow-hidden',
      'hover:scale-110 transition-all duration-300 bg-cover bg-center bg-no-repeat',
      variantClass[variant],
    ]"
    :style="{ backgroundImage: `url(${item.image?.medium})` }"
  >
    <ShowOverlay>
      <div class="h-full w-full flex flex-col justify-end gap-2 p-4 rounded-xl">
        <Banner>
          <Text variant="banner">{{ item.rating.average }}</Text>
        </Banner>
        <Heading as="h3"> {{ item.name }} </Heading>
      </div>
    </ShowOverlay>
  </a>
</template>
