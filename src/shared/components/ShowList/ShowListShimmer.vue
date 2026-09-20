<script setup lang="ts">
import { computed } from 'vue'
import ShowCardShimmer from '@/shared/components/ShowCard/ShowCardShimmer.vue'

type VariantType = 'horizontal' | 'grid'

interface Props {
  variant?: VariantType
}

const { variant = 'horizontal' } = defineProps<Props>()

const variantClass: Record<VariantType, { ul: string; li: string }> = {
  horizontal: {
    ul: 'overflow-x-scroll overflow-y-hidden w-full gap-4 flex items-center h-80',
    li: 'flex items-center first:ml-left-horizontal-container-full',
  },
  grid: {
    ul: 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full',
    li: 'flex items-center',
  },
}

const numberOfElements = computed(() => (variant === 'grid' ? 20 : 10))
</script>

<template>
  <ul :class="variantClass[variant].ul">
    <li v-for="i in numberOfElements" :key="i" :class="variantClass[variant].li">
      <ShowCardShimmer />
    </li>
  </ul>
</template>
