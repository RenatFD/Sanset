import { memo } from 'react'

export const MapWidget = memo(function MapWidget() {
  return (
    <div className="border border-cream/10 mb-8 h-[300px] bg-cream/[0.02]">
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=53.241144%2C56.956770&mode=search&ol=geo&z=16&pt=53.241144,56.956770,pm2rdl"
        className="w-full h-full"
        allowFullScreen
        loading="lazy"
        title="Карта"
      />
    </div>
  )
})
