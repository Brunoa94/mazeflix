<script setup lang="ts" generic="T">
type VariantType = "primary" | "secondary";

interface Props {
  variant?: VariantType;
  listType?: "bullet" | "numbered";
  items: string[];
}

const {
  variant = "primary",
  listType = "bullet",
  items,
} = defineProps<Props>();

const variantClass: Record<VariantType, string> = {
  primary: "text-(--primary-color)",
  secondary: "text-(--secondary-color)",
};
</script>

<template>
  <ul
    v-if="listType === 'bullet'"
    :class="['list-disc', variantClass[variant]]"
  >
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
    </li>
  </ul>
</template>
