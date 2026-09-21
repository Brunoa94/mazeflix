<script setup lang="ts">
import ShowCatalogue from '@/features/showCatalogue/components/ShowCatalogue.vue'
import ShowCatalogueShimmer from '@/features/showCatalogue/components/ShowCatalogueShimmer.vue'
import useShowCatalogue from '@/features/showCatalogue/composables/useShowCatalogue'
import AppError from '@/shared/components/AppError/AppError.vue'

const { isLoading, item: catalogue, error } = useShowCatalogue({ page: 1 })
</script>

<template>
  <ShowCatalogueShimmer v-if="isLoading" />
  <AppError v-else-if="error" :error="error" />
  <ShowCatalogue v-else :catalogue="catalogue" />
</template>
