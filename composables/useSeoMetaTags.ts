export const useSeoMetaTags = (meta: {
  title: string
  description: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}) => {
  useSeoMeta({
    title: meta.title,
    ogTitle: meta.ogTitle ?? meta.title,
    description: meta.description,
    ogDescription: meta.ogDescription ?? meta.description,
    ogImage: meta.ogImage,
    twitterCard: 'summary_large_image',
  })
}
