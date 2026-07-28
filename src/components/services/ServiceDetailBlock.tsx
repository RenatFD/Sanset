import { memo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowDownRight } from 'lucide-react'
import { Button } from '../ui/Button'
import type { ServiceDetail } from '../../lib/types'

interface ServiceDetailProps { service: ServiceDetail; index: number }

export const ServiceDetailBlock = memo(function ServiceDetailBlock({ service, index }: ServiceDetailProps) {
  const even = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col ${even ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 sm:gap-10 lg:gap-16`}
    >
      <div className="lg:w-1/2">
        <div className="relative overflow-hidden border border-cream/10 hover:border-sunset-400/20 transition-colors duration-500">
          <img src={service.image} alt={service.title} loading={index > 1 ? 'lazy' : undefined}
            className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover opacity-80 hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 font-mono text-[9px] sm:text-[10px] text-sunset-400/70 bg-surface/80 px-2 py-0.5 backdrop-blur">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-3">
          <service.icon size={16} className="text-sunset-400/60 shrink-0" />
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-cream tracking-tight">{service.title}</h2>
        </div>
        <p className="text-cream/40 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{service.description}</p>
        <div className="flex items-baseline gap-2 mb-6 sm:mb-8">
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-sunset-400 to-gold-400 bg-clip-text text-transparent tracking-tight">
            {service.price}
          </span>
        </div>
        <div className="border-t border-cream/10 pt-4 sm:pt-6 mb-6 sm:mb-8">
          <p className="font-mono text-[9px] sm:text-[10px] text-sunset-300/40 uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4">Спецификация</p>
          <div className="grid gap-1.5 sm:gap-2 sm:grid-cols-2">
            {service.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-[11px] sm:text-xs text-cream/50">
                <span className="w-1 h-1 bg-sunset-400/60 rounded-full shrink-0" />
                {f}
              </div>
            ))}
          </div>
        </div>
        <div>
          <Button as={Link} to="/contacts" variant="outline" size="md"
            className="!border-sunset-400/30 !text-sunset-400 hover:!bg-sunset-400/10 hover:!border-sunset-400">
            Забронировать
            <ArrowDownRight size={14} className="ml-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
})
