import { useEffect } from 'react'
import type { SeoMeta } from '../../lib/types'

interface SeoProps {
  meta: SeoMeta
}

export function Seo({ meta }: SeoProps) {
  useEffect(() => {
    const prevTitle = document.title
    const metaDescription = document.querySelector('meta[name="description"]')

    document.title = meta.title
    metaDescription?.setAttribute('content', meta.description)

    return () => {
      document.title = prevTitle
    }
  }, [meta])

  return null
}
