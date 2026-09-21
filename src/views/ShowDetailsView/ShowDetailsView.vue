<script setup lang="ts">
import { useRoute } from 'vue-router'
import useShowDetails from '@/features/showDetails/composables/useShowDetails'
import { computed } from 'vue'
import ShowDetails from '@/features/showDetails/components/ShowDetails/ShowDetails.vue'
import AppError from '@/shared/components/AppError/AppError.vue'
import ShowDetailsShimmer from '@/features/showDetails/components/ShowDetails/ShowDetailsShimmer.vue'
import Text from '@/shared/components/Text/Text.vue'

const route = useRoute()
const id = computed(() => Number(route.params.id))

const { item: show, isSuspense, isEmpty, error, refetch } = useShowDetails({ id })
</script>

<template>
  <ShowDetailsShimmer v-if="isSuspense" />
  <AppError v-else-if="error" :error="error" :onRetry="refetch" />
  <ShowDetails v-else-if="show" :show="show" />
  <Text v-else-if="isEmpty" as="p" class="text-center p-8">Show not found</Text>
</template>
