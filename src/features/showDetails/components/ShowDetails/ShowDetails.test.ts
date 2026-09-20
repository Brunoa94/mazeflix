import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ShowDetails from './ShowDetails.vue'
import ShowHero from '../ShowHero/ShowHero.vue'
import ShowGenres from '../ShowGenres/ShowGenres.vue'
import ShowMetadata from '../ShowMetadata/ShowMetadata.vue'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import { createMockShow } from '@/shared/mock/createMockShow.ts'

describe('the ShowDetails component', () => {
  const tvMazeMockShow: TvMazeShowI = createMockShow(1, 'Breaking Bad')

  const wrapper = shallowMount(ShowDetails, {
    props: { show: tvMazeMockShow },
  })

  it('receives props for hero', () => {
    const hero = wrapper.getComponent(ShowHero)
    expect(hero.props('show')).toEqual(tvMazeMockShow)
  })

  it('receives props for genres', () => {
    const genres = wrapper.getComponent(ShowGenres)
    expect(genres.props('genres')).toEqual(tvMazeMockShow.genres)
  })

  it('receives props for metadata', () => {
    const metadata = wrapper.getComponent(ShowMetadata)
    expect(metadata.props('show')).toEqual(tvMazeMockShow)
  })
})
