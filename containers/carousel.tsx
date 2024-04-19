'use client'
import React, { useEffect, useRef, useState } from 'react'

const mockArray = [1, 2, 3, 4, 5]

export const Carousel = () => {
  const [idx, setIdx] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)

  const handleSpotsClick = (id: number) => {
    setIdx(id)

    if (ref.current) ref.current.scrollLeft = id * 375 // 每张图片宽度为375px
  }

  const handleImageClick = (id: number) => {}

  useEffect(() => {
    const element = ref.current
    const scrollHandler = () => {
      if (element) {
        const index = Math.round(element.scrollLeft / 375)
        setIdx(index)
      }
    }

    if (element) element.addEventListener('scroll', scrollHandler)
    return () => {
      if (element) element.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <div>
      {/* carousel */}
      <div
        ref={ref}
        className='scrollbar-hide flex snap-x overflow-x-scroll scroll-smooth whitespace-nowrap'
      >
        {mockArray.map((item, index) => {
          return (
            <div
              key={index}
              className='relative h-[211px] min-w-full snap-start'
              onClick={() => handleImageClick(index)}
            >
              <img
                src={'https://fakeimg.pl/375x211/'}
                alt={`carousel_${index}`}
                width={375}
                height={211}
              />
              {/* <div className=' left-0 top-0 z-20 h-full w-full bg-[black] opacity-40'>
                <h1 className='z-30'>branding 奢侈品策略</h1>
              </div> */}
            </div>
          )
        })}
      </div>
      {/* carousel spots */}
      <div className='flex h-[2.5rem] w-full items-center justify-center gap-[0.75rem] '>
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <div
              key={index}
              className={`h-[0.375rem] w-[0.375rem] rounded-full ${idx !== index ? 'bg-[#E4E4E7]' : 'bg-primary'}`}
              onClick={() => handleSpotsClick(index)}
            />
          )
        })}
      </div>
    </div>
  )
}
