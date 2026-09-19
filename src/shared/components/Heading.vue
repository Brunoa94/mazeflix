<script setup lang="ts">
type AsType = 'h1' | 'h2' | 'h3' | 'h4'
type VariantType = 'section' | 'title' | 'card'

interface Props {
  as?: AsType
  variant?: VariantType
}

const { as = 'h2', variant = 'section' } = defineProps<Props>()

const variantClass: Record<VariantType, string> = {
  section: 'text-xl font-bold text-(--white-text)',
  title: 'text-4xl font-bold text-(--white-text)',
  card: 'text-sm font-medium text-(--white-text)',
}
</script>

<template>
  <component :is="as" :class="variantClass[variant]">
    <slot />
  </component>
</template>
