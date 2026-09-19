import { tvMazeClient } from '@/shared/api/tvMazeClient'
import type { TvMazeGenreType } from '@/shared/types/tvMaze/tvMazeGenre'

import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import type { CatalogueType } from '../types/catalogue'
import { mapTvMazeShowToCatalogue } from '../mappers/mapTvMazeShowToCatalogue'

export async function showCatalogueApi({ page }: { page: number }): Promise<TvMazeShowI[]> {
  const urlParams = new URLSearchParams()
  urlParams.append('page', String(page))

  const PATH = `/shows?${urlParams.toString()}`

  const response = await tvMazeClient.get<TvMazeShowI[]>(PATH)

  return response
}
