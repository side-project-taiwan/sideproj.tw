import { cn } from '@/libs/utils'

type Props = {
  currentIndex: number
  length: number
  onClick: (index: number) => () => void
}

export const SPTPagination = ({ currentIndex, length, onClick }: Props) => {
  return (
    <ul className='flex h-2 w-full items-center justify-center gap-x-3'>
      {Array.from({ length }, (_, index) => {
        return (
          <li
            key={index}
            onClick={onClick(index)}
            className={cn(
              'h-2 w-2 cursor-pointer rounded-full ',
              'transition-all duration-300 ease-in-out',
              'hover:bg-blue-500',
              currentIndex === index ? 'bg-blue-600' : 'bg-zinc-200',
            )}
          />
        )
      })}
    </ul>
  )
}
