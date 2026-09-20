<script setup lang="ts">
type VariantType = 'language' | 'genre' | 'rating' | 'logo' | 'outlined'
type AsType = 'span' | 'li'

interface Props {
  variant?: VariantType
  as?: AsType
}

const { variant = 'language', as = 'span' } = defineProps<Props>()

const variantClass: Record<VariantType, string> = {
  language: 'px-3 py-1 rounded text-sm bg-bg-chip',
  genre: 'px-3 py-1 rounded text-sm bg-bg-chip-genre',
  rating: 'w-12 py-1 bg-red-rating rounded-md',
  logo: 'px-2 py-1 bg-red-primary rounded-lg',
  outlined: 'px-4 py-2 border border-border-subtle rounded-full text-sm',
}
</script>

<template>
  <component
    :is="as"
    class="flex items-center justify-center text-(--white-text)"
    :class="variantClass[variant]"
  >
    <slot />
  </component>
</template>
