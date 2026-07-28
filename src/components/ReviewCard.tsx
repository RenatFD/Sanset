import { memo } from 'react'
import { Star } from 'lucide-react'
import type { Review } from '../lib/types'

interface ReviewCardProps extends Review { large?: boolean }

const sourceLabel: Record<Review['source'], string> = { yandex: 'Яндекс', '2gis': '2ГИС' }

export const ReviewCard = memo(function ReviewCard({
  name, rating, text, date, source, avatar, large = false,
}: ReviewCardProps) {
  return (
    <article className={large ? 'md:col-span-2' : ''} aria-label={`Отзыв от ${name}`}>
      <div className="flex items-center gap-3 mb-4">
        <img src={avatar} alt="" loading="lazy" className="w-8 h-8 rounded-full object-cover opacity-60" aria-hidden="true" />
        <div className="min-w-0">
          <p className="text-xs font-medium text-cream/70">{name}</p>
          <p className="text-[10px] text-cream/20">{date}</p>
        </div>
        <span className="ml-auto font-mono text-[10px] text-cream/20 uppercase tracking-wider">{sourceLabel[source]}</span>
      </div>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={10} className={i < rating ? 'text-cream/60' : 'text-cream/10'} />
        ))}
      </div>
      <p className="text-xs text-cream/40 leading-relaxed">{text}</p>
    </article>
  )
})
