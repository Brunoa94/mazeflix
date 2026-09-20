<script setup lang="ts">
import Text from '@/shared/components/Text/Text.vue'

interface Props {
  label: string
  value: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-center gap-2 border-t border-border-subtle pt-8">
    <Text as="span" color="ghost" class="text-xs tracking-widest">{{ label }}</Text>
    <Text as="p" variant="body">{{ value }}</Text>
  </div>
</template>
