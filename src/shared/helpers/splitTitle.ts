export function splitTitle(text: string): { firstPart: string; lastPart: string } {
  const words = text.split(' ')

  if (words.length === 1) {
    const midpoint = Math.ceil(text.length / 2)
    return {
      firstPart: text.slice(0, midpoint),
      lastPart: text.slice(midpoint),
    }
  }

  const lastPart = words.pop() ?? ''
  return {
    firstPart: words.join(' '),
    lastPart,
  }
}
