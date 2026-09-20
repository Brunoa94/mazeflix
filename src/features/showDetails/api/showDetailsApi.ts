import { tvMazeClient } from '@/shared/api/tvMazeClient'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'

export async function showDetailsApi({ id }: { id: number }): Promise<TvMazeShowI> {
  const PATH = `/shows/${id}`
  const response = await tvMazeClient.get<TvMazeShowI>(PATH)

  return response
}
