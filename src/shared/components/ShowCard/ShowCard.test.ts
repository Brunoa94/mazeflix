import { describe, it, expect } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import ShowCard from './ShowCard.vue'
import { createMockShow } from '@/shared/mock/createMockShow.ts'

describe('the ShowCard component', () => {
  const mockTvMazeShow = createMockShow(1, 'Breaking Bad')

  it('renders TvMaze show name', () => {
    const wrapper = mount(ShowCard, {
      props: { item: mockTvMazeShow },
      global: { stubs: { RouterLink: RouterLinkStub } },
    })

    expect(wrapper.get('h3').text()).toBe('Breaking Bad')
  })

  it('renders show rating', () => {
    const wrapper = mount(ShowCard, {
      props: { item: mockTvMazeShow },
      global: { stubs: { RouterLink: RouterLinkStub } },
    })

    expect(wrapper.get('span').text()).toBe('8')
  })

  it('has link to details page', () => {
    const wrapper = mount(ShowCard, {
      props: { item: mockTvMazeShow },
      global: { stubs: { RouterLink: RouterLinkStub } },
    })

    expect(wrapper.get('a')).toBeDefined()
    expect(wrapper.findComponent(RouterLinkStub).props('to')).toEqual({
      name: 'showDetails',
      params: { id: 1 },
    })
  })
})
