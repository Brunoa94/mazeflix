import { describe, it, expect } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import ShowList from './ShowList.vue'
import ShowCard from '../ShowCard/ShowCard.vue'
import { createMockShow } from '@/shared/mock/createMockShow.ts'

describe('the ShowList component', () => {
  it('shows the correct number of elements', () => {
    const shows = [
      createMockShow(1, 'Breaking Bad'),
      createMockShow(2, 'Prison Break'),
      createMockShow(3, 'Game of Thrones'),
    ]

    const wrapper = mount(ShowList, {
      props: { items: shows },
      global: { stubs: { RouterLink: RouterLinkStub } },
    })

    expect(wrapper.findAll('li')).toHaveLength(3)
    expect(wrapper.findAll('a')).toHaveLength(3)
  })

  it('shows the list empty', () => {
    const wrapper = mount(ShowList, {
      props: { items: [] },
      global: { stubs: { RouterLink: RouterLinkStub } },
    })

    expect(wrapper.findAll('li')).toHaveLength(0)
    expect(wrapper.findAll('a')).toHaveLength(0)
  })

  it('shows horizontal variant by default', () => {
    const shows = [createMockShow(1, 'Breaking Bad'), createMockShow(2, 'Prison Break')]

    const wrapper = mount(ShowList, {
      props: { items: shows },
    })

    expect(wrapper.find('ul').classes()).toContain('flex')
    expect(wrapper.findAll('li')).toHaveLength(2)
  })

  it('shows grid variant when specified', () => {
    const shows = [createMockShow(1, 'Breaking Bad'), createMockShow(2, 'Prison Break')]

    const wrapper = mount(ShowList, {
      props: { items: shows, variant: 'grid' },
    })

    expect(wrapper.find('ul').classes()).toContain('grid')
    expect(wrapper.findAll('li')).toHaveLength(2)
    expect(wrapper.findAllComponents(ShowCard).every((card) => card.props('fluid'))).toBe(true)
  })
})
