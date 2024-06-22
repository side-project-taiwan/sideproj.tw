import { Image } from '@/components/image'
import { SPTCarousel } from '@/components/carousel'

const MOCK_CAROUSEL_SRCS = [
  '/homepage/carousel-1.webp',
  '/homepage/carousel-2.webp',
  '/homepage/carousel-3.webp',
] as const

export const Carousel = () => {
  return (
    <SPTCarousel>
      {MOCK_CAROUSEL_SRCS.map(src => {
        return (
          <Image
            key={src}
            src={src}
            width={1200}
            height={450}
            alt='placeholder'
            className='object-fit tablet:max-w-[800px]'
          />
        )
      })}
    </SPTCarousel>
  )
}
