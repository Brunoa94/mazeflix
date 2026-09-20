import { describe, it, expect, vi } from 'vitest'
import { mount, RouterLinkStub } from '@vue/test-utils'
import { ref } from 'vue'
import HomepageView from './HomepageView.vue'
import ShowCatalogue from '@/features/showCatalogue/components/ShowCatalogue.vue'
import { createMockShow } from '@/shared/mock/createMockShow'
import type { CatalogueType } from '@/features/showCatalogue/types/catalogue'

vi.mock('@/features/showCatalogue/composables/useShowCatalogue', () => ({
  default: vi.fn(),
}))

import useShowCatalogue from '@/features/showCatalogue/composables/useShowCatalogue'

describe('HomepageView', () => {
  it('shows loading state', () => {
    vi.mocked(useShowCatalogue).mockReturnValue({
      isLoading: ref(true),
      isPending: ref(false),
      item: ref(new Map()),
      error: ref(null),
    })

    const wrapper = mount(HomepageView)

    expect(wrapper.text()).toContain('Is Loading')
  })

  it('shows error state', () => {
    vi.mocked(useShowCatalogue).mockReturnValue({
      isLoading: ref(false),
      isPending: ref(false),
      item: ref(new Map()),
      error: ref(new Error('Failed')),
    })

    const wrapper = mount(HomepageView)

    expect(wrapper.text()).toContain('Error')
  })

  it('renders catalogue component', () => {
    const breakingBad = createMockShow(1, 'Breaking Bad')
    const catalogue: CatalogueType = new Map([
      ['Drama', [breakingBad]],
      ['Crime', [breakingBad]],
    ])

    vi.mocked(useShowCatalogue).mockReturnValue({
      isLoading: ref(false),
      isPending: ref(false),
      item: ref(catalogue),
      error: ref(null),
    })

    const wrapper = mount(HomepageView)

    expect(wrapper.getComponent(ShowCatalogue).props('catalogue')).toEqual(catalogue)
  })
})
