import type { TvMazeGenreType } from './tvMazeGenre'

interface TvMazeNetworkI {
  id: number
  name: string
  officialSite: string | null
}

interface TvMazeWebChannelI {
  id: number
  name: string
  officialSite: string | null
}

interface TvMazeScheduleI {
  time: string
  days: string[]
}

interface TvMazeImageI {
  medium: string
  original: string
}

interface TvMazeExternalsI {
  tvrage: number | null
  thetvdb: number | null
  imdb: string | null
}

interface TvMazeAverageI {
  average: number | null
}

export interface TvMazeShowI {
  id: number
  url: string
  name: string
  type: string
  language: string | null
  genres: TvMazeGenreType[]
  status: string
  runtime: number | null
  averageRuntime: number | null
  premiered: string | null
  ended: string | null
  officialSite: string | null
  schedule: TvMazeScheduleI
  rating: TvMazeAverageI
  weight: number
  network: TvMazeNetworkI | null
  webChannel: TvMazeWebChannelI | null
  externals: TvMazeExternalsI
  image: TvMazeImageI
  summary: string | null
  updated: number
}
