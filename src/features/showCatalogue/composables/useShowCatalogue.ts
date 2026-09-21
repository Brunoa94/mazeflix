import { useQuery } from '@pinia/colada'
import { mapTvMazeShowToCatalogue } from '../mappers/mapTvMazeShowToCatalogue'
import { showCatalogQuery } from '../queries/showCatalogueQuery'
import type { CatalogueType } from '../types/catalogue'
import type { UseQueryType } from '@/shared/types/query'
import { computed } from 'vue'

interface Props {
  page: number
}

export default function useShowCatalogue({ page }: Props): UseQueryType<CatalogueType> {
  const {
    data: tvMazeShows,
    isLoading,
    isPending,
    error,
    refetch,
  } = useQuery(showCatalogQuery({ page }))

  const item = computed(() =>
    mapTvMazeShowToCatalogue({ tvMazeShows: tvMazeShows.value ?? [] }),
  )
  const isSuspense = computed(() => isLoading.value || isPending.value)
  const isEmpty = computed(() => item.value.size === 0)

  return { item, isSuspense, isEmpty, error, refetch }
}
