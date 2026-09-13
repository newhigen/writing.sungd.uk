import type { CollectionEntry } from 'astro:content'

const TECH_TAGS = ['개발', 'Claude', 'Claude Code', 'DevEnv']

export function isTech(post: CollectionEntry<'posts'>) {
  return post.data.category === '기술' || (post.data.tags ?? []).some((tag) => TECH_TAGS.includes(tag))
}

export function kindOf(post: CollectionEntry<'posts'>) {
  return post.data.category === '책' ? '서평' : '글'
}

export function isoDate(date: Date) {
  return date.toISOString().slice(0, 10)
}

export function excerpt(body = '', max = 150) {
  const lines = body
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !/^(#|>|!|<|\||```|---|\[\^)/.test(l))
    .map((l) => l.replace(/^[-*]\s+/, '').replace(/^\d+\.\s+/, ''))
  const text = lines
    .slice(0, 3)
    .join(' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[*_`]/g, '')
  return text.length > max ? text.slice(0, max).trimEnd() + '…' : text
}
