'use client'
import { Children, type PropsWithChildren, useRef, useState } from 'react'
import { Swiper, SwiperSlide, type SwiperProps } from 'swiper/react'
import SwiperCore from 'swiper'
import { cn } from '@/libs/utils'
import { SPTArrow } from './arrow'
import { SPTPagination } from './pagination'
import 'swiper/css'

type Props = PropsWithChildren<
  Omit<SwiperProps, 'navigation' | 'pagination'> &
    Partial<{
      wrapperClassName: string
      slideClassName: string
      absoluteArrow: boolean
    }>
>

export const SPTCarousel = ({
  absoluteArrow = true,
  wrapperClassName,
  slideClassName,
  children,
  onBeforeInit,
  onAfterInit,
  onSlideChange,
  ...swieprProps
}: Props) => {
  const swiperRef = useRef<SwiperCore>()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isInit, setIsInit] = useState(false)
  const childCount = Children.count(children)
  const showArrow = childCount > 1
  const isBeginning = activeIndex === 0
  const isEnd = activeIndex === childCount - 1

  const onPrevious = () => swiperRef.current?.slidePrev()

  const onNext = () => swiperRef.current?.slideNext()

  const onSlideTo = (index: number) => () => swiperRef.current?.slideTo(index)

  return (
    <div
      className={cn(
        'transition-opacity duration-300 ease-in-out',
        isInit ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div className={cn('relative mb-4 flex items-center', wrapperClassName)}>
        {showArrow && (
          <SPTArrow
            direction='previous'
            absoluteArrow={absoluteArrow}
            disabled={isBeginning}
            onClick={onPrevious}
          />
        )}
        <Swiper
          wrapperTag='ul'
          slidesPerView='auto'
          spaceBetween={16}
          cssMode
          grabCursor
          autoHeight
          simulateTouch
          centeredSlides
          watchSlidesProgress
          {...swieprProps}
          onBeforeInit={swiper => {
            setIsInit(false)
            swiperRef.current = swiper
            if (onBeforeInit) onBeforeInit(swiper)
          }}
          onAfterInit={swiper => {
            setIsInit(true)
            if (onAfterInit) onAfterInit(swiper)
          }}
          onSlideChange={swiper => {
            setActiveIndex(swiper.realIndex)
            if (onSlideChange) onSlideChange(swiper)
          }}
        >
          {Children.map(children, child => (
            <SwiperSlide tag='li' className={cn('relative', slideClassName)}>
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
        {showArrow && (
          <SPTArrow
            direction='next'
            absoluteArrow={absoluteArrow}
            disabled={isEnd}
            onClick={onNext}
          />
        )}
      </div>
      <SPTPagination
        currentIndex={swiperRef.current?.realIndex ?? 0}
        length={childCount}
        onClick={onSlideTo}
      />
    </div>
  )
}
