import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import ShowCatalogue from './ShowCatalogue.vue'
import Heading from '@/shared/components/Heading/Heading.vue'
import ShowList from '@/shared/components/ShowList/ShowList.vue'
import type { CatalogueType } from '../types/catalogue'
import { createMockShow } from '@/shared/mock/createMockShow.ts'

describe('the ShowCatalogue component', () => {
  const createMockCatalogue = (): CatalogueType => {
    return new Map([
      ['Drama', [createMockShow(1, 'Breaking Bad'), createMockShow(2, 'The Wire')]],
      ['Comedy', [createMockShow(3, 'The Office'), createMockShow(4, 'Parks and Recreation')]],
    ])
  }

  it('renders a section for each genre', () => {
    const catalogue = createMockCatalogue()

    const wrapper = shallowMount(ShowCatalogue, {
      props: { catalogue },
    })

    const sections = wrapper.findAll('section')
    expect(sections).toHaveLength(2)
  })

  it('shows a heading for each genre', () => {
    const catalogue = createMockCatalogue()

    const wrapper = shallowMount(ShowCatalogue, {
      props: { catalogue },
      global: { renderStubDefaultSlot: true },
    })

    const headings = wrapper.findAllComponents(Heading)

    expect(headings).toHaveLength(2)
  })

  it('passes the correct shows to each ShowList', () => {
    const catalogue = createMockCatalogue()

    const wrapper = shallowMount(ShowCatalogue, {
      props: { catalogue },
    })

    const showLists = wrapper.findAllComponents(ShowList)
    const allItems = showLists.map((list) => list.props('items'))

    expect(showLists).toHaveLength(2)
    expect(allItems).toContainEqual(catalogue.get('Drama'))
    expect(allItems).toContainEqual(catalogue.get('Comedy'))
  })

  it('shows nothing when catalogue is empty', () => {
    const catalogue: CatalogueType = new Map()

    const wrapper = shallowMount(ShowCatalogue, {
      props: { catalogue },
    })

    expect(wrapper.findAll('section')).toHaveLength(0)
    expect(wrapper.findAllComponents(ShowList)).toHaveLength(0)
  })

  it('sets correct aria-labelledby for accessibility', () => {
    const catalogue = createMockCatalogue()

    const wrapper = shallowMount(ShowCatalogue, {
      props: { catalogue },
    })

    const sections = wrapper.findAll('section')
    expect(sections[0].attributes('aria-labelledby')).toBe('section-Drama')
    expect(sections[1].attributes('aria-labelledby')).toBe('section-Comedy')
  })

  it('sets correct id on headings for accessibility', () => {
    const catalogue = createMockCatalogue()

    const wrapper = shallowMount(ShowCatalogue, {
      props: { catalogue },
    })

    const headings = wrapper.findAllComponents(Heading)
    expect(headings[0].attributes('id')).toBe('section-Drama')
    expect(headings[1].attributes('id')).toBe('section-Comedy')
  })
})
