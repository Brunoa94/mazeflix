<script setup lang="ts">
import { useRoute } from 'vue-router'
import useShowDetails from '@/features/showDetails/composables/useShowDetails'
import { computed } from 'vue'
import ShowDetails from '@/features/showDetails/components/ShowDetails/ShowDetails.vue'
import AppError from '@/shared/components/AppError/AppError.vue'
import ShowDetailsShimmer from '@/features/showDetails/components/ShowDetails/ShowDetailsShimmer.vue'

const route = useRoute()
const id = computed(() => Number(route.params.id))

const { item: show, isLoading, error } = useShowDetails({ id })
</script>

<template>
  <ShowDetailsShimmer v-if="isLoading" />

  <AppError v-else-if="error" :error="error" />

  <ShowDetails v-else-if="show" :show="show" />
</template>
