<script setup lang="ts">
const model = defineModel<string>()

type VariantType = 'primary' | 'ghost'

interface Props {
  variant?: VariantType
  ariaLabel: string
  placeholder: string
  type?: 'text' | 'number'
  disabled?: boolean
}

const {
  variant = 'primary',
  ariaLabel,
  placeholder,
  type = 'text',
  disabled = false,
} = defineProps<Props>()

const variantClass: Record<VariantType, string> = {
  primary:
    'w-full border-2 border-(--primary-color) bg-white text-black focus:outline-none focus:ring-2 focus:ring-(--primary-color)',
  ghost:
    'w-full border border-gray-300 bg-transparent text-black focus:outline-none focus:border-(--primary-color)',
}
</script>

<template>
  <input
    :class="[
      'px-8 py-2 rounded cursor-pointer',
      variantClass[variant],
      disabled && 'opacity-50 cursor-not-allowed',
    ]"
    :aria-label="ariaLabel"
    :type="type"
    :disabled="disabled"
    :placeholder="placeholder"
    v-model="model"
  />
</template>
