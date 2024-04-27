import { PAGE_CATEGORIES } from '@/constants/category'
import { cn } from '@/libs/utils'

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
      <h5 className={cn('mb-4 text-xl font-[500] text-zinc-900', className)}>
        {categories}
      </h5>
    )
  }

  const [highlightWord, ...subTitle] = categories

  return (
    <h5 className={cn('mb-4 flex h-9 items-center gap-2', className)}>
      <div className='flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xl text-white'>
        {highlightWord}
      </div>
      <div className='text-xl font-[600]'>{subTitle}</div>
    </h5>
  )
}
