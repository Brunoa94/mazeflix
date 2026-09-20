import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearchStore = defineStore('search', () => {
  const isSearchOpen = ref(false)

  const openSearch = () => (isSearchOpen.value = true)
  const closeSearch = () => (isSearchOpen.value = false)

  return { isSearchOpen, openSearch, closeSearch }
})
