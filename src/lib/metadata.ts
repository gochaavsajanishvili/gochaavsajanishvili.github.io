import { Metadata } from 'next'

// TODO: Update metadata

export function constructMetadata({
  title = 'Gocha Avsajanishvili', // TODO: Add a custom title
  description = "I'm dedicated to crafting responsive websites with catchy animations and strong back-end implementation which drive client's digital success.", // TODO: Add a custom description
  image = '/1613159192979.jpg', // TODO: Add a custom image
  icons = '/avatar.svg', // TODO: Add a custom icon
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@chrislonzo'
    },
    icons,
    metadataBase: new URL('https://www.chrislonzo.com'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
