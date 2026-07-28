import { memo, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowDownRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Input, Textarea, Select } from '../ui/Form'
import type { BookingFormData } from '../../lib/types'

const schema = z.object({
  name: z.string().min(2, 'Минимум 2 символа'),
  phone: z.string().min(10, 'Введите корректный телефон'),
  email: z.string().email('Некорректный email').optional().or(z.literal('')),
  date: z.string().min(1, 'Выберите дату'),
  guests: z.string().min(1, 'Укажите количество'),
  message: z.string().optional(),
})

const guestOptions = Array.from({ length: 10 }, (_, i) => {
  const n = i + 1
  return { value: String(n), label: n === 1 ? '1 гость' : n < 5 ? `${n} гостя` : `${n} гостей` }
})

interface BookingFormProps { onSuccess: () => void }

export const BookingForm = memo(function BookingForm({ onSuccess }: BookingFormProps) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BookingFormData>({ resolver: zodResolver(schema) })
  const onSubmit = useCallback(async () => onSuccess(), [onSuccess])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <Input label="Имя" required placeholder="Иван Иванов" error={errors.name?.message} {...register('name')} />
      <Input label="Телефон" required type="tel" placeholder="+7 (___) ___-__-__" error={errors.phone?.message} {...register('phone')} />
      <Input label="Email" type="email" placeholder="ivan@example.ru" error={errors.email?.message} {...register('email')} />
      <div className="grid sm:grid-cols-2 gap-6">
        <Input label="Дата заезда" required type="date" error={errors.date?.message} {...register('date')} />
        <Select label="Гостей" required error={errors.guests?.message} {...register('guests')}>
          <option value="" className="bg-surface">Выберите...</option>
          {guestOptions.map(({ value, label }) => (
            <option key={value} value={value} className="bg-surface">{label}</option>
          ))}
        </Select>
      </div>
      <Textarea label="Пожелания" placeholder="Какая услуга интересует?" {...register('message')} />
      <Button type="submit" variant="outline" loading={isSubmitting} className="w-full">
        Отправить
        <ArrowDownRight size={14} className="ml-2" />
      </Button>
    </form>
  )
})
