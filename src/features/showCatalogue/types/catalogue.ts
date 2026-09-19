import type { TvMazeGenreType } from '@/shared/types/tvMaze/tvMazeGenre'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'

export type CatalogueType = Map<TvMazeGenreType, TvMazeShowI[]>
