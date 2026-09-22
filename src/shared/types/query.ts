import type { ComputedRef, Ref, ShallowRef } from 'vue'
import type { ApiError } from './error'

export type RefetchFn = () => void

export type UseQueryType<T> = {
  item: Ref<T>
  isSuspense: ComputedRef<boolean>
  isEmpty: ComputedRef<boolean>
  error: ShallowRef<ApiError | Error | null>
  refetch: RefetchFn
}

export type UseQueryTypeArray<T> = Omit<UseQueryType<T>, 'item'> & {
  items: ShallowRef<T[] | undefined>
  hasResults: ComputedRef<boolean>
}
