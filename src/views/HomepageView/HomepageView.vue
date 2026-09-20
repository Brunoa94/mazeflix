<script setup lang="ts">
import ShowCatalogue from '@/features/showCatalogue/components/ShowCatalogue.vue'
import ShowCatalogueShimmer from '@/features/showCatalogue/components/ShowCatalogueShimmer.vue'
import useShowCatalogue from '@/features/showCatalogue/composables/useShowCatalogue'

const { isLoading, item: catalogue, error } = useShowCatalogue({ page: 1 })
</script>

<template>
  <div v-if="error" role="alert">Error...</div>
  <ShowCatalogueShimmer v-if="isLoading" />
  <ShowCatalogue :catalogue="catalogue" :isLoading="isLoading" />
</template>
