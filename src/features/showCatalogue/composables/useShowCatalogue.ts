import { useQuery } from '@pinia/colada'
import { mapTvMazeShowToCatalogue } from '../mappers/mapTvMazeShowToCatalogue'
import { showCatalogQuery } from '../queries/showCatalogueQuery'
import type { CatalogueType } from '../types/catalogue'
import type { UseQueryType } from '@/shared/types/query'
import { computed } from 'vue'

export default function useShowCatalogue({ page }: { page: number }): UseQueryType<CatalogueType> {
  const { data: tvMazeShows, isLoading, isPending, error } = useQuery(showCatalogQuery({ page }))

  const filtered = computed(() =>
    mapTvMazeShowToCatalogue({ tvMazeShows: tvMazeShows.value ?? [] }),
  )

  return { item: filtered, isLoading, isPending, error }
}
