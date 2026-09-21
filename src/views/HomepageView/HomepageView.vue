<script setup lang="ts">
import ShowCatalogue from '@/features/showCatalogue/components/ShowCatalogue.vue'
import ShowCatalogueShimmer from '@/features/showCatalogue/components/ShowCatalogueShimmer.vue'
import useShowCatalogue from '@/features/showCatalogue/composables/useShowCatalogue'
import AppError from '@/shared/components/AppError/AppError.vue'

const { isLoading, item: catalogue, error } = useShowCatalogue({ page: 1 })
</script>

<template>
  <AppError v-if="error" :error="error" />
  <ShowCatalogueShimmer v-if="isLoading" />
  <ShowCatalogue :catalogue="catalogue" :isLoading="isLoading" />
</template>
