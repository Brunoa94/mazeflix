import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { computed, ref } from 'vue'
import HomepageView from './HomepageView.vue'
import ShowCatalogue from '@/features/showCatalogue/components/ShowCatalogue.vue'
import ShowCatalogueShimmer from '@/features/showCatalogue/components/ShowCatalogueShimmer.vue'
import { createMockShow } from '@/shared/mock/createMockShow'
import type { CatalogueType } from '@/features/showCatalogue/types/catalogue'

vi.mock('@/features/showCatalogue/composables/useShowCatalogue', () => ({
  default: vi.fn(),
}))

import useShowCatalogue from '@/features/showCatalogue/composables/useShowCatalogue'

const mockRefetch = vi.fn()

describe('HomepageView', () => {
  it('shows loading state', () => {
    vi.mocked(useShowCatalogue).mockReturnValue({
      isSuspense: computed(() => true),
      isEmpty: computed(() => false),
      item: ref(new Map()),
      error: ref(null),
      refetch: mockRefetch,
    })

    const wrapper = mount(HomepageView)

    expect(wrapper.findComponent(ShowCatalogueShimmer).exists()).toBe(true)
  })

  it('shows error state', () => {
    vi.mocked(useShowCatalogue).mockReturnValue({
      isSuspense: computed(() => false),
      isEmpty: computed(() => true),
      item: ref(new Map()),
      error: ref(new Error('Failed')),
      refetch: mockRefetch,
    })

    const wrapper = mount(HomepageView)

    expect(wrapper.text()).toContain('Failed')
  })

  it('renders catalogue component', () => {
    const breakingBad = createMockShow(1, 'Breaking Bad')
    const catalogue: CatalogueType = new Map([
      ['Drama', [breakingBad]],
      ['Crime', [breakingBad]],
    ])

    vi.mocked(useShowCatalogue).mockReturnValue({
      isSuspense: computed(() => false),
      isEmpty: computed(() => false),
      item: ref(catalogue),
      error: ref(null),
      refetch: mockRefetch,
    })

    const wrapper = mount(HomepageView)

    expect(wrapper.getComponent(ShowCatalogue).props('catalogue')).toEqual(catalogue)
  })
})
