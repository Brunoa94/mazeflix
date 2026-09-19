<script setup lang="ts">
type VariantType = 'rating' | 'logo'

interface Props {
  variant?: VariantType
}

const { variant = 'rating' } = defineProps<Props>()

const variantClass: Record<VariantType, string> = {
  rating: 'w-12 py-1 bg-red-rating rounded-md',
  logo: 'px-2 py-1 bg-red-primary rounded-lg',
}
</script>

<template>
  <div :class="['flex items-center justify-center', variantClass[variant]]">
    <slot />
  </div>
</template>
