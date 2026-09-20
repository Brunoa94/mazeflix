<script setup lang="ts">
import { useSearchStore } from '@/stores/searchStore'
import { computed, ref } from 'vue'
import Input from '@/shared/components/Input/Input.vue'
import { refDebounced } from '@vueuse/core'
import Button from '@/shared/components/Button/Button.vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import ShowList from '@/shared/components/ShowList/ShowList.vue'
import Text from '@/shared/components/Text/Text.vue'
import { searchShowQuery } from '../../queries/searchShowQuery'
import { useQuery } from '@pinia/colada'

const searchStore = useSearchStore()
const query = ref<string>('')
const debouncedQuery = refDebounced(query, 300)

const {
  data: items,
  isLoading,
  isPending,
  error,
} = useQuery(() => searchShowQuery({ query: debouncedQuery.value }))

const isLoadingState = computed(() => isLoading.value || isPending.value)
const hasQuery = computed(() => debouncedQuery.value.length > 0)
const hasResults = computed(() => items.value && items.value.length > 0)
const noResults = computed(
  () => hasQuery.value && !isLoadingState.value && items.value?.length === 0,
)
</script>

<template>
  <Teleport v-if="searchStore.isSearchOpen" to="body">
    <Transition name="overlay">
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search shows"
        class="fixed inset-x-0 bottom-0 top-14 z-10 bg-black pt-12 p-horizontal-container-full flex flex-col gap-3 overflow-y-auto"
      >
        <div class="flex items-center w-full">
          <Input
            v-model="query"
            ariaLabel="Write your search"
            placeholder="Search by name, genre, category..."
          />
          <Button variant="ghost" ariaLabel="Close search" @click="searchStore.closeSearch">
            <XMarkIcon class="size-10 text-white -mt-8" />
          </Button>
        </div>

        <div aria-live="polite" aria-atomic="true">
          <Text v-if="isLoadingState && hasQuery" as="span" variant="results">Searching...</Text>
          <Text v-else-if="noResults" as="span" variant="results">No results found</Text>
          <Text v-else-if="hasResults" as="span" variant="results">{{ items?.length }} results found</Text>
        </div>

        <div v-if="hasResults" class="flex flex-col gap-4">
          <ShowList variant="grid" :items="items ?? []" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
