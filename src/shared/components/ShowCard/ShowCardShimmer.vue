<script setup lang="ts">
type VariantType = 'vertical' | 'horizontal'

interface Props {
  variant?: VariantType
}

const { variant = 'vertical' } = defineProps<Props>()

const variantClass: Record<VariantType, string> = {
  vertical: 'h-[300px] w-[220px]',
  horizontal: '',
}
</script>

<template>
  <div :class="['rounded-xl bg-neutral-800 animate-pulse', variantClass[variant]]" />
</template>
