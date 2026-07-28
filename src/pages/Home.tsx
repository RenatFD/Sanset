import { memo } from 'react'
import { Seo } from '../components/ui/Seo'
import { SEO_HOME } from '../lib/constants'
import { HeroSection, ServicesPreview, ReviewsPreview, CtaSection } from '../components/home'

const Home = memo(function Home() {
  return (
    <>
      <Seo meta={SEO_HOME} />
      <HeroSection />
      <ServicesPreview />
      <ReviewsPreview />
      <CtaSection />
    </>
  )
})

export default Home
