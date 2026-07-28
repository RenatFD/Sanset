import { memo } from 'react'

export const YandexReviewsWidget = memo(function YandexReviewsWidget() {
  return (
    <div className="border border-cream/10 rounded-lg overflow-hidden">
      <iframe
        src="https://yandex.ru/maps-reviews-widget/244654587026?comments"
        width="100%"
        height="500"
        style={{ border: 0 }}
        loading="lazy"
        title="Отзывы на Яндекс.Картах"
      />
    </div>
  )
})
