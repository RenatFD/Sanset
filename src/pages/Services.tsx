import { memo } from 'react'
import { Seo } from '../components/ui/Seo'
import { PageHero } from '../components/shared/PageHero'
import { ServiceDetailBlock } from '../components/services'
import { SERVICES_DETAILED, SEO_SERVICES } from '../lib/constants'

const Services = memo(function Services() {
  return (
    <>
      <Seo meta={SEO_SERVICES} />
      <PageHero title="Услуги" accent="Услуги и цены" subtitle="Полный список. Выберите подходящий вариант." />

      <section className="py-16 sm:py-24 md:py-32 border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="space-y-20 sm:space-y-28 lg:space-y-36">
            {SERVICES_DETAILED.map((service, i) => (
              <ServiceDetailBlock key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
})

export default Services
