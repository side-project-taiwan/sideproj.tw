import { PAGE_CATEGORIES } from '@/constants/category'
import { twMerge } from '@/libs/utils'

type SectionTitleProps = {
  type: keyof typeof PAGE_CATEGORIES
  className?: string
}

export const SectionTitle = (props: SectionTitleProps) => {
  const { type, className } = props

  const categories = PAGE_CATEGORIES[type]
  if (!categories) return null

  if (type === 'COOPERATIONS' || type === 'ABOUT') {
    return (
      <h5
        className={twMerge('mb-4 text-xl font-[500] text-[#18181B]', className)}
      >
        {categories}
      </h5>
    )
  }

  const [highlightWord, ...subTitle] = categories

  return (
    <h5 className={twMerge('mb-4 flex h-9 items-center gap-2', className)}>
      <div className='flex h-9 w-9 items-center justify-center rounded-full bg-primary text-[1.25rem] leading-[1.75rem] text-[white]'>
        {highlightWord}
      </div>
      <div className='text-[1.25rem] font-[600] leading-[1.75rem]'>
        {subTitle}
      </div>
    </h5>
  )
}
