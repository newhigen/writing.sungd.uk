export function isoDate(date: Date) {
  return date.toISOString().slice(0, 10)
}

export function excerpt(body = '', max = 150) {
  const lines = body
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !/^(#|>|!|<(?!q>)|\||```|---|\[\^)/.test(l))
    .map((l) => l.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, ''))
  const text = lines
    .slice(0, 3)
    .join(' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[\^[^\]]*\]/g, '')
    .replace(/<cite>.*?<\/cite>/g, '')
    .replace(/<q>/g, '“')
    .replace(/<\/q>/g, '”')
    .replace(/<[^>]+>/g, '')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  return text.length > max ? text.slice(0, max).trimEnd() + '…' : text
}
