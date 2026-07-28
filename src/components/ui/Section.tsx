import { memo, type ReactNode } from 'react'

type SectionBackground = 'white' | 'gray' | 'forest' | 'forest-dark' | 'gradient'

interface SectionProps {
  children: ReactNode
  background?: SectionBackground
  className?: string
  id?: string
  'aria-label'?: string
}

const backgroundClasses: Record<SectionBackground, string> = {
  white: 'bg-cream',
  gray: 'bg-gray-50',
  forest: 'bg-forest-50',
  'forest-dark': 'bg-forest-900',
  gradient: 'bg-gradient-to-b from-forest-900 to-forest-700',
}

export const Section = memo(function Section({
  children,
  background = 'white',
  className = '',
  id,
  'aria-label': ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`py-16 sm:py-20 ${backgroundClasses[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
})
