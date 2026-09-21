import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import type { CatalogueType } from '../types/catalogue'

export function mapTvMazeShowToCatalogue({
  tvMazeShows,
}: {
  tvMazeShows: TvMazeShowI[]
}): CatalogueType {
  const genresMap = new Map<string, TvMazeShowI[]>()

  tvMazeShows.forEach((show: TvMazeShowI) => {
    show.genres.forEach((genre: string) => {
      const existingGenre = genresMap.get(genre)

      if (existingGenre) {
        existingGenre.push(show)
        return
      }

      genresMap.set(genre, [show])
    })
  })

  genresMap.forEach((shows) => {
    shows.sort((a, b) => (b.rating?.average ?? 0) - (a.rating?.average ?? 0))
  })

  return genresMap
}
