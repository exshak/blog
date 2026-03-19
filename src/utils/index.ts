import { type MarkdownHeading } from 'astro'
import { type CollectionEntry, getCollection } from 'astro:content'
import getReadingTime from 'reading-time'

type Post = CollectionEntry<'blog'>

export async function fetchPosts() {
  const posts = await getCollection('blog')
  return posts.map((post: Post) => ({
    ...post,
    ...post.data,
    time: Math.ceil(getReadingTime(post.body || '').minutes),
  }))
}

export function formatDate(date: Date, year = true) {
  if (!year) return date.toLocaleDateString('en-us', { month: 'short', day: 'numeric' })
  return date.toLocaleDateString('en-us', { year: 'numeric', month: 'short', day: 'numeric' })
}

export interface TocItem extends MarkdownHeading {
  children: TocItem[]
}

function injectChild(items: TocItem[], item: TocItem): void {
  const lastItem = items.at(-1)
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item)
  } else {
    return injectChild(lastItem.children, item)
  }
}

export function generateToc(headings: MarkdownHeading[], minHeadingLevel: number, maxHeadingLevel: number) {
  headings = headings.filter(({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel)
  const toc: TocItem[] = []
  for (const heading of headings) injectChild(toc, { ...heading, children: [] })
  return toc
}
