<script setup lang="ts">
import ShowListShimmer from '@/shared/components/ShowList/ShowListShimmer.vue'

const NUMBER_OF_SECTIONS = 10
</script>

<template>
  <div class="flex flex-col gap-8 my-4">
    <section v-for="i in NUMBER_OF_SECTIONS" :key="i" class="flex flex-col gap-2">
      <div
        class="h-6 w-32 rounded bg-neutral-800 animate-pulse ml-left-horizontal-container-full"
      />
      <ShowListShimmer variant="horizontal" />
    </section>
  </div>
</template>
