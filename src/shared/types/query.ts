import type { Ref, ShallowRef } from 'vue'

export type UseQueryType<T> = {
  item: Ref<T>
  isLoading: Ref<boolean>
  isPending: Ref<boolean>
  error: ShallowRef<Error | null>
}

export type UseQueryTypeArray<T> = Omit<UseQueryType<T>, 'item'> & {
  items: ShallowRef<T[] | undefined>
}
