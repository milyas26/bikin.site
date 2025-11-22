import type { Metadata } from 'next'

const SITE_NAME = 'Muhammad Ilyas'
const SITE_TITLE = 'Muhammad Ilyas — Senior Frontend Engineer'
const SITE_DESCRIPTION = 'Portfolio, blog, dan karya open source dari Muhammad Ilyas.'
const DEFAULT_IMAGE = '/img/profile.jpeg'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://bikin.site'

export function buildMetadata({
  title,
  description,
  urlPath,
  image = DEFAULT_IMAGE,
  keywords,
}: {
  title: string
  description?: string
  urlPath?: string
  image?: string
  keywords?: string[]
}): Metadata {
  const metadataBase = new URL(SITE_URL)
  const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_TITLE
  const canonical = urlPath ? new URL(urlPath, metadataBase).toString() : metadataBase.toString()

  return {
    title: fullTitle,
    description: description || SITE_DESCRIPTION,
    keywords,
    authors: [{ name: SITE_NAME }],
    metadataBase,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description: description || SITE_DESCRIPTION,
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: image }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description || SITE_DESCRIPTION,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export const defaultSiteMetadata: Metadata = buildMetadata({
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
})