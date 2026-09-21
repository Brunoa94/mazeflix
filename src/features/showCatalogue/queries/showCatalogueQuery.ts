import { defineQueryOptions } from '@pinia/colada'
import { showCatalogueApi } from '../api/showCatalogueApi'
import { ApiError } from '@/shared/types/error'

export const showCatalogQuery = defineQueryOptions(({ page }: { page: number }) => ({
  key: ['showCatalogue', page],
  query: () => showCatalogueApi({ page }),
}))
