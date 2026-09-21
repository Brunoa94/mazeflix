import { defineQueryOptions } from '@pinia/colada'
import { showCatalogueApi } from '../api/showCatalogueApi'

export const showCatalogQuery = defineQueryOptions(({ page }: { page: number }) => ({
  key: ['showCatalogue', page],
  query: () => showCatalogueApi({ page }),
}))
