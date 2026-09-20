import DOMPurify from 'dompurify'

const ALLOWED_TAGS = ['br', 'b', 'strong', 'i', 'em']

export function sanitizeHtml(value: string | null | undefined): string {
  return DOMPurify.sanitize(value ?? '', {
    ALLOWED_TAGS,
  })
}
