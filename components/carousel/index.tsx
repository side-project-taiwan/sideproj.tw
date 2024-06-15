'use client'
import { useState, useEffect, Children, type PropsWithChildren } from 'react'
import { cn } from '@/libs/utils'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import { SPTCarouselPaginaiton } from './pagination'

const CAROUSEL_OPTION = { loop: true } as const
const CAROUSEL_STYLE = {
  tablet: {
    carouselItem: 'tablet:basis-[calc(800px+3rem)]',
    arrowPrev: 'tablet:left-[calc((100vw-800px)/2-3rem)] tablet:flex',
    arrowNext: 'tablet:right-[calc((100vw-800px)/2-3rem)] tablet:flex',
  },
} as const

type Props = PropsWithChildren<{}>

export const SPTCarousel = ({ children }: Props) => {
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0)

  const onPaginationClick = (index: number) => {
    if (index === currentIndex) return
    if (!api) return
    api.scrollTo(index)
  }

  useEffect(() => {
    if (!api) return
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap())
    }
    api.on('select', onSelect)

    return () => {
      api.off('select', onSelect)
    }
  }, [api])

  return (
    <Carousel setApi={setApi} opts={CAROUSEL_OPTION}>
      <CarouselContent>
        {Children.map(children, (child, index) => (
          <CarouselItem
            key={index}
            className={cn(
              CAROUSEL_STYLE.tablet.carouselItem,
              'opacity-0 transition-opacity',
              api && (currentIndex === index ? 'opacity-100' : 'opacity-50'),
            )}
          >
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
      <SPTCarouselPaginaiton
        currentIndex={currentIndex}
        length={Children.count(children)}
        onClick={onPaginationClick}
        className='mt-5'
      />
      <CarouselPrevious
        className={cn(CAROUSEL_STYLE.tablet.arrowPrev, 'hidden')}
      />
      <CarouselNext className={cn(CAROUSEL_STYLE.tablet.arrowNext, 'hidden')} />
    </Carousel>
  )
}
