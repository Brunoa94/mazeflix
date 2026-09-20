import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import SearchOverlay from './SearchOverlay.vue'
import { useSearchStore } from '@/stores/searchStore'

vi.mock('../composables/useSearchShow', () => ({
  default: () => ({
    items: { value: [] },
    isLoading: { value: false },
    isPending: { value: false },
    error: { value: null },
  }),
}))

describe('the SearchOverlay component', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const wrapper = mount(SearchOverlay, {
    attachTo: document.body,
  })

  it('dont show the overlay when closed', () => {
    expect(document.body.querySelector('.fixed')).toBeNull()
  })

  it('renders overlay when search is open', async () => {
    const searchStore = useSearchStore()

    searchStore.openSearch()
    await wrapper.vm.$nextTick()

    expect(document.body.querySelector('.fixed')).not.toBeNull()
  })

  it('show input with correct placeholder', async () => {
    const searchStore = useSearchStore()

    searchStore.openSearch()
    await wrapper.vm.$nextTick()

    const input = document.body.querySelector('input')
    expect(input?.getAttribute('placeholder')).toBe('Search by name, genre, category...')
  })

  it('renders aria-label', async () => {
    const searchStore = useSearchStore()

    searchStore.openSearch()
    await wrapper.vm.$nextTick()

    const input = document.body.querySelector('input')
    expect(input?.getAttribute('aria-label')).toBe('Write your search')
  })

  wrapper.unmount()
})
