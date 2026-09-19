export default function useDebouncer(callback: () => void, delay: number = 300) {
  let timeoutId: number | null = null

  const debounced = () => {
    if (timeoutId) clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      callback()
    }, delay)
  }

  return debounced
}