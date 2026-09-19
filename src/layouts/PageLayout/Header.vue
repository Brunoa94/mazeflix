<script setup lang="ts">
import Chip from '@/shared/components/Chip.vue'
import Text from '@/shared/components/Text.vue'
</script>

<template>
  <header
    class="p-horizontal-container-full min-h-14 py-4 fixed top-0 w-full z-20 bg-black-primary rounded-b-lg"
  >
    <RouterLink to="/" class="flex items-cente gap-2" aria-label="MazeFlix - Go to homepage">
      <Text as="span" class="text-3xl text-red-primary font-black uppercase">Maze</Text>
      <Chip variant="logo">
        <Text as="span" class="text-md font-bold uppercase">Flix</Text>
      </Chip>
    </RouterLink>
  </header>
</template>
