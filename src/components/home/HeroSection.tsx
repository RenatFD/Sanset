import { memo, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'
import { Button } from '../ui/Button'
import styles from './HeroSection.module.css'

export const HeroSection = memo(function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      el.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.05)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative min-h-svh flex items-end pb-10 sm:pb-16 overflow-hidden">
      <div
        ref={ref}
        className={`absolute inset-0 z-0 ${styles.heroBg}`}
        style={{ backgroundImage: 'url(/images/sns.png)' }}
      />
      <div className={`absolute inset-0 z-10 ${styles.heroOverlay}`} />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-sunset-500/10 rounded-full blur-[80px] sm:blur-[120px] animate-glow-strong z-10" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-gold-400/8 rounded-full blur-[60px] sm:blur-[100px] animate-glow-pulse z-10" />

      <div className="relative z-20 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-10">
        <p className="font-mono text-[10px] sm:text-xs text-sunset-300/60 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 animate-fade-up">
          Ижевск
        </p>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-cream tracking-tight leading-[0.9] sm:leading-[0.95] animate-fade-up delay-100">
          Сансет
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-8 sm:mt-12 gap-6 animate-fade-up delay-300">
          <p className="text-cream/50 text-xs sm:text-sm lg:text-base max-w-xs sm:max-w-md leading-relaxed">
            Дома. Баня. Очаг. Мототехника. Снегоходы.
          </p>
          <div className="flex gap-3">
            <Button as={Link} to="/contacts" variant="outline" size="lg" className="!border-sunset-400/50 !text-sunset-400 hover:!bg-sunset-400/10 hover:!border-sunset-400 text-xs sm:text-sm">
              Забронировать
            </Button>
            <Button as={Link} to="/services" variant="ghost" size="lg" className="text-xs sm:text-sm">
              Услуги &darr;
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-10 z-20 animate-fade-in delay-700">
        <ArrowDown size={14} className="text-sunset-400/30" />
      </div>
    </section>
  )
})
