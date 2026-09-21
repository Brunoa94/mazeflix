interface ReturnProps {
  firstPart: string
  lastPart: string | null
}

export function splitTitle(text: string): ReturnProps {
  const words = text.split(' ')

  if (words.length === 1) return { firstPart: words.join(''), lastPart: null }

  const lastPart = words.pop() ?? ''

  return {
    firstPart: words.join(' '),
    lastPart,
  }
}
