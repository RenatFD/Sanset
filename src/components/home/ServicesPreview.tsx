import { memo } from 'react'
import { Link } from 'react-router-dom'
import { ServiceCard } from '../ServiceCard'
import { SERVICES_OVERVIEW } from '../../lib/constants'

export const ServicesPreview = memo(function ServicesPreview() {
  return (
    <section className="border-t border-cream/10 py-16 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <p className="font-mono text-[10px] sm:text-xs text-sunset-300/40 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">01</p>
        <div className="flex items-end justify-between mb-10 sm:mb-14 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-cream tracking-tight">Услуги</h2>
          <Link to="/services" className="inline-flex items-center gap-2 text-cream/30 hover:text-sunset-400/70 transition-colors text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            Все &rarr;
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {SERVICES_OVERVIEW.map((service, i) => (
            <Link key={service.title} to="/services" className="block">
              <ServiceCard {...service} index={i} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
})
