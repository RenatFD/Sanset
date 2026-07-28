import { memo, useCallback, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { Button } from './ui/Button'
import { NAV_LINKS, PHONE_NUMBER, PHONE_HREF } from '../lib/constants'

export const Header = memo(function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = useCallback(() => setIsOpen(false), [])

  const navLinkClass = (isActive: boolean) =>
    cn(
      'relative px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-medium uppercase tracking-[0.1em] sm:tracking-[0.15em] transition-colors',
      isActive
        ? 'text-sunset-400 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-px after:bg-sunset-400'
        : 'text-cream/40 hover:text-cream/70',
    )

  const mobileNavClass = (isActive: boolean) =>
    cn(
      'text-xl font-medium uppercase tracking-[0.15em] transition-opacity',
      isActive ? 'text-sunset-400' : 'text-cream/30 hover:text-cream/60',
    )

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-safe" role="banner">
        <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 lg:px-10">
          <Link to="/" className="flex items-center gap-2 text-cream font-bold text-base sm:text-lg tracking-tight" aria-label="На главную">
            <span className="font-mono text-xs sm:text-base text-sunset-400/50">BASE</span>
            <span>Сансет</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Основная навигация">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => navLinkClass(isActive)}>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 sm:gap-6">
            <a href={PHONE_HREF} className="text-cream/50 hover:text-sunset-400/70 transition-colors text-[10px] sm:text-xs font-mono tracking-wider">
              {PHONE_NUMBER}
            </a>
            <Button as={Link} to="/contacts" variant="outline" size="sm"
              className="!border-sunset-400/30 !text-sunset-400 hover:!bg-sunset-400/10">
              Бронь
            </Button>
          </div>

          <button type="button" className="lg:hidden p-2 -mr-2 text-cream/70 hover:text-sunset-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-menu"
            aria-label={isOpen ? 'Закрыть' : 'Меню'}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {isOpen && (
        <div id="mobile-menu" className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-2xl flex flex-col justify-center pt-safe" role="navigation">
          <nav className="flex flex-col items-center gap-6">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} onClick={closeMenu} className={({ isActive }) => mobileNavClass(isActive)}>
                {label}
              </NavLink>
            ))}
            <hr className="w-12 border-cream/10" />
            <a href={PHONE_HREF} className="text-cream/50 text-sm font-mono tracking-wider hover:text-sunset-400/70 transition-colors">{PHONE_NUMBER}</a>
            <Button as={Link} to="/contacts" onClick={closeMenu} variant="outline" size="md">
              Забронировать
            </Button>
          </nav>
        </div>
      )}
    </>
  )
})
