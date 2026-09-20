<script setup lang="ts">
import { useRoute } from 'vue-router'
import useShowDetails from '@/features/showDetails/composables/useShowDetails'
import { computed } from 'vue'
import ShowDetails from '@/features/showDetails/components/ShowDetails/ShowDetails.vue'

const route = useRoute()
const id = computed(() => Number(route.params.id))

const { item: show, isLoading, error } = useShowDetails({ id })
</script>

<template>
  <div v-if="isLoading" role="status" aria-live="polite" class="flex items-center justify-center h-screen">
    <span class="text-(--white-text)">Loading...</span>
  </div>

  <ShowDetails v-else-if="show" :show="show" />
</template>
