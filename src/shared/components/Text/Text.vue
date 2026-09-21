<script setup lang="ts">
type AsType = 'p' | 'span' | 'li'
type VariantType = 'body' | 'banner' | 'results' | 'button'
type ColorsVariants = 'default' | 'warning' | 'success' | 'ghost' | 'alert'

interface Props {
  as: AsType
  variant?: VariantType
  color?: ColorsVariants
}

const { as = 'p', variant, color = 'default' } = defineProps<Props>()
const variantClass: Record<VariantType, string> = {
  body: 'text-lg font-normal',
  banner: 'text-base font-normal',
  results: 'text-3xl opacity-80',
  button: 'text-xl font-bold',
}

const colorClass: Record<ColorsVariants, string> = {
  default: 'text-white',
  warning: 'text-secondary-color',
  success: 'text-primary-color',
  ghost: 'text-white opacity-60',
  alert: 'text-red-primary',
}
</script>

<template>
  <component :is="as" :class="[variant && variantClass[variant], color && colorClass[color]]">
    <slot />
  </component>
</template>
