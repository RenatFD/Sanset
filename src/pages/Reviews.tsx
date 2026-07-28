import { memo } from 'react'
import { Seo } from '../components/ui/Seo'
import { PageHero } from '../components/shared/PageHero'
import { YandexReviewsWidget } from '../components/reviews/YandexReviewsWidget'
import { SEO_REVIEWS } from '../lib/constants'

const Reviews = memo(function Reviews() {
  return (
    <>
      <Seo meta={SEO_REVIEWS} />
      <PageHero title="Отзывы" accent="Отзывы гостей" subtitle="Реальные оценки с Яндекс.Карт" />

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <YandexReviewsWidget />
        </div>
      </section>
    </>
  )
})

export default Reviews
