import { useQuery } from '@pinia/colada'
import { searchShowQuery } from '../queries/searchShowQuery'
import { refDebounced } from '@vueuse/core'
import { computed, ref, type ComputedRef, type Ref } from 'vue'
import type { UseQueryTypeArray } from '@/shared/types/query'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'

type Props = UseQueryTypeArray<TvMazeShowI> & {
  query: Ref<string>
  hasQuery: ComputedRef<boolean>
}

export default function useSearchShow(): Props {
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
  const hasResults = computed(() => !!(items.value && items.value.length > 0))
  const isEmpty = computed(() => hasQuery.value && !isSuspense.value && items.value?.length === 0)

  return {
    query,
    items,
    isSuspense,
    hasQuery,
    hasResults,
    isEmpty,
    error,
    refetch,
  }
}
