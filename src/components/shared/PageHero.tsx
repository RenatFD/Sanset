import { memo } from 'react'
import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle?: string
  accent?: string
}

export const PageHero = memo(function PageHero({ title, subtitle, accent }: PageHeroProps) {
  return (
    <section className="relative border-b border-cream/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sunset-500/[0.03] via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-[200px] h-[200px] sm:w-[400px] sm:h-[400px] bg-sunset-500/5 rounded-full blur-[60px] sm:blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pt-24 sm:pt-32 pb-16 sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[10px] sm:text-xs text-sunset-400/40 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6">{title}</p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-cream tracking-tight leading-[1.05]">
            {accent || title}
          </h1>
          {subtitle && (
            <p className="mt-4 sm:mt-6 text-cream/40 text-xs sm:text-sm lg:text-base max-w-lg leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  )
})
