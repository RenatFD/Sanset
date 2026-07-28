import type { LucideIcon } from 'lucide-react'

export interface NavLink {
  to: string
  label: string
}

export interface ContactItem {
  icon: LucideIcon
  label: string
  value: string
  href?: string
}

export interface Service {
  icon: LucideIcon
  title: string
  description: string
  price: string
  image: string
}

export interface ServiceDetail extends Service {
  features: readonly string[]
}

export interface Review {
  name: string
  rating: number
  text: string
  date: string
  source: 'yandex' | '2gis'
  avatar: string
}

export interface Advantage {
  text: string
}

export type ReviewSource = 'all' | 'yandex' | '2gis'

export interface BookingFormData {
  name: string
  phone: string
  email?: string
  date: string
  guests: string
  message?: string
}

export interface SeoMeta {
  title: string
  description: string
}
