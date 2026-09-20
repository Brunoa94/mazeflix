import { beforeEach, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

beforeEach(() => {
  setActivePinia(createPinia())
})

vi.mock('@pinia/colada', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@pinia/colada')>()
  return {
    ...actual,
    useQuery: () => ({
      data: { value: [] },
      isLoading: { value: false },
      isPending: { value: false },
      error: { value: null },
    }),
  }
})
