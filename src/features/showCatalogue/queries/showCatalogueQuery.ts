import { defineQueryOptions } from '@pinia/colada'
import { showCatalogueApi } from '../api/showCatalogueApi'
import { ApiError } from '@/shared/types/error'

export const showCatalogQuery = defineQueryOptions(({ page }: { page: number }) => ({
  key: ['showCatalogue', page],
  query: () => showCatalogueApi({ page }),
  onError: (e: unknown) => {
    if (e instanceof ApiError) {
      throw e
    }

    throw new ApiError(500, e instanceof Error ? e.message : 'Unknown error')
  },
}))
