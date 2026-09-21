<script setup lang="ts">
import { useSearchStore } from '@/stores/searchStore'
import ShowList from '@/shared/components/ShowList/ShowList.vue'
import Text from '@/shared/components/Text/Text.vue'
import AppError from '@/shared/components/AppError/AppError.vue'
import ShowListShimmer from '@/shared/components/ShowList/ShowListShimmer.vue'
import SearchInput from './SearchInput.vue'
import useSearchShow from '../../composables/useSearchShow'
import { useRouter } from 'vue-router'
import { watch } from 'vue'

const searchStore = useSearchStore()
const router = useRouter()

const { query, items, isSuspense, hasQuery, hasResults, isEmpty, error, refetch } = useSearchShow()

watch(() => router.currentRoute.value.path, () => {
  searchStore.closeSearch()
})
</script>

<template>
  <Teleport v-if="searchStore.isSearchOpen" to="body">
    <Transition name="overlay">
      <div
        v-if="searchStore.isSearchOpen"
        role="dialog"
        aria-modal="true"
        aria-label="Search shows"
        class="fixed inset-x-0 bottom-0 top-14 z-10 bg-black pt-12 p-horizontal-container-full flex flex-col gap-3 overflow-y-auto"
        @keydown.esc="searchStore.closeSearch"
      >
        <SearchInput v-model="query" />

        <div aria-live="polite" aria-atomic="true">
          <ShowListShimmer v-if="isSuspense && hasQuery" variant="grid" />
          <AppError v-else-if="error" :error="error" :onRetry="refetch" />
          <Text v-else-if="isEmpty" as="span" variant="results">No results found</Text>
          <Text v-else-if="hasResults" as="span" variant="results"
            >{{ items?.length }} results found</Text
          >
        </div>

        <div v-if="hasResults" class="flex flex-col gap-4">
          <ShowList variant="grid" :items="items ?? []" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
