import { memo } from 'react'
import { Link } from 'react-router-dom'
import { PHONE_NUMBER, PHONE_HREF, EMAIL, EMAIL_HREF, ADDRESS } from '../lib/constants'

export const Footer = memo(function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-cream/10" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between text-xs text-cream/40">
          <div>
            <span className="text-cream/70 font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] block mb-4 sm:mb-6 text-sm">Сансет</span>
            <p className="max-w-48 leading-relaxed text-[11px] sm:text-xs">Загородный отдых. Дома, баня, очаг, техника.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12">
            <div>
              <a href={PHONE_HREF} className="hover:text-cream/70 transition-colors block mb-1.5 sm:mb-2 text-[11px] sm:text-xs">{PHONE_NUMBER}</a>
              <a href={EMAIL_HREF} className="hover:text-cream/70 transition-colors block text-[11px] sm:text-xs">{EMAIL}</a>
            </div>
            <div className="text-[11px] sm:text-xs">
              {ADDRESS.split(',').map((part, i) => (
                <span key={i} className="block">{part.trim()}</span>
              ))}
            </div>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <Link to="/services" className="hover:text-cream/70 transition-colors uppercase tracking-wider text-[11px] sm:text-xs">Услуги</Link>
              <Link to="/reviews" className="hover:text-cream/70 transition-colors uppercase tracking-wider text-[11px] sm:text-xs">Отзывы</Link>
              <Link to="/contacts" className="hover:text-cream/70 transition-colors uppercase tracking-wider text-[11px] sm:text-xs">Контакты</Link>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-cream/5 text-cream/20 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
          &copy; {year} Сансет
        </div>
      </div>
    </footer>
  )
})
