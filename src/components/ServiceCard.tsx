import { memo, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import type { Service } from '../lib/types'

interface ServiceCardProps extends Service { index: number }

export const ServiceCard = memo(function ServiceCard({
  icon: Icon, title, description, price, image, index,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const card = cardRef.current
    if (!card || window.innerWidth < 768) return
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) scale3d(1.02,1.02,1.02)`
    card.style.transition = 'transform 0.1s ease-out'
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(1000px) rotateY(0) rotateX(0) scale3d(1,1,1)'
    card.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
  }, [])

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group border border-cream/10 hover:border-sunset-400/30 transition-all duration-500 cursor-pointer"
      style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
    >
      <div className="aspect-[3/2] overflow-hidden bg-surface">
        <img src={image} alt={title} loading="lazy"
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2 sm:mb-4">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="font-mono text-[9px] sm:text-xs text-sunset-400/40 group-hover:text-sunset-400/70 transition-colors">
              0{index + 1}
            </span>
            <h3 className="text-sm sm:text-base font-semibold text-cream">{title}</h3>
          </div>
          <Icon size={16} className="sm:w-[20px] sm:h-[20px] text-cream/20 group-hover:text-sunset-400/50 transition-colors shrink-0" />
        </div>
        <p className="text-[11px] sm:text-sm text-cream/30 leading-relaxed mb-3 sm:mb-4 line-clamp-2">{description}</p>
        <div className="w-8 sm:w-10 h-px bg-cream/10 mb-3 sm:mb-4 group-hover:w-12 sm:group-hover:w-16 group-hover:bg-sunset-400/40 transition-all duration-500" />
        <span className="text-sm sm:text-base font-bold text-sunset-400/80 group-hover:text-sunset-400 transition-colors">{price}</span>
      </div>
    </motion.article>
  )
})
