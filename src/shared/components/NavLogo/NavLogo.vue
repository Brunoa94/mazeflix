<script setup lang="ts">
import Chip from '@/shared/components/Chip/Chip.vue'
import Text from '@/shared/components/Text/Text.vue'
</script>

<template>
  <RouterLink to="/" class="flex items-center gap-2" aria-label="MazeFlix - Go to homepage">
    <Text as="span" class="text-3xl text-red-primary font-black uppercase">Maze</Text>
    <Chip variant="logo">
      <Text as="span" class="text-base font-bold uppercase">Flix</Text>
    </Chip>
  </RouterLink>
</template>
