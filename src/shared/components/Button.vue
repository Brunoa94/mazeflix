<script setup lang="ts">
type VariantType = "primary" | "secondary" | "default";

interface Props {
  variant?: VariantType;
  ariaLabel: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const {
  variant = "default",
  ariaLabel,
  type = "button",
  disabled = false,
} = defineProps<Props>();

const variantClass: Record<VariantType, string> = {
  primary: "bg-(--primary-color) text-white border-lg hover:opacity-80",
  secondary: "bg-(--secondary-color) text-black hover:opacity-80",
  default: "bg-gray-200 text-black hover:bg-gray-300",
};
</script>

<template>
  <button
    :class="[
      'px-8 py-2 rounded cursor-pointer',
      variantClass[variant],
      disabled && 'opacity-50 cursor-not-allowed',
    ]"
    :aria-label="ariaLabel"
    :type="type"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
