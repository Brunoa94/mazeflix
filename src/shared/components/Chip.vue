<script setup lang="ts">
type VariantType = 'language' | 'genre' | 'rating' | 'logo'

interface Props {
  variant?: VariantType
}

const { variant = 'language' } = defineProps<Props>()

const variantClass: Record<VariantType, string> = {
  language: 'px-3 py-1 rounded text-sm bg-bg-chip',
  genre: 'px-3 py-1 rounded text-sm bg-bg-chip-genre',
  rating: 'w-12 py-1 bg-red-rating rounded-md',
  logo: 'px-2 py-1 bg-red-primary rounded-lg',
}
</script>

<template>
  <span class="flex items-center justify-center text-(--white-text)" :class="variantClass[variant]">
    <slot />
  </span>
</template>
