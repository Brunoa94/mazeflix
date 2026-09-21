import { useQuery } from '@pinia/colada'
import { searchShowQuery } from '../queries/searchShowQuery'
import { refDebounced } from '@vueuse/core'
import { computed, ref } from 'vue'

export default function useSearchShow() {
  const query = ref<string>('')
  const debouncedQuery = refDebounced(query, 300)

  const {
    data: items,
    isLoading,
    isPending,
    error,
    refetch,
  } = useQuery(() => searchShowQuery({ query: debouncedQuery.value }))

  const isSuspense = computed(() => isLoading.value || isPending.value)
  const hasQuery = computed(() => query.value.length > 0)
  const hasResults = computed(() => items.value && items.value.length > 0)
  const noResults = computed(() => hasQuery.value && !isSuspense.value && items.value?.length === 0)

  return {
    query,
    items,
    isSuspense,
    hasQuery,
    hasResults,
    noResults,
    error,
    refetch,
  }
}
