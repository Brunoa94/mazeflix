import { defineQueryOptions } from '@pinia/colada'
import { showCatalogueApi } from '../api/showCatalogueApi'

interface Props {
  page: number
}

export const showCatalogQuery = defineQueryOptions(({ page }: Props) => ({
  key: ['showCatalogue', page],
  query: () => showCatalogueApi({ page }),
}))
