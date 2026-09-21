<script setup lang="ts">
import Heading from '@/shared/components/Heading/Heading.vue'
import ShowList from '@/shared/components/ShowList/ShowList.vue'
import type { CatalogueType } from '../types/catalogue'

interface Props {
  catalogue: CatalogueType
}

const { catalogue } = defineProps<Props>()
</script>

<template>
  <section
    v-for="[genre, shows] in catalogue"
    :key="genre"
    class="flex flex-col gap-2 my-4"
    :aria-labelledby="`section-${genre}`"
  >
    <Heading as="h2" class="p-horizontal-container-full" :id="`section-${genre}`">{{
      genre
    }}</Heading>
    <ShowList :items="shows" />
  </section>
</template>
