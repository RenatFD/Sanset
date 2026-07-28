import { memo, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { cn } from '../../lib/utils'

type ButtonVariant = 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps { variant?: ButtonVariant; size?: ButtonSize; loading?: boolean; disabled?: boolean }

type ButtonAsButton = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; to?: never; href?: never }
type ButtonAsLink = ButtonBaseProps & LinkProps & { as: typeof Link; to: string; href?: never }
type ButtonAsAnchor = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string; to?: never }
type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor

const variants: Record<ButtonVariant, string> = {
  outline: 'border border-cream/20 text-cream/70 hover:text-cream hover:border-sunset-400/40 hover:bg-sunset-400/5',
  ghost: 'text-cream/40 hover:text-cream hover:bg-cream/5',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-xs tracking-[0.15em]',
  md: 'px-7 py-3 text-xs tracking-[0.15em]',
  lg: 'px-10 py-4 text-sm tracking-[0.15em]',
}

export const Button = memo(function Button({
  variant = 'outline',
  size = 'md',
  loading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center font-medium uppercase transition-all duration-300',
    'focus-visible:outline-2 focus-visible:outline-sunset-400/50 focus-visible:outline-offset-2',
    'disabled:opacity-30 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className,
  )

  if (props.as === Link) {
    const { as: _, ...linkProps } = props as ButtonAsLink
    return <Link className={classes} {...linkProps}>{loading ? <Spinner /> : children}</Link>
  }
  if (props.as === 'a') {
    const { as: _, ...anchorProps } = props as ButtonAsAnchor
    return <a className={classes} {...anchorProps}>{loading ? <Spinner /> : children}</a>
  }
  const { as: __, ...btnProps } = props as ButtonAsButton
  return <button type="button" className={classes} disabled={disabled || loading} {...btnProps}>{loading ? <Spinner /> : children}</button>
})

function Spinner() {
  return (
    <svg className="animate-spin h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  )
}
