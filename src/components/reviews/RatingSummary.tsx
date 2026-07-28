import { memo, useMemo } from 'react'
import { Star } from 'lucide-react'

interface RatingSummaryProps { reviews: { rating: number }[] }

export const RatingSummary = memo(function RatingSummary({ reviews }: RatingSummaryProps) {
  const average = useMemo(() => (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1), [reviews])
  return (
    <div className="flex items-baseline gap-3">
      <Star size={24} className="fill-sunset-400 text-sunset-400" />
      <span className="text-5xl font-bold bg-gradient-to-b from-sunset-300 to-sunset-500 bg-clip-text text-transparent tracking-tight">{average}</span>
      <span className="text-xs text-cream/30 uppercase tracking-[0.2em]">{reviews.length}&nbsp;отзывов</span>
    </div>
  )
})
