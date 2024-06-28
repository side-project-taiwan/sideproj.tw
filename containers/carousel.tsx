import { Image } from '@/components/image'
import { SPTCarousel } from '@/components/carousel'

const MOCK_CAROUSEL_SRCS = [
  '/homepage/carousel-1.webp',
  '/homepage/carousel-2.webp',
  '/homepage/carousel-3.webp',
] as const

export const Carousel = () => {
  return (
    <SPTCarousel
      slideClassName='!w-[800px] !h-[450px]'
      initialSlide={1}
      centeredSlides
    >
      {MOCK_CAROUSEL_SRCS.map(src => {
        return (
          <Image
            key={src}
            src={src}
            alt='hero banner'
            priority
            fill
            sizes='100vw, (min-width: 800px) 800px'
          />
        )
      })}
    </SPTCarousel>
  )
}
