import { useQuery } from '@pinia/colada'
import { showDetailsQuery } from '../queries/showDetailsQuery'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import type { UseQueryType } from '@/shared/types/query'
import { computed, toValue, type MaybeRefOrGetter } from 'vue'

export default function useShowDetails({
  id,
}: {
  id: MaybeRefOrGetter<number>
}): UseQueryType<TvMazeShowI | undefined> {
  const { data, isLoading, isPending, error, refetch } = useQuery(() =>
    showDetailsQuery({ id: toValue(id) }),
  )

  const isSuspense = computed(() => isLoading.value || isPending.value)
  const isEmpty = computed(() => !isSuspense.value && !data.value)

  return { item: data, isSuspense, isEmpty, error, refetch }
}
