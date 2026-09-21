<script setup lang="ts">
import ShowCatalogue from '@/features/showCatalogue/components/ShowCatalogue.vue'
import ShowCatalogueShimmer from '@/features/showCatalogue/components/ShowCatalogueShimmer.vue'
import useShowCatalogue from '@/features/showCatalogue/composables/useShowCatalogue'
import AppError from '@/shared/components/AppError/AppError.vue'
import Text from '@/shared/components/Text/Text.vue'

const { isSuspense, isEmpty, item: catalogue, error, refetch } = useShowCatalogue({ page: 1 })
</script>

<template>
  <ShowCatalogueShimmer v-if="isSuspense" />
  <AppError v-else-if="error" :error="error" :onRetry="refetch" />
  <Text v-else-if="isEmpty" as="p" class="text-center p-8">No shows available</Text>
  <ShowCatalogue v-else :catalogue="catalogue" />
</template>
