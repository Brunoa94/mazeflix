<script setup lang="ts">
import Text from '@/shared/components/Text/Text.vue'

interface Props {
  label: string
  value: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <Text as="span" color="ghost">{{ label }}</Text>
    <Text as="p" variant="body">{{ value }}</Text>
  </div>
</template>
