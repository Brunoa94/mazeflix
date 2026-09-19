import { useQuery } from '@pinia/colada'
import { mapTvMazeShowToCatalogue } from '../mappers/mapTvMazeShowToCatalogue'
import { showCatalogQuery } from '../queries/showCatalogueQuery'
import type { CatalogueType } from '../types/catalogue'
import type { UseQueryType, UseQueryTypeArray } from '@/shared/types/query'
import { computed } from 'vue'

export default function useShowCatalogue(): UseQueryType<CatalogueType> {
  const { data: tvMazeShows, isLoading, isPending, error } = useQuery(showCatalogQuery({ page: 1 }))

  const filtered = computed(() =>
    mapTvMazeShowToCatalogue({ tvMazeShows: tvMazeShows.value ?? [] }),
  )

  return { item: filtered, isLoading, isPending, error }
}
