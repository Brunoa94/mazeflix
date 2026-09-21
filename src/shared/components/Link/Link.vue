<script setup lang="ts">
type VariantType = 'play' | 'playLarge' | 'outlined'

interface Props {
  variant?: VariantType
  ariaLabel: string
  to: string
  isExternal?: boolean
}

const { variant = 'play', ariaLabel, to, isExternal = false } = defineProps<Props>()

const variantClass: Record<VariantType, string> = {
  play: 'flex items-center bg-white font-bold rounded-lg hover:opacity-80 px-12 py-4 cursor-pointer justify-center w-fit focus:outline-2 focus:outline-offset-2 focus:outline-white',
  playLarge:
    'flex items-center bg-white font-bold rounded-lg hover:opacity-80 px-16 py-5 cursor-pointer justify-center w-fit focus:outline-2 focus:outline-offset-2 focus:outline-white',
  outlined:
    'text-white border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-colors',
}
</script>

<template>
  <a
    v-if="isExternal"
    :href="to"
    :class="variantClass[variant]"
    :aria-label="ariaLabel"
    target="_blank"
    rel="noopener noreferrer"
  >
    <slot />
  </a>
  <RouterLink v-else :to="to" :class="variantClass[variant]" :aria-label="ariaLabel">
    <slot />
  </RouterLink>
</template>
