<script setup lang="ts">
type VariantType = 'play'

interface Props {
  variant?: VariantType
  ariaLabel: string
  to: string
  isExternal?: boolean
}

const { variant = 'play', ariaLabel, to, isExternal = false } = defineProps<Props>()

const variantClass: Record<VariantType, string> = {
  play: 'flex items-center bg-(--color-white) text-(--color-black-primary) font-bold rounded-lg hover:opacity-80 px-12 py-4 cursor-pointer justify-center w-fit',
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
