import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import SearchOverlay from './SearchOverlay.vue'
import { useSearchStore } from '@/stores/searchStore'

describe('the SearchOverlay component', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(SearchOverlay, {
      attachTo: document.body,
    })
  })

  afterEach(() => {
    wrapper.unmount()
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

  it('closes the overlay when close button is clicked', async () => {
    const searchStore = useSearchStore()

    searchStore.openSearch()
    await wrapper.vm.$nextTick()

    const closeButton = document.body.querySelector('button[aria-label="Close search"]')
    expect(closeButton).not.toBeNull()

    closeButton?.dispatchEvent(new Event('click'))
    await wrapper.vm.$nextTick()

    expect(searchStore.isSearchOpen).toBe(false)
  })
})
