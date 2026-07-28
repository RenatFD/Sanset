import { memo, useCallback, useState } from 'react'
import { Seo } from '../components/ui/Seo'
import { PageHero } from '../components/shared/PageHero'
import { MapWidget, ContactInfoList, BookingForm, BookingSuccess } from '../components/contacts'
import { SEO_CONTACTS } from '../lib/constants'

const Contacts = memo(function Contacts() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleSuccess = useCallback(() => setIsSubmitted(true), [])

  return (
    <>
      <Seo meta={SEO_CONTACTS} />
      <PageHero title="Контакты" accent="и бронь" subtitle="Оставьте заявку — перезвоним через 15 минут" />

      <section className="py-16 sm:py-24 md:py-32 border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid gap-12 sm:gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-cream mb-6 sm:mb-8 tracking-tight">Заявка</h2>
              {isSubmitted ? <BookingSuccess /> : <BookingForm onSuccess={handleSuccess} />}
            </div>
            <div>
              <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-cream mb-6 sm:mb-8 tracking-tight">Где мы</h2>
              <MapWidget />
              <ContactInfoList />
            </div>
          </div>
        </div>
      </section>
    </>
  )
})

export default Contacts
