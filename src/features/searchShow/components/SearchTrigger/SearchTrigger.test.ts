import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SearchTrigger from './SearchTrigger.vue'
import SearchOverlay from '../SearchOverlay/SearchOverlay.vue'

vi.mock('../SearchOverlay/SearchOverlay.vue', () => ({
  default: {
    props: ['open'],
    emits: ['close'],
    template: '<div v-if="open" data-testid="search-overlay"></div>',
  },
}))

describe('the SearchTrigger component', () => {
  it('shows search button with correct text', () => {
    const wrapper = mount(SearchTrigger)

    expect(wrapper.text()).toContain('Search')
  })

  it('opens search overlay when clicked', async () => {
    const wrapper = mount(SearchTrigger)

    expect(wrapper.find('[data-testid="search-overlay"]').exists()).toBe(false)

    await wrapper.find('button').trigger('click')

    expect(wrapper.find('[data-testid="search-overlay"]').exists()).toBe(true)
  })

  it('has correct aria-label', () => {
    const wrapper = mount(SearchTrigger)

    expect(wrapper.find('button').attributes('aria-label')).toBe('Open search')
  })
})
