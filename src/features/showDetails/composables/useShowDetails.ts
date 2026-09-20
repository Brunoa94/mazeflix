import { useQuery } from '@pinia/colada'
import { showDetailsQuery } from '../queries/showDetailsQuery'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import type { UseQueryType } from '@/shared/types/query'

export default function useShowDetails({
  id,
}: {
  id: number
}): UseQueryType<TvMazeShowI | undefined> {
  const { data, isLoading, isPending, error } = useQuery(showDetailsQuery({ id }))

  return { item: data, isLoading, isPending, error }
}
