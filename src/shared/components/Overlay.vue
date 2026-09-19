<script setup lang="ts">
type VariantType = 'default' | 'hero'

interface Props {
  variant?: VariantType
}

const { variant = 'default' } = defineProps<Props>()

const variantStyle: Record<VariantType, string> = {
  default: 'var(--gradient-overlay)',
  hero: 'var(--gradient-overlay-hero)',
}
</script>

<template>
  <div class="w-full h-full absolute top-0 left-0" :style="{ background: variantStyle[variant] }">
    <slot />
  </div>
</template>
