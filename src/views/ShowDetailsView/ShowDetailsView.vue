<script setup lang="ts">
import { useRoute } from 'vue-router'
import useShowDetails from '@/features/showDetails/composables/useShowDetails'
import ShowHero from '@/features/showDetails/components/ShowHero/ShowHero.vue'
import ShowGenres from '@/features/showDetails/components/ShowGenres/ShowGenres.vue'
import ShowMetadata from '@/features/showDetails/components/ShowMetadata/ShowMetadata.vue'
import { computed } from 'vue'

const route = useRoute()
const id = computed(() => Number(route.params.id))

const { item: show, isLoading, error } = useShowDetails({ id })
</script>

<template>
  <div v-if="isLoading" class="flex items-center justify-center h-screen">
    <span class="text-(--white-text)">Loading...</span>
  </div>

  <div v-else-if="show">
    <ShowHero :show="show" />
    <ShowGenres :genres="show.genres" />
    <ShowMetadata :show="show" />
  </div>
</template>
