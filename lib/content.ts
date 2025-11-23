import path from 'node:path'

type Item = {
  slug: string
  title: string
  date?: string
  tags?: string[]
  summary?: string
  link?: string
}

function readDir(): Item[] {
  return []
}

export function getOpenSourceList(): Item[] {
  return readDir()
}

export function getPortfolioList(): Item[] {
  return readDir()
}

export function getBlogList(): Item[] {
  return readDir()
}