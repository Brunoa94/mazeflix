import { useQuery } from '@pinia/colada'
import { showDetailsQuery } from '../queries/showDetailsQuery'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import type { UseQueryType } from '@/shared/types/query'
import { toValue, type MaybeRefOrGetter } from 'vue'

export default function useShowDetails({
  id,
}: {
  id: MaybeRefOrGetter<number>
}): UseQueryType<TvMazeShowI | undefined> {
  const { data, isLoading, isPending, error } = useQuery(() =>
    showDetailsQuery({ id: toValue(id) }),
  )

  return { item: data, isLoading, isPending, error }
}
