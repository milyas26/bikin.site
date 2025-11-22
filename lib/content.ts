import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

type Item = {
  slug: string
  title: string
  date?: string
  tags?: string[]
  summary?: string
}

function readDir(dir: string): Item[] {
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'))
  return files.map(file => {
    const slug = file.replace(/\.mdx$/, '')
    const full = path.join(dir, file)
    const src = fs.readFileSync(full, 'utf8')
    const { data } = matter(src)
    return {
      slug,
      title: data.title ?? slug,
      date: data.date,
      tags: data.tags,
      summary: data.summary,
    }
  }).sort((a, b) => (b.date?.localeCompare(a.date || '') || 0))
}

export function getOpenSourceList(): Item[] {
  return readDir(path.join(process.cwd(), 'app', 'opensources', 'content'))
}

export function getPortfolioList(): Item[] {
  return readDir(path.join(process.cwd(), 'app', 'portfolios', 'content'))
}

export function getBlogList(): Item[] {
  const blogDir = path.join(process.cwd(), 'app', 'blog')
  if (!fs.existsSync(blogDir)) return []
  const entries = fs.readdirSync(blogDir)
  const mdxFiles = entries
    .map(entry => path.join(blogDir, entry, 'page.mdx'))
    .filter(p => fs.existsSync(p))
  return mdxFiles.map(file => {
    const slug = path.basename(path.dirname(file))
    const src = fs.readFileSync(file, 'utf8')
    const { data } = matter(src)
    return {
      slug,
      title: data.title ?? slug,
      date: data.date,
      tags: data.tags,
      summary: data.summary,
    }
  }).sort((a, b) => (b.date?.localeCompare(a.date || '') || 0))
}