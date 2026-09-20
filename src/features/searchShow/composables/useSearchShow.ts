import { useQuery } from '@pinia/colada'
import { searchShowQuery } from '../queries/searchShowQuery'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import type { UseQueryType, UseQueryTypeArray } from '@/shared/types/query'
import { toValue, type MaybeRefOrGetter } from 'vue'

export default function useSearchShow({
  query,
}: {
  query: MaybeRefOrGetter<string>
}): UseQueryTypeArray<TvMazeShowI> {
  const { data, isLoading, isPending, error } = useQuery(searchShowQuery({ query }))

  return { items: data, isLoading, isPending, error }
}
