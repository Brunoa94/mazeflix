<script setup lang="ts">
import Text from '@/shared/components/Text/Text.vue'
import Chip from '@/shared/components/Chip/Chip.vue'
import Heading from '@/shared/components/Heading/Heading.vue'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import Overlay from '@/shared/components/Overlay.vue'
import { computed } from 'vue'

const PLACEHOLDER_IMAGE = 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'

type VariantType = 'vertical' | 'horizontal'

interface Props {
  variant?: VariantType
  item: TvMazeShowI
  fluid?: boolean
}

const { variant = 'vertical', item, fluid = false } = defineProps<Props>()

const imageSrc = computed(() => item.image?.medium ?? PLACEHOLDER_IMAGE)

const variantClass: Record<VariantType, string> = {
  vertical: fluid ? '' : 'h-[300px] w-[220px] bg-black',
  horizontal: '',
}
</script>

<template>
  <RouterLink
    :to="{ name: 'showDetails', params: { id: item.id } }"
    :aria-label="`View details for ${item.name}}`"
    :class="[
      'flex items-start relative rounded-xl overflow-hidden',
      'hover:scale-110 transition-all duration-300',
      variantClass[variant],
    ]"
  >
    <img
      :src="imageSrc"
      :alt="item.name"
      loading="lazy"
      decoding="async"
      class="inset-0 w-full h-full object-cover"
    />
    <Overlay>
      <div class="h-full w-full flex flex-col justify-end gap-2 p-4 rounded-xl">
        <Chip variant="rating" class="min-h-12">
          <Text as="span" variant="banner">{{ item.rating.average ?? '-' }}</Text>
        </Chip>
        <Heading as="h3"> {{ item.name }} </Heading>
      </div>
    </Overlay>
  </RouterLink>
</template>
