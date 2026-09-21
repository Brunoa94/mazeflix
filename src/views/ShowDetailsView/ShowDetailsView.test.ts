import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { computed, ref } from 'vue'
import ShowDetailsView from './ShowDetailsView.vue'
import type { TvMazeShowI } from '@/shared/types/tvMaze/tvMazeShow'
import { createMockShow } from '@/shared/mock/createMockShow'
import ShowHero from '@/features/showDetails/components/ShowHero/ShowHero.vue'
import ShowGenres from '@/features/showDetails/components/ShowGenres/ShowGenres.vue'
import ShowMetadata from '@/features/showDetails/components/ShowMetadata/ShowMetadata.vue'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { id: '1' } }),
}))

vi.mock('@/features/showDetails/composables/useShowDetails', () => ({
  default: vi.fn(),
}))

import useShowDetails from '@/features/showDetails/composables/useShowDetails'

const mockShow: TvMazeShowI = createMockShow(1, 'Breaking Bad')
const mockRefetch = vi.fn()

describe('ShowDetailsView', () => {
  it('shows loading state', () => {
    vi.mocked(useShowDetails).mockReturnValue({
      isSuspense: computed(() => true),
      isEmpty: computed(() => false),
      item: ref(undefined),
      error: ref(null),
      refetch: mockRefetch,
    })

    const wrapper = mount(ShowDetailsView)

    expect(wrapper.find('.animate-pulse').exists()).toBe(true)
  })

  it('renders show components when loaded', () => {
    vi.mocked(useShowDetails).mockReturnValue({
      isSuspense: computed(() => false),
      isEmpty: computed(() => false),
      item: ref(mockShow),
      error: ref(null),
      refetch: mockRefetch,
    })

    const wrapper = mount(ShowDetailsView)

    expect(wrapper.getComponent(ShowHero).props('show')).toEqual(mockShow)
    expect(wrapper.getComponent(ShowGenres).props('genres')).toEqual(mockShow.genres)
    expect(wrapper.getComponent(ShowMetadata).props('show')).toEqual(mockShow)
  })
})
