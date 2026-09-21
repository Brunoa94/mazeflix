<script setup lang="ts">
type AsType = 'h1' | 'h2' | 'h3' | 'h4'
type VariantType = 'section' | 'title' | 'card' | 'logo' | 'details-title'

interface Props {
  as?: AsType
  variant?: VariantType
  id?: string
}

const { as = 'h2', variant = 'section', id } = defineProps<Props>()

const variantClass: Record<VariantType, string> = {
  section: 'text-xl font-bold text-white',
  title: 'text-4xl font-bold text-white',
  card: 'text-sm font-medium text-white',
  logo: 'text-2xl font-black text-red-primary',
  'details-title': 'text-base text-white uppercase',
}
</script>

<template>
  <component :is="as" :id="id" :class="variantClass[variant]">
    <slot />
  </component>
</template>
