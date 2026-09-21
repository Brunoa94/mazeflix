import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import { ref } from 'vue'
import SearchOverlay from './SearchOverlay.vue'

vi.mock('vue-router', () => ({
  useRouter: () => ({
    currentRoute: ref({ path: '/' }),
  }),
}))

describe('the SearchOverlay component', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(SearchOverlay, {
      props: { open: false },
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
    await wrapper.setProps({ open: true })

    expect(document.body.querySelector('.fixed')).not.toBeNull()
  })

  it('show input with correct placeholder', async () => {
    await wrapper.setProps({ open: true })

    const input = document.body.querySelector('input')
    expect(input?.getAttribute('placeholder')).toBe('Search shows by name...')
  })

  it('renders aria-label', async () => {
    await wrapper.setProps({ open: true })

    const input = document.body.querySelector('input')
    expect(input?.getAttribute('aria-label')).toBe('Write your search')
  })

  it('emits close when close button is clicked', async () => {
    await wrapper.setProps({ open: true })

    const closeButton = document.body.querySelector('button[aria-label="Close search"]')
    expect(closeButton).not.toBeNull()

    closeButton?.dispatchEvent(new Event('click'))
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('close')).toHaveLength(1)
  })
})
