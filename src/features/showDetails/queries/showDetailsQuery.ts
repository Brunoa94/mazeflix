import { defineQueryOptions } from '@pinia/colada'
import { showDetailsApi } from '../api/showDetailsApi'

export const showDetailsQuery = defineQueryOptions(({ id }: { id: number }) => ({
  key: ['showDetails', id],
  query: () => showDetailsApi({ id }),
}))
