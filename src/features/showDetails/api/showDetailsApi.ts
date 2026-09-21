import { tvMazeClient } from '@/shared/api/tvMazeClient'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import { throwApiError } from '@/shared/helpers/throwApiError'

export async function showDetailsApi({ id }: { id: number }): Promise<TvMazeShowI> {
  try {
    const PATH = `/shows/${id}`

    const response = await tvMazeClient.get<TvMazeShowI>(PATH)

    return response
  } catch (e) {
    throwApiError(e, 'SHOW_DETAILS')
  }
}
