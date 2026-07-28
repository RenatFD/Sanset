import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Star, ExternalLink } from 'lucide-react'
import { YANDEX_MAPS_LINK } from '../../lib/constants'

export const ReviewsPreview = memo(function ReviewsPreview() {
  return (
    <section className="border-t border-cream/10 py-16 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <p className="font-mono text-[10px] sm:text-xs text-sunset-300/40 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">02</p>
        <div className="flex items-end justify-between mb-10 sm:mb-14 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-cream tracking-tight">Отзывы</h2>
          <Link to="/reviews" className="inline-flex items-center gap-2 text-cream/30 hover:text-sunset-400/70 transition-colors text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            Все &rarr;
          </Link>
        </div>

        <div className="text-center border border-cream/10 rounded-lg px-6 py-10 sm:p-12">
          <div className="flex items-center justify-center gap-0.5 sm:gap-1 mb-3 sm:mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-sunset-400 text-sunset-400 sm:w-[24px] sm:h-[24px]" />
            ))}
          </div>
          <p className="text-cream/40 text-xs sm:text-sm mb-4 sm:mb-6">Читайте честные отзывы на Яндекс.Картах</p>
          <a
            href={YANDEX_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border border-sunset-400/30 text-sunset-400 hover:bg-sunset-400/10 hover:border-sunset-400 transition-all duration-300 text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] font-medium"
          >
            Открыть Яндекс
            <ExternalLink size={12} className="sm:w-[14px] sm:h-[14px]" />
          </a>
        </div>
      </div>
    </section>
  )
})
