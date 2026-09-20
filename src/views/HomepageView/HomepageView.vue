<script setup lang="ts">
import ShowCatalogue from '@/features/showCatalogue/components/ShowCatalogue.vue'
import useShowCatalogue from '@/features/showCatalogue/composables/useShowCatalogue'

const { isLoading, item: catalogue, error } = useShowCatalogue({ page: 1 })
</script>

<template>
  <span v-if="error">Error...</span>
  <span v-if="isLoading">Is Loading...</span>
  <ShowCatalogue :catalogue="catalogue" />
</template>
