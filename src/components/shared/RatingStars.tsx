import { memo, useMemo } from 'react'
import { Star } from 'lucide-react'

interface RatingStarsProps {
  rating: number
  size?: number
  className?: string
}

export const RatingStars = memo(function RatingStars({ rating, size = 16, className = '' }: RatingStarsProps) {
  const stars = useMemo(
    () =>
      Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          aria-hidden="true"
          className={i < rating ? 'fill-warm-400 text-warm-400' : 'text-gray-200'}
        />
      )),
    [rating, size],
  )

  return (
    <span className={`flex gap-0.5 ${className}`} aria-label={`${rating} из 5 звёзд`}>
      {stars}
    </span>
  )
})
