import { memo } from 'react'

interface ReviewFilterBarProps { activeFilter: 'all' | 'yandex' | '2gis'; onFilterChange: (f: 'all' | 'yandex' | '2gis') => void }

const options = [
  { value: 'all' as const, label: 'Все' },
  { value: 'yandex' as const, label: 'Яндекс' },
  { value: '2gis' as const, label: '2ГИС' },
]

export const ReviewFilterBar = memo(function ReviewFilterBar({ activeFilter, onFilterChange }: ReviewFilterBarProps) {
  return (
    <div className="flex gap-1" role="radiogroup" aria-label="Фильтр">
      {options.map(({ value, label }) => (
        <button key={value} type="button" role="radio" aria-checked={activeFilter === value}
          onClick={() => onFilterChange(value)}
          className={`px-5 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
            activeFilter === value
              ? 'text-sunset-400 border-b border-sunset-400'
              : 'text-cream/25 hover:text-cream/50'
          }`}>
          {label}
        </button>
      ))}
    </div>
  )
})

export const ReviewExternalLinks = memo(function ReviewExternalLinks() {
  return (
    <div className="flex gap-6">
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-xs text-cream/25 hover:text-sunset-400/60 transition-colors uppercase tracking-[0.15em]">Яндекс &rarr;</a>
      <a href="#" target="_blank" rel="noopener noreferrer" className="text-xs text-cream/25 hover:text-sunset-400/60 transition-colors uppercase tracking-[0.15em]">2ГИС &rarr;</a>
    </div>
  )
})
