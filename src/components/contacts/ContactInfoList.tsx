import { memo } from 'react'
import { CONTACT_ITEMS } from '../../lib/constants'

export const ContactInfoList = memo(function ContactInfoList() {
  return (
    <div className="space-y-0.5">
      {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
        <div key={label} className="flex items-center gap-3 py-3 border-b border-cream/5 text-xs">
          <Icon size={14} className="text-cream/20 shrink-0" aria-hidden="true" />
          <span className="text-cream/20 uppercase tracking-[0.15em] w-24">{label}</span>
          {href ? (
            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-cream/50 hover:text-cream/80 transition-colors truncate">
              {value}
            </a>
          ) : (
            <span className="text-cream/50 truncate">{value}</span>
          )}
        </div>
      ))}
    </div>
  )
})
