<script setup lang="ts">
import Text from '@/shared/components/Text.vue'
import Chip from '@/shared/components/Chip.vue'
import Heading from '@/shared/components/Heading.vue'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import Overlay from '@/shared/components/Overlay.vue'
import placeholderImage from '@/assets/placeholder-show.svg'
import { computed } from 'vue'

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

const backgroundImage = computed(() => item.image?.medium ?? placeholderImage)
</script>

<template>
  <RouterLink
    :to="{ name: 'showDetails', params: { id: item.id } }"
    :class="[
      'flex items-start relative rounded-xl overflow-hidden',
      'hover:scale-110 transition-all duration-300 bg-cover bg-center bg-no-repeat',
      variantClass[variant],
    ]"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <Overlay>
      <div class="h-full w-full flex flex-col justify-end gap-2 p-4 rounded-xl">
        <Chip variant="rating">
          <Text as="span" variant="banner">{{ item.rating.average }}</Text>
        </Chip>
        <Heading as="h3"> {{ item.name }} </Heading>
      </div>
    </Overlay>
  </RouterLink>
</template>
