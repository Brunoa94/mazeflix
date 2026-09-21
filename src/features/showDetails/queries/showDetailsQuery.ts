import { defineQueryOptions } from '@pinia/colada'
import { showDetailsApi } from '../api/showDetailsApi'

interface Props {
  id: number
}

export const showDetailsQuery = defineQueryOptions(({ id }: Props) => ({
  key: ['showDetails', id],
  query: () => showDetailsApi({ id }),
}))
