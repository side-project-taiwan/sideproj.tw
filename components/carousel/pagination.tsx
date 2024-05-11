import { cn } from '@/libs/utils'

type Props = {
  currentIndex: number
  length: number
  onClick: (_index: number) => void
  className?: string
}

export const SPTCarouselPaginaiton = ({
  currentIndex,
  length,
  onClick,
  className,
}: Props) => {
  return (
    <ul
      className={cn(
        'flex h-2 w-full items-center justify-center gap-x-3',
        className,
      )}
    >
      {Array.from({ length }, (_, index) => {
        return (
          <li
            key={index}
            className={cn(
              'h-2 w-2 cursor-pointer rounded-full ',
              'transition-all duration-300 ease-in-out',
              'hover:bg-blue-500',
              currentIndex === index ? 'bg-blue-600' : 'bg-zinc-200',
            )}
            onClick={() => onClick(index)}
          />
        )
      })}
    </ul>
  )
}
