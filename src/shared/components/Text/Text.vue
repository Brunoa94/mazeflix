<script setup lang="ts">
type AsType = 'p' | 'span'
type VariantType = 'body' | 'banner'
type ColorsVariants = 'default' | 'warning' | 'success' | 'ghost'

interface Props {
  as: AsType
  variant?: VariantType
  color?: ColorsVariants
}

const { as = 'p', variant, color = 'default' } = defineProps<Props>()
const variantClass: Record<VariantType, string> = {
  body: 'text-lg font-normal',
  banner: 'text-md font-normal',
}

const colorClass: Record<ColorsVariants, string> = {
  default: 'text-(--white-text)',
  warning: 'text-(--secondary-color)',
  success: 'text-(--primary-color)',
  ghost: 'text-(--white-text) opacity-60',
}
</script>

<template>
  <component :is="as" :class="[variant && variantClass[variant], colorClass[color]]">
    <slot />
  </component>
</template>
