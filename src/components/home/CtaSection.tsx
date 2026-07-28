import { memo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDownRight } from 'lucide-react'
import { Button } from '../ui/Button'

export const CtaSection = memo(function CtaSection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden border-t border-cream/10">
      <div className="absolute inset-0 bg-gradient-to-b from-sunset-500/[0.02] via-transparent to-sunset-500/[0.03]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] sm:w-[700px] sm:h-[700px] bg-sunset-500/[0.06] rounded-full blur-[100px] sm:blur-[150px] animate-glow-strong" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-gold-400/[0.04] rounded-full blur-[80px] sm:blur-[120px] animate-glow-pulse" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <p className="font-mono text-[10px] sm:text-xs text-sunset-300/40 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">03</p>
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-[1fr,auto] items-end">
          <div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-cream tracking-tight leading-[1.05]">
              Забронируйте<br />
              <span className="bg-gradient-to-r from-sunset-400 to-gold-300 bg-clip-text text-transparent">отдых</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:gap-6 items-start">
            <p className="text-cream/40 text-xs sm:text-sm max-w-xs leading-relaxed">
              Оставьте заявку онлайн или позвоните. Отвечаем за минуту.
            </p>
            <Button as={Link} to="/contacts" variant="outline" size="lg"
              className="!border-sunset-400/40 !text-sunset-400 hover:!bg-sunset-400/10 hover:!border-sunset-400 hover:!shadow-[0_0_30px_rgba(249,115,22,0.2)] text-xs sm:text-sm">
              Связаться
              <ArrowDownRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
})
