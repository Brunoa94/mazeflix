<script setup lang="ts">
const model = defineModel<string | number>()

type VariantType = 'search'

interface Props {
  variant?: VariantType
  ariaLabel: string
  placeholder: string
  type?: 'text' | 'number'
  disabled?: boolean
}

const {
  variant = 'search',
  ariaLabel,
  placeholder,
  type = 'text',
  disabled = false,
} = defineProps<Props>()

const variantClass: Record<VariantType, string> = {
  search: 'w-full border-none focus:outline-none focus:ring-2 focus:ring-(--colo-red-primary)',
}
</script>

<template>
  <input
    :class="[variantClass[variant]]"
    :aria-label="ariaLabel"
    :type="type"
    :disabled="disabled"
    :placeholder="placeholder"
    v-model="model"
  />
</template>
