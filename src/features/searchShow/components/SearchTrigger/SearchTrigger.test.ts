import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import SearchTrigger from './SearchTrigger.vue'
import { useSearchStore } from '@/stores/searchStore'

vi.mock('./SearchOverlay.vue', () => ({
  default: { template: '<div data-testid="search-overlay"></div>' },
}))

describe('the SearchTrigger component', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('shows search button with correct text', () => {
    const wrapper = mount(SearchTrigger)

    expect(wrapper.text()).toContain('Search')
  })

  it('opens search overlay when clicked', async () => {
    const wrapper = mount(SearchTrigger)
    const searchStore = useSearchStore()

    expect(searchStore.isSearchOpen).toBe(false)

    await wrapper.find('button').trigger('click')

    expect(searchStore.isSearchOpen).toBe(true)
  })

  it('has correct aria-label', () => {
    const wrapper = mount(SearchTrigger)

    expect(wrapper.find('button').attributes('aria-label')).toBe('Open search')
  })
})
