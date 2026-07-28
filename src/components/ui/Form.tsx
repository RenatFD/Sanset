import { memo, forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes, type TextareaHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'
import styles from './Form.module.css'

const base = 'w-full bg-transparent border-b border-cream/10 px-0 py-3 text-sm text-cream placeholder:text-cream/20 focus:border-cream/30 focus:outline-none transition-colors'

export const Input = memo(forwardRef<HTMLInputElement, InputProps>(function Input({ label, error, className, id, ...props }, ref) {
  const iid = id || label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div>
      {label && (
        <label htmlFor={iid} className="block text-[10px] text-cream/20 uppercase tracking-[0.2em] mb-2">
          {label}{props.required && ' *'}
        </label>
      )}
      <input ref={ref} id={iid} className={cn(base, error && 'border-red-500/30', className)}
        aria-invalid={!!error} aria-describedby={error ? `${iid}-error` : undefined} {...props} />
      {error && <p id={`${iid}-error`} className="text-red-400/70 text-[10px] mt-1 uppercase tracking-wider">{error}</p>}
    </div>
  )
}))

export const Textarea = memo(forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ label, error, className, id, ...props }, ref) {
  const tid = id || label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div>
      {label && <label htmlFor={tid} className="block text-[10px] text-cream/20 uppercase tracking-[0.2em] mb-2">{label}</label>}
      <textarea ref={ref} id={tid} rows={3} className={cn(base, 'resize-none', error && 'border-red-500/30', className)}
        aria-invalid={!!error} aria-describedby={error ? `${tid}-error` : undefined} {...props} />
      {error && <p id={`${tid}-error`} className="text-red-400/70 text-[10px] mt-1 uppercase tracking-wider">{error}</p>}
    </div>
  )
}))

export const Select = memo(forwardRef<HTMLSelectElement, SelectProps>(function Select({ label, error, className, id, children, ...props }, ref) {
  const sid = id || label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div>
      {label && (
        <label htmlFor={sid} className="block text-[10px] text-cream/20 uppercase tracking-[0.2em] mb-2">
          {label}{props.required && ' *'}
        </label>
      )}
      <select ref={ref} id={sid} className={cn(base, 'cursor-pointer appearance-none', styles.selectArrow, error && 'border-red-500/30', className)}
        aria-invalid={!!error} {...props}>
        {children}
      </select>
      {error && <p id={`${sid}-error`} className="text-red-400/70 text-[10px] mt-1 uppercase tracking-wider">{error}</p>}
    </div>
  )
}))

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { label?: string; error?: string }
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { label?: string; error?: string }
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> { label?: string; error?: string }
