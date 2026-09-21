<script setup lang="ts">
import { useSearchStore } from '@/stores/searchStore'
import { computed, onMounted, ref, shallowRef } from 'vue'
import Input from '@/shared/components/Input/Input.vue'
import { refDebounced, useFocus } from '@vueuse/core'
import Button from '@/shared/components/Button/Button.vue'
import { XMarkIcon } from '@heroicons/vue/24/solid'
import ShowList from '@/shared/components/ShowList/ShowList.vue'
import Text from '@/shared/components/Text/Text.vue'
import { searchShowQuery } from '../../queries/searchShowQuery'
import { useQuery } from '@pinia/colada'
import AppError from '@/shared/components/AppError/AppError.vue'
import ShowListShimmer from '@/shared/components/ShowList/ShowListShimmer.vue'

const searchStore = useSearchStore()
const query = ref<string>('')
const debouncedQuery = refDebounced(query, 300)

const inputRef = shallowRef()
useFocus(inputRef, { initialValue: true })

const {
  data: items,
  isLoading,
  isPending,
  error,
} = useQuery(() => searchShowQuery({ query: debouncedQuery.value }))

const isLoadingState = computed(() => isLoading.value || isPending.value)
const hasQuery = computed(() => query.value.length > 0)
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
        @keydown.esc="searchStore.closeSearch"
      >
        <div class="flex items-center w-full">
          <Input
            v-model="query"
            ariaLabel="Write your search"
            placeholder="Search by name, genre, category..."
            ref="inputRef"
          />
          <Button variant="ghost" ariaLabel="Close search" @click="searchStore.closeSearch">
            <XMarkIcon class="size-10 text-white -mt-8" />
          </Button>
        </div>

        <div aria-live="polite" aria-atomic="true">
          <ShowListShimmer v-if="isLoadingState && hasQuery" variant="grid" />
          <AppError v-else-if="error" :error="error" />
          <Text v-else-if="noResults" as="span" variant="results">No results found</Text>
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
