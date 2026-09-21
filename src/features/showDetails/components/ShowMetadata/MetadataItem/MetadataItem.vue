<script setup lang="ts">
import Text from '@/shared/components/Text/Text.vue'
import Heading from '@/shared/components/Heading/Heading.vue'

interface Props {
  label: string
  value: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <Heading as="h2" variant="details-title">{{ label }}</Heading>
    <Text as="p" variant="body">{{ value }}</Text>
  </div>
</template>
