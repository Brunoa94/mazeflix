<script setup lang="ts">
import Banner from '@/shared/components/Banner.vue'
import Text from '@/shared/components/Text.vue'
</script>

<template>
  <header
    class="p-horizontal-container-full min-h-14 py-4 fixed top-0 w-full z-20 bg-black-primary rounded-b-lg"
  >
    <a href="/" class="flex items-cente gap-2" aria-label="MazeFlix - Go to homepage">
      <Text as="span" class="text-3xl text-red-primary font-black uppercase">Maze</Text>
      <Banner variant="logo">
        <Text as="span" class="text-md font-bold uppercase">Flix</Text>
      </Banner>
    </a>
  </header>
</template>
