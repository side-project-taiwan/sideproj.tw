import { PAGE_CATEGORIES } from '@/constants/category'
import React from 'react'

type SectionTitleProps = Record<'type', keyof typeof PAGE_CATEGORIES>

export const SectionTitle = (props: SectionTitleProps) => {
  const { type } = props

  const [title, ...rest] = PAGE_CATEGORIES[type]
  const subTitle = rest.join('')

  return (
    <section className='flex h-[2.25rem] items-center gap-[0.5rem]'>
      <div className='flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full bg-primary text-[1.25rem] leading-[1.75rem] text-[white]'>
        {title}
      </div>
      <div className='text-[1.25rem] font-[600] leading-[1.75rem]'>
        {subTitle}
      </div>
    </section>
  )
}
