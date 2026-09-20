<script setup lang="ts">
import { useSearchStore } from '@/stores/searchStore'
import { ref } from 'vue'
import useSearchShow from '../../composables/useSearchShow'
import Input from '@/shared/components/Input/Input.vue'
import { refDebounced } from '@vueuse/core'

const searchStore = useSearchStore()
const query = ref<string>('')
const debouncedQuery = refDebounced(query, 300)

const { items, isLoading, isPending, error } = useSearchShow({ query: debouncedQuery })
console.log('DATA: ', items.value)
</script>

<template>
  <Teleport to="body">
    <Transition name="overlay">
      <div
        v-if="searchStore.isSearchOpen"
        class="fixed inset-x-0 bottom-0 top-14 z-10 bg-red-500 pt-12 p-horizontal-container-full"
      >
        <Input
          v-model="query"
          ariaLabel="Write your search"
          placeholder="Search by name, genre, category..."
        />
      </div>
    </Transition>
  </Teleport>
</template>
