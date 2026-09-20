<script setup lang="ts">
type VariantType = 'search'

interface Props {
  variant?: VariantType
  ariaLabel: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const { variant = 'search', ariaLabel, type = 'button', disabled = false } = defineProps<Props>()
const emit = defineEmits<{
  click: []
}>()

const variantClass: Record<VariantType, string> = {
  search:
    'px-8 py-2 bg-transparent text-(--white-text) border border-(--color-dark-gray-primary) rounded-md hover:border-(--color-gray-primary)',
}
</script>

<template>
  <button
    :class="[
      'px-8 py-2 cursor-pointer',
      variantClass[variant],
      disabled && 'opacity-50 cursor-not-allowed',
    ]"
    :aria-label="ariaLabel"
    :type="type"
    :disabled="disabled"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>
