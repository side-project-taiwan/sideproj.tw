'use client'
import { useEffect, useRef, useState } from 'react'
import { cn } from '@/libs/utils'
import { Icon } from '@/components/icon'

const mockArray = [1, 2, 3, 4, 5]

export const Carousel = () => {
  const [idx, setIdx] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)

  const handleSpotsClick = (id: number) => {
    setIdx(id)

    if (ref.current) ref.current.scrollLeft = id * 375 // 每张图片宽度为375px
  }

  const handleImageClick = (_id: number) => {}

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
  }, [ref.current])

  return (
    <>
      {/* carousel */}
      <div
        ref={ref}
        className='mb-3 flex snap-x overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide'
      >
        {mockArray.map((_, index) => {
          return (
            <div
              key={index}
              className='relative h-[211px] min-w-full snap-start'
              onClick={() => handleImageClick(index)}
            >
              <Icon type='logo-2' width={375} height={211} />
              {/* <div className=' left-0 top-0 z-20 h-full w-full bg-[black] opacity-40'>
                <h1 className='z-30'>branding 奢侈品策略</h1>
              </div> */}
            </div>
          )
        })}
      </div>
      {/* carousel spots */}
      <ul className='m-0 flex h-2 w-full list-none items-center justify-center gap-x-3 p-0'>
        {[1, 2, 3, 4, 5].map((_, index) => {
          return (
            <li
              key={index}
              className={cn(
                'h-2 w-2 rounded-full',
                idx === index ? 'bg-blue-600' : 'bg-zinc-200',
              )}
              onClick={() => handleSpotsClick(index)}
            />
          )
        })}
      </ul>
    </>
  )
}
